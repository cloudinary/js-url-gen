(function(options, $){

	$(function(){
		// if collapseSymbols is false we don't have to do anything
		if (!options.collapseSymbols) return;

		// find all collapsible symbol titles in the page and add a toggle icon to it
		$('dt.collapsible-symbol').each(function(i, dt){
				// create a jq object of the current element and figure out if it's expanded or collapsed
				var $title = $(dt), expanded = $title.hasClass("expanded"),
				// create the toggle with the correct icon
					$toggle = $("<span/>", {"class": "pull-right toggle-icon glyphicon glyphicon-chevron-" + (expanded ? "up" : "down")});
				// all collapsible symbols have only a single H# element displaying the name, add the toggle to that
				$title.find("h1,h2,h3,h4,h5").first().append($toggle);
			})
			// bind a click event to all collapsible DTs to toggle their sibling DDs :P
			.on('click', function(e){
				// if the origin of the click is an anchor do nothing and let the browser handle it
				var $target = $(e.target);
				if ($target.is('a') || $target.closest('a').length != 0 || $target.is('.checkbox,.checkbox-inline') || $target.closest('.checkbox,.checkbox-inline').length != 0) return;

				// otherwise toggle the current state of the details
				e.preventDefault();
				var $title = $(this),// the dt.symbol-title that was clicked
					$icon = $title.find('.toggle-icon'), // we need to toggle the icon class so find the element
					expand = !$title.hasClass('expanded'), // figure out if we should expand or collapse the details
					$details = $title.next('dd.symbol-details'), // the dd.symbol-details associated with the current title
					$inner = $details.find('div.symbol-details-inner'), // the details inner element that we use to calculate the height we need to transition to
					height = $details.outerHeight(); // the current height of the details

				if (expand){
					// toggle the icon, add the inner height to the current height and then transition to that value
					$icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
					height += $inner.outerHeight();
					$title.add($details).addClass('expanded');
					$details.addClass('transition').css('max-height', height);
				} else {
					// toggle the icon, set the max-height to the current height and then transition to 0, the max-height is set to 9999 in the below
					// transitionend event to fix any sizing issues so it needs to be reset to the current value again before transitioning.
					$icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
					$title.add($details).removeClass('expanded');
					$details.removeClass('transition').css('max-height', height);
					setTimeout(function(){
						// actually start the transition
						$details.addClass('transition').css('max-height', 0);
					}, 10)
				}
			});

		// bind a transitionend event to all collapsible DDs to set the max-height property to a high value to fix any sizing issues incurred from the transition above
		$('dd.collapsible-symbol').on('transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd', function(){
			var $this = $(this);
			if($this.hasClass('expanded')){
				$this.css('max-height', 9999);
			}
		});
	});

})(window.TEMPLATE_OPTIONS, jQuery);