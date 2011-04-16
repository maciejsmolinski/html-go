# HTML-go

Basic html document structure provided to simplify and speed up PSD to HTML/CSS/JS development.

Despite its simplicity, HTML-go is still modular - you choose what you need and remove all the code you don't!

(current version: 0.9.7)

DEMO using extended.css: [http://maciejsmolinski.com/framework/demo/](http://maciejsmolinski.com/framework/demo/)


## Framework in shortcut:

* **HTML5** doctype (there are two versions index file: with html5 markup and with html4 markup)
* **jQuery 1.5.2** provided by Google CDN
* Modified [**IE6 Notice**](http://shapeshed.github.com/ie6-notice/) PL/EN
* Separate **IE stylesheet** with legend (how to hack custom IE version)
* **Appended `.js` class** to body tag if user's browser supports javascript


## Directory Stucture:

The directory structure used in framework:

* `css/` - css stylesheets
* `js/` - all the javascript
* `images/` - site images, remember to optimize them (<http://smush.it/>)


## Unnecessary code ?

`css/extended.css` is mostly form styling stylesheet, I use it to speed up my backend coding. If you don't wish to use it, just **delete the file and remove ** from `css/style.css` this line:

		@import url(extended.css);


## Additional information

Some code snippets and concepts are based on:

* [YUI 3](http://developer.yahoo.com/yui/3/)
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)

## Credits

Created by Maciej Smoliński (<http://maciejsmolinski.com>). No rights reserved