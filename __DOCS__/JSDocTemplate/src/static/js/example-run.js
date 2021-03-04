(function(options, $){

	$(function(){

		$('button.code-run').on('click', function(e){
			var $this = $(this);
			var $textarea = $this.parent('p').next('textarea');
			if ($textarea.length == 0){
				$textarea = $('<textarea/>', {'class': 'form-control dummy-console', rows: 5}).insertAfter($this.parent('p'));
			}
			var code = $this.prev('input[type="hidden"]').val();
			var fn = new Function("console", code);
			var write = function(arg, argN){
				var args = Array.prototype.slice.call(arguments),
					current = $textarea.val();

				$.each(args, function(i, arg){
					if (i > 0) current += ', ';
					current += JSON.stringify(arg);
				});
				current += '\n';
				$textarea.val(current);
			};
			var dummy_console = {
				info: write,
				error: write,
				warn: write,
				log: write
			};
			fn(dummy_console);
		});

	});

})(window.TEMPLATE_OPTIONS, jQuery);