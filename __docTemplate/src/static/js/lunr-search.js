/* eslint-disable */

/**!
 * This file contains the frontend components that make use of the .json file output by the lunr-search.js file.
 * This file is included in the layout.tmpl and makes use of the HTML output by the lunr-search-modal.tmpl and
 * lunr-search-navbar.tmpl which are included in the layout.tmpl and navbar.tmpl respectively.
 *
 * An overview of how this works is that this binds to the search input and only loads the lunr.json file the first time
 * a user performs a search. The results are then loaded into a client side lunr.Index and store to perform searches.
 * This has the benefits of loading the possibly large .json file only when it's needed and not on every page load and
 * lunr doesn't have to actually perform any indexing of documents in the browser as it was all done when the
 * documentation was generated and is contained in the lunr.json file which drastically improves performance.
 */
/**
 * @summary The lunr document objects found in the {@link LunrDatabase#store} contain the following properties.
 * @typedef {Object} lunrdoc
 * @prop {string} id - The id for the document, this is the filename of the jsdoc document in this implementation.
 * @prop {string} kind - The type name of the document e.g.; class, tutorial, method, member, etc.
 * @prop {string} title - The title of the document.
 * @prop {string} longname - The full longname of the document.
 * @prop {string} name - The short name of the document.
 * @prop {string} tags - All tags created by the {@link LunrSearch#tags} method during documentation generation.
 * @prop {string} summary - The short summary of the document.
 * @prop {string} description - The long description of the document.
 * @prop {string} body - The parsed text form of the documents generated HTML file.
 */
