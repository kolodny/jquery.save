jquery.save
===========

Stores a temporary placeholder to a jQuery object.

Instead of having to do this:

```javascript
 $('div').eq(0).html('This div does ' + ($('div').eq(0).hasClass('blue') ? '' : 'not ') + 'have a class of blue');
```

Or even this:

```javascript
var $div = $('div').eq(0);

$div.html( 'This div does ' + ($div.hasClass('blue') ? '' : 'not ' ) + 'have a class of blue');
```
----

You can save it as a property in the jQuery object (defaults to `'$'`)
### example:

```javascript
$('div').eq(0).save().html('This div does ' + ($.$.hasClass('blue') ? '' : 'not ') + 'have a class of blue');
```
---

You can also pass in a string of what you want the temporary object to be called in the jQuery object  
### example:

```javascript
$('div').eq(0).save('tmp').html('This div does ' + ($.tmp.hasClass('blue') ? '' : 'not ') + 'have a class of blue');
```

----  

----  

----  
##Warning

Do **not** use this in event handlers, e.g.:

```javascript
$('div').eq(0).save.click(function() { $.$.toggleClass('active') });
```

Since `$.$` can get overwritten between the time that it's set and the time that it's called.