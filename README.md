jquery.save
===========

Stores a temporary placeholder to a jQuery object.

Instead of having to do this:

```javascript
 $('div').eq(0).html('This div does ' + ($('div').eq(0).hasClass('active') ? '' : 'not ') + 'have a class of active' );
```

Or even this:

```javascript
var $div = $('div').eq(0);

$div.html( 'This div does ' + ($div.hasClass('active') ? '' : 'not ' ) + 'have a class of active' );
```

You can do this:

```javascript
$('div').eq(0).save().html('This div does ' + ($.$.hasClass('active') ? '' : 'not ') + 'have a class of active' );
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