(function (options, $) {
  /**
   * @summary A simple wrapper around the lunr index and store which ajax loads the lunr.json file when required.
   * @constructor
   */
  function LunrDatabase() {
    if (!(this instanceof LunrDatabase)) return new LunrDatabase(); // make sure this a new instance
    /**
     * @summary The lunr.Index loaded from the .json file. Prior to .load() being called this is an empty object.
     * @type {lunr.Index}
     * @default {}
     */
    this.index = {};
    /**
     * @summary The store loaded from the .json file. Prior to .load() being called this is an empty object.
     * @type {Object.<lunrdoc>}
     * @default {}
     */
    this.store = {};
    /**
     * @summary Whether or not the .json file has been loaded. This is set in the .load() method.
     * @type {boolean}
     * @default false
     */
    this.loaded = false;
  }

  /**
   * @summary Performs an ajax get request for the .json file containing the index and store and once complete loads them into there respective properties.
   * @returns {jQuery.Promise} If `resolved` then the .json file was successfully retrieved and loaded.
   *
   * If `rejected` an error occurred loading the .json file and searching is not possible.
   */
  LunrDatabase.prototype.load = function () {
    var self = this;
    return $.get('js/lunr-data.json').then(function (results) {
      self.store = results.store;
      self.index = lunr.Index.load(results.index);
      self.loaded = true;
    });
  };

  LunrDatabase.prototype.loadEmbed = function () {
    this.store = window.lunrData.store;
    this.index = lunr.Index.load(window.lunrData.index);
    this.loaded = true;
  };

  /**
   * @summary Performs a search against the lunr index asynchronously loading the index and store if needed.
   * @param {string} query - The query to perform against the index.
   * @returns {jQuery.Promise} If `resolved` the first argument supplied to all success callbacks is an array of {@link lunrdoc}'s matching the search query, these are ordered by best match, index 0 being the highest.
   *
   * If `rejected` the first argument should contain an error object with more information about what failed.
   */
  LunrDatabase.prototype.search = function (query) {
    var self = this;
    return $.Deferred(function (def) {
      if (self.loaded) {
        def.resolve(self._search(query));
      } else if (window.useLunrData) {
        self.loadEmbed();
        def.resolve(self._search(query));
      } else {
        self.load().then(function () {
          def.resolve(self._search(query));
        }, def.reject);
      }
    });
  };

  /**
   * @summary Used internally by the .search() method to perform the actual lunr search and then build up an array of documents from the store using the `ref` property from the search results.
   * @param query
   * @returns {Array.<lunrdoc>}
   * @private
   */
  LunrDatabase.prototype._search = function (query) {
    var self = this, results = [], raw = this.index.search(query);
    $.each(raw, function (i, result) {
      results.push(self.store[result.ref]);
    });
    return results;
  };

  /**
   * @summary This class handles the ui for the various components of the search.
   * @constructor
   */
  function LunrSearch() {
    if (!(this instanceof LunrSearch)) return new LunrSearch(); // make sure this is an instance
    /**
     * @summary The lunr database to perform searches against.
     * @type {LunrDatabase}
     */
    this.db = new LunrDatabase();
    /**
     * @summary The search input found in the lunr-search-navbar.tmpl.
     * @type {jQuery}
     */
    this.$input = $('#lunr-search-input').on('keyup', {self: this}, this.onKeyup);
    /**
     * @summary The search button found in the lunr-search-navbar.tmpl.
     * @type {jQuery}
     */
    this.$submit = $('#lunr-search-submit').on('click', {self: this}, this.onClick);
    /**
     * @summary The Bootstrap modal found in the lunr-search-modal.tmpl.
     * @type {jQuery}
     */
    this.$modal = $('#lunr-search-modal');
    /**
     * @summary The Bootstrap modals' body found in the lunr-search-modal.tmpl.
     * @type {jQuery}
     */
    this.$body = $('#lunr-search-body');
    /**
     * @summary The Bootstrap modals' footer found in the lunr-search-modal.tmpl.
     * @type {jQuery}
     */
    this.$footer = $('#lunr-search-footer');
    /**
     * @summary If required this contains a Bootstrap pagination component that is added to the footer of the modal.
     * @type {jQuery}
     */
    this.$pagination = $();
    /**
     * @summary The maximum number of results to display per page.
     * @type {number}
     */
    this.limit = 5;
  }

  /**
   * @summary Creates the Bootstrap pagination component given the total number of pages available.
   * @param {number} totalPages - The total pages to create pagination for.
   * @returns {jQuery} If `totalPages <= 1` this returns an empty jQuery object.
   */
  LunrSearch.prototype.$createPagination = function (totalPages) {
    if (totalPages <= 1) return $();
    var $ul = $('<ul/>', {'class': 'pagination pagination-sm pull-left'});
    for (var i = 0; i < totalPages; i++) {
      var $link = $('<a/>', {
          href: '#lunr-search-result-page-' + i,
          text: i + 1
        }).on('click', {self: this}, this.onPaginationClick),
        $li = $('<li/>').append($link);
      if (i == 0) $li.addClass('active');
      $ul.append($li);
    }
    return $ul;
  };

  /**
   * @summary Handles the click event of pagination links created with the .$createPagination() method.
   * @param e - The jQuery click event object.
   * @ignore
   */
  LunrSearch.prototype.onPaginationClick = function (e) {
    e.preventDefault();
    var self = e.data.self, $this = $(this), target = $this.attr('href');
    self.$body.find('.lunr-search-results-page').removeClass('active');
    self.$body.find(target).addClass('active');
    self.$pagination.find('li').removeClass('active');
    $this.closest('li').addClass('active');
  };

  /**
   * @summary Performs the search against the database and appends the results to the modal body, this is only called from the `keyup` and `click` listeners of the search input and button respectively.
   * @param {string} query - The query to perform against the lunr database.
   * @returns {jQuery.Promise} If `resolved` the search completed successfully and the results have been displayed.
   *
   * If `rejected` the first argument should contain an error object with more information about what failed.
   */
  LunrSearch.prototype.start = function (query) {
    var self = this;
    return this.db.search(query).then(function (results) {
      var pages = [], index = -1;
      // first split the results into pages using the limit


      // Here we can perform one last sort, in case we need to.
      var __actions = [];
      var __qualifiers = [];
      var __namespaces = [];
      var __methods = [];
      var __classes = [];
      var __sdk = [];
      var __rest = [];

      results.forEach(function(doclet){
        if (doclet.summary === 'action') {
          __actions.push(doclet);
          return;
        }

        if (doclet.summary === 'qualifier') {
          __qualifiers.push(doclet);
          return;
        }

        if (doclet.summary.toLowerCase() === 'sdk') {
          __sdk.push(doclet);
          return;
        }

        if (doclet.kind === 'function') {
          __methods.push(doclet);
          return;
        }

        if (doclet.kind === 'classes') {
          __classes.push(doclet);
          return;
        }

        if (doclet.kind === 'namespace') {
          __namespaces.push(doclet);
          return;
        }
        __rest.push(doclet);
      });

      results = [].concat(__namespaces, __actions, __qualifiers, __sdk, __classes, __methods, __rest);

      $.each(results, function (i, result) {
        if (i % self.limit === 0) {
          index = pages.push([]) - 1;
        }
        pages[index].push(result);
      });
      // once done clear the body and generate each page as it's own ul
      self.$body.empty();

      var $div = $('<h4/>', {'style': 'font-weight:bold'}).text('Legend:');
      self.$body.append($div);

      var $div = $('<div/>');
      $div.append($('<span/>', {'class': 'lunr-search-result-pill action'}).text('action'));
      $div.append($('<span/>', {'class': ''}).text(' - Contains the foo bar'));
      self.$body.append($div);

      var $div = $('<div/>');
      $div.append($('<span/>', {'class': 'lunr-search-result-pill qualifier'}).text('qualifier'));
      $div.append($('<span/>', {'class': ''}).text(' - Contains the foo bar'));
      self.$body.append($div);

      var $div = $('<div/>');
      $div.append($('<span/>', {'class': 'lunr-search-result-pill namespace'}).text('namespace'));
      $div.append($('<span/>', {'class': ''}).text(' - Contains the foo bar'));
      self.$body.append($div);

      var $div = $('<h4/>', {'style': 'font-weight:bold'}).text('Results:');
      self.$body.append($div);

      $.each(pages, function (i, page) {
        var $ul = $('<ul/>', {'class': 'lunr-search-results-page', id: 'lunr-search-result-page-' + i});
        if (i === 0) $ul.addClass('active');
        $.each(page, function (i, result) {
          var kind = result.kind;
          if (kind === 'function') kind = 'method';

          var $li = $('<li/>');
          $li.addClass('search-result-line-item');


          console.log(result);

          // var summary = result.summary;
          // var isBuilder = summary.indexOf('@builder') >= 0;
          var docletNamespace = result.id.replace('.html#', '.').replace('.html', '.').split('.').filter(function (a) {
            return a;
          });
          var type = docletNamespace[0]; // Actions, Values, SDK - master namespace
          var masterType;

          // if (type === 'Actions' && isBuilder) {
          // 	masterType = 'Action builder';
          // } else if ( type === 'Values' && isBuilder) {
          // 	masterType = 'Qualifier builder';
          // } else if (kind === 'namespace') {
          // 	masterType = 'Namespace';
          // } else {
          // 	masterType =  docletNamespace[0]+ kind;
          // }

          masterType = docletNamespace[0] + ' -> ' + kind;

          var $div = $('<div/>');
          var group = docletNamespace[1]; // Delivery, Resize etc.

          console.log(docletNamespace);

          // MasterType -> _Group_ -> Method?
          // Master type

          var colors = ['black', 'black', 'black', 'teal'];

          (result.summary || kind).split(' ').forEach(function (pillText) {
            if (pillText) {
              $div.append($('<span/>', {'class': 'lunr-search-result-pill' + ' ' + pillText.toLowerCase()}).text(pillText));
            }
          })


          docletNamespace.forEach(function (namespaceChunk, i) {
            $div.append($('<span/>', {'style': 'color:' + colors[i] || 'black' + ';font-weight:bold'}).text(namespaceChunk));
            if (docletNamespace[i + 1]) {
              $div.append($('<span/>').text(' -> '));
            }
          });

          $li.append($div);
          var $a = $('<a/>', {
            href: result.id,
            'class': 'lunr-search-result-title'
          }).html(result.title).prepend($('<span/>', {'class': 'lunr-search-result-kind', text: result.kind + ': '}));
          $li.append($a);
          $li.append($('<div/>', {'class': 'lunr-search-result-desc'}).text(result.description))
          $ul.append($li);
        });

        self.$body.append($ul);
      });
      // if there is a pagination component from a previous search remove it now before we lose the reference to it
      if (self.$pagination.length) {
        self.$pagination.remove();
      }
      // create the pagination component if required and append it to the footer and show the modal.
      self.$pagination = self.$createPagination(pages.length);
      self.$footer.prepend(self.$pagination);
      self.$modal.modal({show: true});
    });
  };

  /**
   * @summary Listens to the keyup event on the .$input element and triggers a search if the user hits the Enter key.
   * @param e - The jQuery keyup event object.
   * @ignore
   */
  LunrSearch.prototype.onKeyup = function (e) {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    e.data.self.start(e.data.self.$input.val());
  };

  /**
   * @summary Handles the click event of the .$submit button element and triggers a search.
   * @param e - The jQuery click event object.
   * @ignore
   */
  LunrSearch.prototype.onClick = function (e) {
    e.preventDefault();
    e.data.self.start(e.data.self.$input.val());
  };

  // expose the class on the window in case for some reason we need to create a new instance (we shouldn't)
  window.LunrSearch = LunrSearch;

  if (location.protocol.substr(0, 4) !== 'http') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "js/lunr-data.js";
    document.body.appendChild(script);
    window.useLunrData = true;
  }

  // init a new instance of the LunrSearch class on DOM ready and exposes it as window.lunrSearch (lowercase L)
  // so we can use it from outside of this file if needed.
  $(function () {
    window.lunrSearch = new LunrSearch();
  });

})(window.TEMPLATE_OPTIONS, jQuery);
