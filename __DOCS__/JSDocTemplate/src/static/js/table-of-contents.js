(function(options, tocEnabled, $){

	/**
	 * While this is called `TOC` it actually performs a few functions related to anchors and scrolling.
	 *
	 * 1. It parses the page for all `H1`, `H2`, `H3` and `H4` elements and ensures they have an id, using either the existing one or generating one by slugifying the headers' text.
	 * 2. It adds an `A` element with a link icon that appears on hover to all parsed headers that when clicked simply links back to the current symbol allowing a user to easily get a link to specific documentation.
	 * 3. It builds the Table of Contents from the parsed headers and provides the underlying logic for that component.
	 * 4. It listens to the `hashchange` event and hijacks all anchor element clicks in the page to ensure when navigating the browser correctly offsets itself.
	 *
	 * When disabled by setting the `showTableOfContents` option, the above steps 1, 2 and 4 are still performed to ensure anchor clicks are handled correctly.
	 * @summary Used to parse the page for headers to build the Table of Contents.
	 * @constructor TOC
	 * @param {boolean} enabled - Whether or not the Table of Contents is enabled for this doclet.
	 * @example {@caption The following shows the ready callback that is registered when this script is loaded. The `DOCLET_TOC_ENABLED` variable is set by the template on `window` object.}
	 * $(function(){
	 *
	 * 	var toc = new TOC(DOCLET_TOC_ENABLED);
	 * 	toc.parse();
	 * 	if (toc.enabled && toc.any()) {
	 * 		toc.init();
	 * 	} else {
	 * 		toc.fixColumns();
	 * 	}
	 * 	toc.offsetScroll(60);
	 *
	 * });
	 */
	function TOC(enabled){
		if (!(this instanceof TOC)) return new TOC(enabled);
		this.enabled = !!enabled;
		this._items = {all:[],h1:[],h2:[],h3:[],h4:[]};
		this._last = {h1:null,h2:null,h3:null,h4:null};
	}

	/**
	 * @summary This is the structure of the TOC items used to generate the TOC itself parsed from the individual page headers.
	 * @typedef {Object} TOC~Item
	 * @prop {string} id - The header id for this item.
	 * @prop {jQuery} $header - The jQuery header element.
	 * @prop {HTMLHeadingElement} header - The actual heading element.
	 * @prop {HTMLElement} dd - The definition description `DD` element if the header is contained with a `DT` element.
	 * @prop {string} tag - The lower cased `tagName` property of the header.
	 * @prop {string} html - The innerHTML of the header with all `A` elements replaced with `SPAN`.
	 * @prop {Array.<TOC~Item>} children - An array of any child items for this item.
	 */

	/**
	 * This keeps track of the last of each type of header added and performs a cascading clear of any lower level headers when a higher one is set.
	 * @summary Uses the given item and its' tag to set the {@link TOC#_last} object.
	 * @param {TOC~Item} item - The last item to be processed.
	 * @private
	 */
	TOC.prototype._setLast = function(item){
		switch(item.tag){
			case 'h1':
				this._last = {h1:item,h2:null,h3:null,h4:null};
				break;
			case 'h2':
				this._last.h2 = item;
				this._last.h3 = this._last.h4 = null;
				break;
			case 'h3':
				this._last.h3 = item;
				this._last.h4 = null;
				break;
			case 'h4':
				this._last.h4 = item;
				break;
		}
	};

	/**
	 * @summary Gets the parent for the given item.
	 * @param {TOC~Item} item - The item to retrieve the parent for.
	 * @returns {?TOC~Item} The parent item or `null` if none was found.
	 * @private
	 */
	TOC.prototype._getParent = function(item){
		var tag = 'h' + (item.tag.substr(1) - 1),
			parent = this._last[tag];

		while (!parent){
			tag = 'h' + (tag.substr(1) - 1);
			parent = this._last[tag];
			if ($.inArray(tag, ['h1','h2','h3','h4']) === -1){
				parent = null;
				break;
			}
		}
		return parent;
	};

	/**
	 * This ensures all parsed headers have an id, using either the existing one or generating one by slugifying the headers' text.
	 *
	 * It then adds an `A` element with a link icon that appears on hover to all parsed headers that when clicked simply links back to the current symbol allowing a user to easily get a link to specific documentation.
	 *
	 * If the Table of Contents is enabled this also registers the header using the {@link TOC#add} method.
	 * @summary Parses the `.main-content` element for all `H1`, `H2`, `H3` and `H4` elements and performs some processing on them.
	 */
	TOC.prototype.parse = function(){
		var self = this;
		$('.main-content').find('h1,h2,h3,h4').each(function(){
			var $header = $(this), id = $header.attr('id');
			if (!id){
				id = self.slugify($header.text());
				$header.attr('id', id);
			}
			$header.addClass('anchored').append(self.$anchorLink(id));
			if (self.enabled){
				self.add($header);
			}
		});
	};

	/**
	 * The element created contains only the `glyphicon-link` icon (<i class="glyphicon glyphicon-link"></i>) allowing users to click on it to get a url to specific documentation.
	 * @summary Creates a new jQuery anchor element with the given id.
	 * @param {string} id - The id the anchor links to.
	 * @returns {jQuery}
	 */
	TOC.prototype.$anchorLink = function(id){
		return $('<a/>', {'class': 'anchor-link', href: '#' + id}).append(
			$('<i/>', {'class': 'glyphicon glyphicon-link'})
		);
	};

	/**
	 * This performs a very simple slugification of the provided string. It does do some basic handling of accents using the following mapping strings:
	 *
	 * `"àáäâèéëêìíïîòóöôùúüûñç·/_,:;"` - Characters to replace.
	 * `"aaaaeeeeiiiioooouuuunc------"` - Corresponding character replacements.
	 *
	 * If you need an [RFC3986](https://tools.ietf.org/html/rfc3986) compliant slug then take a look at https://github.com/dodo/node-slug.
	 * @summary Get a slugified version of the given string.
	 * @memberof TOC#
	 * @function slugify
	 * @param {string} str - The string to slugify.
	 * @returns {string} The slugified string.
	 * @example {@caption The below shows the basic usage for this method.}
	 * var slug = slugify( "Marcos Fábio" ); // => "marcos-fabio"
	 */
	TOC.prototype.slugify = function(str){
		str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();

		// remove accents, swap ñ for n, etc
		var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
		var to   = "aaaaeeeeiiiioooouuuunc------";

		for (var i=0, l=from.length ; i<l ; i++)
			str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

		str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
			.replace(/\s+/g, '-') // collapse whitespace and replace by -
			.replace(/-+/g, '-'); // collapse dashes

		return str;
	};

	/**
	 * This retrieves the innerHTML of the given `$header` element but replaces all `A` elements with a `SPAN` as this TOC item is already link itself.
	 * @summary Gets the inner HTML to display in the TOC item.
	 * @param {jQuery} $header - The jQuery header element to retrieve the HTML from.
	 * @returns {string}
	 */
	TOC.prototype.getHTML = function($header){
		var html = $header.clone()
			.find('.anchor-link,.signature-returns,.signature-type,.toggle-icon').remove()
			.end()
			.get(0).innerHTML;

		return !!html
			// replace `a` elements with `span`s as the TOC item itself is a link
			? html.replace(/<a(.*?)>|<(\/)a>/g, "<$2span$1>")
			// if the above parsing failed to retrieve the innerHTML just return the plain text of the header if it has any
			: $header.text();
	};

	/**
	 * @summary Checks if there are any items registered for the TOC.
	 * @returns {boolean} `true` if there are items.
	 */
	TOC.prototype.any = function(){
		return this._items.all.length > 0;
	};

	/**
	 * This creates a new {@link TOC~Item} object from the given `$header` and adds it to its parent if required.
	 * @summary Adds the given `$header` to the TOC.
	 * @param {jQuery} $header - The jQuery header element.
	 * @returns {TOC~Item} The item created from the header is returned.
	 */
	TOC.prototype.add = function($header){
		var item = {
			id: $header.prop('id'),
			$header: $header,
			header: $header.get(0),
			tag: $header.prop('tagName').toLowerCase(),
			dd: $header.closest('dt').next('dd').get(0),
			html: this.getHTML($header),
			children: []
		};
		this._items.all.push(item);
		this._items[item.tag].push(item);
		this._setLast(item);
		if (item.tag != 'h1'){ // find the parent and add this to the children
			var parent = this._getParent(item);
			if (parent && parent.children){
				parent.children.push(item);
			}
		}
		return item;
	};

	/**
	 * @summary Returns the top level of items for the TOC.
	 * @returns {Array.<TOC~Item>} An array of the top most items, this is checked in order from `H1` down to `H4` checking if there are any items registered.
	 */
	TOC.prototype.items = function(){
		if (this._items.h1.length) return this._items.h1;
		if (this._items.h2.length) return this._items.h2;
		if (this._items.h3.length) return this._items.h3;
		if (this._items.h4.length) return this._items.h4;
		return [];
	};

	/**
	 * @summary Recursively creates the TOC `UL` structure.
	 * @param {Array.<TOC~Item>} [items] - The items to render the TOC from. If not supplied the TOC is created using all available items.
	 * @returns {jQuery} The `UL` element containing the TOC items as `LI` elements, child items create there own `UL` within there parent `LI`.
	 */
	TOC.prototype.$nav = function(items){
		var $ul = $('<ul/>', {'class': 'nav'});
		if (!items){
			items = this.items();
			$ul.addClass('toc-nav');
		}
		for (var i = 0, l = items.length; i < l; i++){
			var classes = items[i].$header.clone().removeClass('anchored').prop('className').split(' ');
			classes.push('toc-'+items[i].tag);
			items[i].$li = $('<li/>', {'class': classes.join(' ')});
			items[i].$li.append($('<a/>', {href: '#'+items[i].id}).html(items[i].html));
			if (items[i].children.length){
				items[i].$li.append(this.$nav(items[i].children));
			}
			$ul.append(items[i].$li);
		}
		return $ul;
	};

	/**
	 * This also checks whether or not to affix the TOC within the viewport. When fixed the TOC remains stationary while scrolling through the contents however when at the top of the page the TOC falls back into the normal flow of the document.
	 * @summary Starts monitoring the window scroll position activating the corresponding TOC item when required.
	 */
	TOC.prototype.scrollspy = function(){
		var self = this, $toc = $('.toc'), $parent = $toc.parent(), offset = 60;
		$(window).on('scroll.toc', function(){
			var fixed = ($parent.offset().top - offset) < $(window).scrollTop();
			$toc.toggleClass('affix', fixed);
			var topMost = null;
			for(var i = 0, l = self._items.all.length; i < l; i++){
				var item = self._items.all[i];
				var rect = item.header.getBoundingClientRect();
				if (item.dd){
					rect = item.dd.getBoundingClientRect();
				}
				if (rect.bottom >= offset && rect.left >= 0){
					topMost = item;
					break;
				}
			}
			if (topMost != null){
				$toc.find('.active').removeClass('active');
				topMost.$li.parents('li').addBack().addClass('active')
			}
		}).triggerHandler('scroll.toc');
	};

	/**
	 * When clicked this clears the current `location.hash` value and then triggers the `hashchange` listener to perform the actual scroll reset.
	 * @summary Creates the `"Back to top"` button displayed under the TOC.
	 * @returns {jQuery}
	 */
	TOC.prototype.$backToTop = function(){
		return $('<span/>', {'class': 'back-to-top', text: 'Back to top'}).on('click', function(e){
			e.preventDefault();
			if (window.history){
				history.replaceState(null, document.title, location.pathname + location.search);
			} else {
				location.hash = '';
			}
			$(window).triggerHandler('hashchange');
		});
	};

	/**
	 * When the TOC is enabled this method initializes the plugin generating the items, appending them to the DOM and initializes the scroll spy.
	 * @summary Initializes the TOC appending it to the page.
	 */
	TOC.prototype.init = function(){
		$('nav.toc').append(this.$nav()).append(this.$backToTop());
		this.scrollspy();
	};

	/**
	 * When the TOC is disabled or no items were registered this can be called to fix the column layout removing the space reserved for the TOC.
	 * @summary Fixes the main column layout if the TOC is disabled.
	 */
	TOC.prototype.fixColumns = function(){
		$('.main-content').removeClass('col-md-9').addClass('col-md-12');
		$('.side-content').remove();
	};

	/**
	 * This listens to the `hashchange` event and binds to all `A` elements pointing to anchors within this page and ensures when they are clicked they correctly offset the scroll position by the given height.
	 * @summary Offsets all anchor scrolling by the given amount.
	 * @param {number} amount - The number of pixels to offset the scroll by.
	 */
	TOC.prototype.offsetScroll = function(amount){

		$(window).on('hashchange', function(){
			var id = location.hash.substr(1), $hash, top = 0;
			if (id.length > 0 && ($hash = $('a[name="'+id+'"],[id="' + id + '"]').first()).length){
				top = $hash.offset().top - amount;
			}
			$(window).scrollTop(top);
		}).triggerHandler('hashchange');

		$('a').on('click', function(e){
			if (this.hostname === location.hostname && this.pathname === location.pathname){
				e.preventDefault();
				if (window.history){
					history.replaceState(null, document.title, location.pathname + location.search + this.hash);
				} else {
					location.hash = this.hash;
				}
				$(window).triggerHandler('hashchange');
			}
		});

	};

	/*
	* jQuery DOM ready
	*/
$(function(){

	var toc = new TOC(tocEnabled);
	toc.parse();
	if (toc.enabled && toc.any()) {
		toc.init();
	} else {
		toc.fixColumns();
	}
	toc.offsetScroll(60);

});

})(window.TEMPLATE_OPTIONS, window.DOCLET_TOC_ENABLED, jQuery);