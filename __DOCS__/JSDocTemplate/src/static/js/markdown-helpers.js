(function(options, $){

	$(function(){

		<!-- Add basic table classes if missing (markdown tables for example) -->
		$('table').not('.table,.ignore').addClass('table table-striped');

	});

})(window.TEMPLATE_OPTIONS, jQuery);