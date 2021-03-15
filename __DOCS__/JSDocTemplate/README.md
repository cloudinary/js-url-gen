[![NPM](https://nodei.co/npm/foodoc.png?downloads=true)](https://nodei.co/npm/foodoc/)

[![Dependency Status](https://img.shields.io/david/steveush/foodoc.svg)](https://david-dm.org/steveush/foodoc) [![devDependency Status](https://img.shields.io/david/dev/steveush/foodoc.svg)](https://david-dm.org/steveush/foodoc#info=devDependencies) [![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DHYUFBMRBJLTW)

# FooDoc

FooDoc is a [Bootstrap](http://twitter.github.io/bootstrap/index.html) and [Handlebars](http://handlebarsjs.com/) based template for [JSDoc3](http://usejsdoc.org/). A big thanks must go out to [DocStrap](https://github.com/docstrap/docstrap) as it served as the inspiration for this project.

This project began as a simple modification of DocStrap. Removing the Bootswatch support in favor of my own CSS customizations but it ended up with me re-writing pretty much the entire template, even switching out the template engine to Handlebars.

## Features

* Right side Table of Contents which auto hides on pages it's not required on.
* Basic themeing is supported through the `systemColor` option and if required further customizations can be supplied using the `stylesheets` and `scripts` options.
* Integrated offline search across all doclets and there members (excludes source files).
* Syntax highlighting using [Prism](https://github.com/PrismJS/prism) .
* Breadcrumbs on every page for easy navigation.
* Handlebars template engine using precompiled templates to generate documentation.
* Extended tutorial configuration through the standard `.json` file approach supported by JSDoc allowing you to supply a structure as well as title and summary info for tutorials.
* Configurable navbar links including support for larger systems by switching to list pages with the `inlineNav` option instead of the usual drop downs.
* Responsive design, the generated documentation works across both desktop and mobile devices thanks to Bootstrap.
* Makes use of the JSDoc `@summary` tag where appropriate, this tag now also supports markdown syntax.

### What it looks like

As this started off as a DocStrap modification I've used it's `fixtures` code to generate the sample documentation so you can compare the differences between the two.

**NOTE:** The `fixtures` code doesn't make use of the `@summary` tag when describing it's members so it may look a little sparse.

* [The default template options](http://steveush.github.io/foodoc/examples/default)
* [The template with the `inlineNav` option set to `true`](http://steveush.github.io/foodoc/examples/inline)
* [The template using the `systemLogo` and `systemColor` options](http://steveush.github.io/foodoc/examples/logo-color)
* [The template with the `collapseSymbols` option set to `false`](http://steveush.github.io/foodoc/examples/collapse)

## Ooooh, I want it! How do I get it?

If you manage your own version of jsdoc:

```bash
npm install foodoc
```

When using [grunt](http://gruntjs.com/), please look at [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) which you can use with FooDoc.

### Command line example

```bash
jsdoc -c path/to/conf.json -t ./node_modules/foodoc/template -R README.md -r .
```

The `-c` sets the config, the options you can supply in the templates object are listed below in the options.

The `-t` sets the template. This is the option you need to set to get the FooDoc template to be used.

The `-R` sets a markdown file to be the front page of the documentation.

The `-r` tells jsdoc to run recursively.

The `.` says from current directory.

## Configuring the template

FooDoc ships with a `conf.json` file in the template/ directory. It is just a regular old [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html), but with the following new options:

```javascript
"templates": {
	"systemName"            : "{string}",
	"systemSummary"         : "{string}",
	"systemLogo"            : "{string}",
	"systemColor"           : "{string}",
	"footer"                : "{string}",
	"copyright"             : "{string}",
	"includeDate"           : "{boolean}",
	"dateFormat"            : "{string}",
	"inlineNav"             : "{boolean}",
	"inverseNav"            : "{boolean}",
	"navMembers"            : "{array.<object>}",
	"linenums"              : "{boolean}",
	"showTableOfContents"   : "{boolean}",
	"showAccessFilter"      : "{boolean}",
	"analytics"             : "{object}",
	"collapseSymbols"       : "{boolean}",
	"methodHeadingReturns"  : "{boolean}",
	"outputSourceFiles"     : "{boolean}",
	"outputSourcePath"      : "{boolean}",
	"sort"                  : "{boolean|string}",
	"search"                : "{boolean}",
	"favicon"               : "{string}",
	"stylesheets"           : "{array.<string>}",
	"scripts"               : "{array.<string>}"
}
```

### Options

*   __systemName - `"FooDoc"`__
    The name of the system being documented. This value is used to generate the *home* link in the navbar and the page title for the generated README page.
*   __systemSummary - `"A Bootstrap and Handlebars based JSDoc3 template."`__
    The short summary description of the system being documented. This is used as part of the page title for the generated README page.
*   __systemLogo - `""`__
    A small 40x40 pixel image to used in the navbar along with the `systemName` to create the *home* link.
*   __systemColor - `""`__
    The primary color used to generate the documentation. This changes the background color of the jumbotron-esque headers on every page, the primary callout border and header colors, the TOC link colors and various other small highlights.
*   __footer - `""`__
    Additional content to place in the footer element of each page before the `copyright` and default *generated by* messages. This can contain HTML.
*   __copyright - `"FooDoc Copyright © 2016 The contributors to the JSDoc3 and FooDoc projects."`__
    A copyright message to display in the footer of each page throughout the documentation. This can contain HTML.
*   __includeDate - `true`__
    Whether or not the date is included as part of the *generated by* message.
*   __dateFormat - `Do MMM YYYY`__
    If `includeDate` is true this is the format used to display the date. This makes use of moment.js so any format it supports should be supported here.
*   __inlineNav - `false`__
    If your system is quite large the navbar drop downs just don't look good, setting this option to true changes these drop downs to instead just be a link to a list page.
*   __inverseNav - `true`__
    Bootstrap navbars support an inverse mode, this toggles that option for the documentation navbar with `true` being the dark version.
*   __navMembers__
    This option allows you to specify which kinds of documents appear in the navbar, give them a title and provide a short summary which is then used as part of the `inlineNav` option to generate the list pages. The following shows the default values for this option, you can remove from this array but cannot add new kinds without altering the template. If no documents are registered for a specific kind it is not added to the navbar.
    ```javascript
    [
        {"kind": "class", "title": "Classes", "summary": "All documented classes."},
        {"kind": "external", "title": "Externals", "summary": "All documented external members."},
        {"kind": "global", "title": "Globals", "summary": "All documented globals."},
        {"kind": "mixin", "title": "Mixins", "summary": "All documented mixins."},
        {"kind": "interface", "title": "Interfaces", "summary": "All documented interfaces."},
        {"kind": "module", "title": "Modules", "summary": "All documented modules."},
        {"kind": "namespace", "title": "Namespaces", "summary": "All documented namespaces."},
        {"kind": "tutorial", "title": "Tutorials", "summary": "All available tutorials."}
    ]
    ```
*   __outputSourceFiles - `true`__
    Whether or not to output pretty printed source file documentation that is linked to from other documents.
*   __outputSourcePath - `true`__
    When `outputSourceFiles` is `false`, you may still want to name the file even without a link to the pretty printed output. Set this to `true` when `outputSourceFiles` is `false`. `outputSourceFiles` when `true` takes precedence over this setting.
*   __linenums - `true`__
    When `true`, line numbers will appear in any pretty printed source code blocks. If `outputSourceFiles` is `true` this will add an additional link to all documented members pointing to the exact line number in the pretty printed source file the documentation was pulled from.
*   __showTableOfContents - `true`__
    When `true`, a TOC is generated from all `H1`, `H2`, `H3` and `H4` headings in the generated pages, this includes the README and tutorial pages. If you want to disable this for specific tutorial pages you can set this same option per tutorial in the extended tutorial configuration.
*   __showAccessFilter - `true`__
    When `true`, a checkbox list is displayed allowing the user to toggle the visibility of inherited, public, protected and private symbols of the current doclet. Each checkbox will only be displayed if the doclet contains at least one symbol of that type. If there is only a single type available across the entire doclet the filter is not displayed at all.
*   __analytics - `null`__
    Adds a [Google Analytics](http://www.google.com/analytics) code block to the template output
    _e.g._ `"analytics":{"ua":"UA-XXXXX-XXX", "domain":"XXXX"}`
    * __ua__ The google agent (see Google Analytics help for details)
    * __domain__ The domain being served. (see Google Analytics help for details)

*   __collapseSymbols - `true`__
    When `true`, symbols in generated pages (methods, members, type definitions, etc.) are collapsed so only there title and summary are visible. You can then click on them to reveal more detailed information.
*   __methodHeadingReturns - `true`__
    When `true`, method headings will contain the return type if one exists.
*   __sort - `"linenum, longname, version, since"`__
    Specifies the sort order of the symbols on a page. They will still be grouped under there own headings (Classes, Members, Methods, etc.) but within these groups they are sorted using the supplied value. By default this sorts symbols first by where they were found in the original source code, then by there longname, then by there version and lastly by there since tag.
*   __search - `true`__
    Whether or not to enable the lunr search component.
*   __favicon - `null`__
    An image or favicon that will be used as favicon.
*   __stylesheets - `[]`__
    An array of stylesheet urls to include in every page.
*   __scripts - `[]`__
    An array of script urls to include in every page.

### Extended tutorial configuration

[JSDoc supports providing a `.json` file in your tutorials directory](http://usejsdoc.org/about-tutorials.html) to configure the hierarchical structure and title for tutorials. This template adds two new options to each tutorial in this file.

*   __summary__
    A short summary of the tutorial which is used in various places throughout the documentation, most notably in the page header of the tutorial itself.
*   __showTableOfContents__
    A boolean value indicating whether or not to generate the Table of Contents for this specific tutorial.

The following shows what the `tutorials.json` in the `fixtures` test code contains.

**NOTE:** The array based syntax for child tutorials is not supported at present and children must be supplied as properties of an object.

```javascript
{
  "brush-teeth": {
    "title": "Brush Teeth",
    "summary": "How to brush your teeth!",
    "children": {
      "fence-test": {
        "title": "Fence Test",
        "summary": "Testing syntax highlighting.",
        "showTableOfContents": false
      }
    }
  },
  "drive-car": {
    "title": "Drive Car",
    "summary": "How to drive a car!"
  }
}
```

### Syntax highlighting

FooDoc uses [Prism](https://github.com/PrismJS/prism) to provide syntax highlighting and supports a couple of ways to specify which language to use.

*   The standard markdown syntax is supported.

    <pre>&#96;&#96;&#96;html
&lt;html&gt;&lt;/html&gt;
&#96;&#96;&#96;</pre>

*   Or when using an `@example` tag in your comments you can add a custom inner tag `{@lang languageName}` where `languageName` is one of the default languages supported by Prism (Markup, CSS, C-Like and JavaScript languages are supported by default). You can add this tag anywhere within an `@example` tags body but keep in mind that there is no white-space processing performed when it is removed prior to rendering.

    ```javascript
    /**
     * @example {@lang html}<html></html>
     */
    ```

If you need to use a language provided by a Prism plugin you will need to fork the template and add in the specific language yourself. Take a look at the [Prism documentation](http://prismjs.com/index.html#languages-list) to see a full list of all 119 supported languages.

## FAQ

### Why another template?

Over the years I have tried quite a few templates available for JSDoc and none of them produced a look I was quite happy with. Some got close like DocStrap, but I still wasn't quite satisfied so I did what all developers do eventually, roll their own. I really liked the clean look of the Bootstrap 3 documentation so I used it as base for the layout and styling for this template. 
 
### Why Handlebars?

Personal preference really, Underscore templates work great but due to there ability to have basically any JavaScript in them I've noticed a lot logic which should be handled elsewhere creep into them overtime. It's simply easier to hack it into the template than find where it should be implemented as part of the post processing. 

### What's different from DocStrap's search?

The [lunr](http://lunrjs.com/) search implementation in DocStrap performs all the indexing in the browser using a hidden iframe, this was done to allow the search to work offline when viewing the documentation via the `file://` protocol. It does however have the drawback of loading and then indexing what could potentially be a large numbers of documents, on every page load.

While this works I took a different approach and decided to generate the search index and store as part of the documentation process and output the results in two files `lunr-data.json` and `lunr-data.js`. These two files are then consumed by the search component when required. The `lunr-data.json` file is fetched via ajax request if the documentation is served via `http://` or `https://` protocols while the `lunr-data.js` file is simply included into the page when using the `file://` protocol as you can't perform ajax requests. This ultimately provides us with two primary benefits over DocStrap's implementation:

1. All indexing of documents is performed only once, when the documentation itself is generated. Due to creating the index directly from the JSDoc doclets it contains more detailed information, including information on members, methods and type definitions, leading to better search results where you can click on a method name and be taken directly to it's documentation. 
2. The index and store information is only loaded into the page when a user performs a search, this greatly improves load speeds.

The following shows the lunr index fields implemented by this template:

```javascript
var index = lunr(function(){
    this.field('longname', {boost: 1000});
    this.field('name', {boost: 500});
    this.field('tags', {boost: 300});
	this.field('kind', {boost: 110});
    this.field('title', {boost: 100});
    this.field('summary', {boost: 70});
    this.field('description', {boost: 50});
    this.field('body');
    this.ref('id');
});
```

*   __longname__
    This is basically a doclet id and is the fully qualified name of a documented symbol. e.g. `MyApi.utils.fetch` or `MyApi.Class#fetch`. This has the highest weighting of 1000 as if someone types in the exact longname it should be the first result!
*   __name__
    This is the short or "friendly" name of a doclet, using the two examples from above (`MyApi.utils.fetch` or `MyApi.Class#fetch`) they would both have the same name of `fetch`.
*   __tags__
    This is a space delimited string of any tags generated for the doclet. At present this simply provides multiple variations of the longname to aid in searching, for example the longname `MyApi.utils#fetch` would be added to the tags as the following; `utils#fetch fetch`.
*   __kind__
    This is the kind or type of the doclet (class, namespace, function, etc.).
*   __title__
    This is the page title the doclet uses when generating a page.
*   __summary__
    This is the HTML sanitized doclet summary, in the case of a tutorial or the readme this is the summary value supplied through either the extended configuration or options.
*   __description__
    This is the HTML sanitized doclet description.
*   __body__
    This is the full text of the main content section of the generated HTML for the doclet. Any matches against this have the lowest possible weighting.

### Why Prism instead of Sunlight?

Quite simply Sunlight is no longer maintained and while it does work I prefer Prism which is actively maintained and follows HTML5 standards.

## To Do

*   Refactor and document the template source code. Now that I know how it all works I can slim down source code and then heavily document it so I can use it as the example documentation.

## Changelog

All releases prior to 1.0.0 are considered pre-release, i.e. I'm not finished changing stuff yet so anything can happen ;)

### 0.0.9

*   Fixed issue with the `footer` option not rendering HTML as it was intended.
*   Fixed the missing `global.html` issue.
*   Updated the `copyright` option to also allow HTML in it's content.
*   Updated the `_navbar.hbs` so that if an item has no members it is simply rendered as a link instead of an empty dropdown.
*   Updated the base CSS to apply a background color to the `<html/>` element that matches the footer. This stops the page looking 'incomplete' or 'broken' as there is no longer any whitespace below the footer.

### 0.0.8

*   Updated the navbar dropdowns and the table of contents to handle long lists. If the list exceeds the viewport it now displays a scrollbar. (@mistic100)
*   Fixed missing Google Analytics code in the `_layout.hbs`. (@mistic100)
*   Added the `favicon` option allowing you to supply a path to an image or icon to use as the favicon for the documentation. (@mistic100)
*   Added the `showAccessFilter` option which allows users to filter the symbols of a doclet in real-time by if they are inherited, public, protected or private.

### 0.0.7

*   Fixed Prism CSS conflict with `.namespace` class.
*   Updated Gruntfile to compile and minify all used prism files (including customized plugins) into single includes.
*   Added in the Prism Normalize Whitespace plugin to perform some additional processing to clean up any extra whitespace in examples.

### 0.0.6

*   Replaced Sunlight syntax highlighter with Prism as it is maintained and it's just generally better.

### 0.0.5

*   Updated TOC to align with crumbs.
*   Fixed anchor-links not showing on hover.
*   Updated the search input size to match the TOC.

### 0.0.4

*   Added missing {@run } javascript and css as well as some additional styling for related tutorials.

### 0.0.3

*   Fixed page symbols not generating details correctly when displayed as primary header.

### 0.0.2

*   Fixed missing moment.js dependency in the npm package.
*   Added .npmignore to exclude the generated examples directory.
*   Updated the lunrHelper.js to write files directly to the output directory instead of to the template/static one and then copying it across.

### 0.0.1

*   Initial check in of template.