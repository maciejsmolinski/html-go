# html-banana

You're bored being called web ninja ? 
You can be a web monkey bouncin' around!
Why monkey ? Don't ask me, I don't really know (?!) though I have banana for you!

You wonder what html-banana is ?


## About

**html-banana** is a framework I start to work with when creating (x)html/css/js projects.
The project is a result of all my work spent with front-end development. 

I continuously try to improve my code, if you like it and want to suggest some changes - feel free to do it.

We can create genetically modified huge bananas tasting like a.. a... bananas ?!


## The code

Firstly, the framework uses html5 doctype `<!DOCTYPE html>` and that's why there are two files:

* `index.html` with html markup
* `index.html5.html` with html5 markup

Then..

We turn [google chrome frame](http://code.google.com/intl/pl-PL/chrome/chromeframe/) ON if user has previously installed it on his computer

* `<meta http-equiv="X-UA-Compatible" content="chrome=1">`

*[eating banana soup..]*

Next, a little trick to append .js class to the body if the browser supports javascript [source](http://www.webkrauts.de/2008/12/14/sehr-sehr-schnelle-seiten-website-performance-best-practice-teil-2/)

* `<script type="text/javascript">document.documentElement.className += " js";</script>`

*[watching banana TV..]*

Basing on [source](http://codecandies.de/2008/12/12/conditional-comments-wenige-requests/) I've added

* `.ie6` class for &lt IE7 browsers
* `.ie7` class for IE7 browser

*[singin' `billy banana is not my lover...`]*

code...
code...
code...

*[looking for monkey girl on facebook...]*

Ok.. we've almost reached --EOF-- and we found..

* `<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->`

dear santa... naah.. dear (?) IE! I'm almighty.. just like you.. so I try to force on you 'support' (hahah..) for some basic html5 markup!

And below we place our javascript, just to make our site load faster

* `jQuery 1.3.2 min` served by google
* `js/js-engine.js` served locally, that's where the magic takes place


## Directory Stucture

That is typical directory structure I use

* `/css` - css stylesheets
* `/js` - all the javascript
* `/images` - site images, remember to optimize them (http://smush.it/)
* `/docs` - docs&licenses


## Branches

Current repository branches

* `master` no desc needed, just read this **README**


## Additional information

Some code snippets and concepts are based on:

* [Blueprint css framework](http://blueprintcss.org) 
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)
* [HTML5 enabling script for IE](http://remysharp.com/2009/01/07/html5-enabling-script/)


## Credits

Created by Maciej Smoliński (http://devbubble.net). No rights reserved