/**
 * Custom implementation of the Prism line-numbers plugin to make each line-number an anchor.
 */
(function() {

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

var uniqueId = 0;

Prism.hooks.add('complete', function (env) {
	if (!env.code) {
		return;
	}

	// works only for <code> wrapped inside <pre> (not inline)
	var pre = env.element.parentNode;
	var clsReg = /\s*\bline-numbers\b\s*/;
	if (
		!pre || !/pre/i.test(pre.nodeName) ||
			// Abort only if nor the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))
	) {
		return;
	}

	if (env.element.querySelector(".line-numbers-rows")) {
		// Abort if line numbers already exists
		return;
	}

	uniqueId++;

	if (clsReg.test(env.element.className)) {
		// Remove the class "line-numbers" from the <code>
		env.element.className = env.element.className.replace(clsReg, '');
	}
	if (!clsReg.test(pre.className)) {
		// Add the class "line-numbers" to the <pre>
		pre.className += ' line-numbers';
	}

	var match = env.code.match(/\n(?!$)/g);
	var linesNum = match ? match.length + 1 : 1;
	var lineNumbersWrapper;

	// var lines = new Array(linesNum + 1);
	// lines = lines.join('<span></span>');

	var start = 1;
	if (pre.hasAttribute('data-start')) {
		start = parseInt(pre.getAttribute('data-start'), 10);
	}


	var len = linesNum + 1,
		lines = '', name;
	for (var i = start; i < len; i++){
		// originally I had line numbers appearing on every example so I needed a unique id per instance, since then
		// I've changed my mind and decided they shouldn't have line-numbers. This means the only place line-numbers
		// appear is in the generated source files which only contain a single instance of prism so I dropped the
		// uniqueId in favor of shorter, prettier hashes. I've left the uniqueId code intact except for the below
		// line so I can just switch back again if it's ever needed.
		// NB: Change the generated hashes in the postProcessor.js registerSources method.
		// name = 'prism-'+uniqueId+'-line-'+i;
		name = 'line-'+i;
		lines += '<a href="#'+name+'" name="'+name+'"></a>';
	}

	lineNumbersWrapper = document.createElement('span');
	lineNumbersWrapper.className = 'line-numbers-rows';
	lineNumbersWrapper.innerHTML = lines;

	if (pre.hasAttribute('data-start')) {
		pre.style.counterReset = 'linenumber ' + (start - 1);
	}

	env.element.appendChild(lineNumbersWrapper);

});

}());