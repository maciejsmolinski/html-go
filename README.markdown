# HTML-go

A **lightweight html/css/js framework**.
It's purpose is to **speed up frontend development** and diving into new projets. 
It's a simple base. You choose what you need and remove all the code you don't. That's it!

(current version: 0.9.5)

VIEW DEMO: [http://maciejsmolinski.com/framework/demo/](http://maciejsmolinski.com/framework/demo/)

### Directory Stucture:

That is directory structure I use in framework

* `css/` - css stylesheets
* `js/` - all the javascript
* `images/` - site images, remember to optimize them (<http://smush.it/>)

### Framework in shortcut:

* **HTML5** doctype
* [**HEAD.JS**](http://headjs.com) responsible for loading scripts in parallel
* **jQuery 1.4.4** provided by Google CDN
* [Modified **IE6 Notice** PL/EN](http://shapeshed.github.com/ie6-notice/)
* Separate **IE stylesheet**
* **Appended `.js` class** to body tag if user's browser supports javascript

### Unnecessary code ?

`css/extended.css` is mostly form styling stylesheet, I use it to speed up my backend coding, if you don't wish to use it, just **delete the file and remove ** from `css/style.css` this line:

		@import url(extended.css);

### Additional information

Some code snippets and concepts are based on:

* [YUI 3](http://developer.yahoo.com/yui/3/)
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)

### Credits

Created by Maciej Smoliński (<http://maciejsmolinski.com>). No rights reserved