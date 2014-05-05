jQuery GoTop
-------

The jQuery plugin that scrolls you back to the top of the page...

#### Getting Started

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Getting Started</title>
    <link type="text/css" href="plugin/jquery.goTop-0.0.1.css" rel="stylesheet" />
  </head>
  <body>

    <!-- Your Whatever Content Here -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="plugin/jquery.goTop-0.0.1.min.js"></script>
    <script>
    $(document).ready(function() {
      $('body').goTop();
    });
    </script>
  </body>
</html>
```

#### Demo

[http://edgaraafelix.github.io/jquery-gotop/](http://edgaraafelix.github.io/jquery-gotop/)

#### Settings

Name | Type | Default | Description
------ | ---- | ------- | -----------
animation | boolean | true | Whether to apply a fade transition to the element, when false the element would simply appears or disappears.
target | string | 'html' | Element in which we should scroll to, by default 'html' is used.
speed | int  | 600 | A number determining how long the animation will run until the scroll reach the top of the page, by default the speed used is 600.
distance | int | 200 | The distance that the scroll must be from the top of the window in order to display the element that allows you to scroll to the top of the page, by default we use 200.
position | string | 'BOTTOM_RIGHT' | Where to position the element, the default position is 'BOTTOM_RIGHT'. You can use one of the following: TOP_LEFT, TOP_MIDDLE, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_MIDDLE, BOTTOM_RIGHT.

#### Examples

Basic Example:

```javascript
$('body').goTop();
 ```

#### Dependencies

jQuery 1.7+

#### License

Copyright (c) 2014 Edgar Felix

Licensed under the MIT license.
