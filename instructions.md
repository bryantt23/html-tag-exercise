HTML Tag Exercise
In this exercise you'll implement a class or data structure to represent HTML tags, their attributes, and the hierarchical structure of an HTML document.

Steps
NOTE: Examples are written in Ruby

Design and implement a class (or other data structure) that can represent a single HTML tag
Tag.new("div")
Write a function or method that can return the HTML string representation of a tag.

# should print "<html></html>"

puts Tag.new("html").to_s
Write a function or method that can add a class to a tag, and account for classes in your HTML string generation logic.

# should print '<html class="blue-theme"></html>'

tag = Tag.new("html")
tag.add_class("blue-theme")
puts tag.to_s

# should print '<html class="blue-theme main-content"></html>'

tag.add_class("main-content")
puts tag
Extend the tag data structure to allow the addition of child tags, and account for children in your HTML string generation logic.

# should print '<html class="blue-theme"><body><div></div></body></html>'

tag = Tag.new("html")
body_tag = Tag.new("body")
div_tag = Tag.new("div")
tag.append_child(body_tag)
body_tag.append_child(div_tag)
puts tag
Implement pretty-printing for the HTML output. The output should have reasonable indentation and newlines.

# should print:

# <html class="blue-theme">

# <body>

# <div></div>

# </body>

# </html>

tag = Tag.new("html")
body_tag = Tag.new("body")
div_tag = Tag.new("div")
tag.append_child(body_tag)
body_tag.append_child(div_tag)
puts tag
Add a method or function to traverse our DOM and return the first element by selector

# Assume that we've built up this tag heirarchy:

# <html>

# <body>

# <div class="main-content">

# <span class="some-other-content"></span>

# <p class="some-other-content">

# </div>

# </body>

# </html>

# should print '<span class="some-other-content"></span>'

puts tag.query_selector(['main-content', 'some-other-content']).to_s
