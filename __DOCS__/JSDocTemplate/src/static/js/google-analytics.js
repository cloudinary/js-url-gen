/**
 * @file This file contains the basic Google Analytics init code and is included as part of the template.min.js file in the compiled template.
 *
 * This makes use of the `analytics` option to allow you to provide your own `ua` and `domain` to the script.
 */
(function(options){

	if (options.analytics && options.analytics.ua && options.analytics.domain){
		(function ( i, s, o, g, r, a, m ) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push( arguments )
				}, i[r].l = 1 * new Date();
			a = s.createElement( o ),
				m = s.getElementsByTagName( o )[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore( a, m )
		})( window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga' );

		ga( 'create', options.analytics.ua, options.analytics.domain );
		ga( 'send', 'pageview' );
	}

})(window.TEMPLATE_OPTIONS);