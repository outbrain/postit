<a name="PostIt"></a>
## PostIt
**Kind**: global class  
**Access:** public  

* [PostIt](#PostIt)
    * [new PostIt(id)](#new_PostIt_new)
    * [.on(event, listener)](#PostIt+on) ⇒ <code>object</code>
    * [.off(event, [listener])](#PostIt+off) ⇒ <code>object</code>
    * [.emit(event, target, message, origin)](#PostIt+emit) ⇒ <code>object</code>

<a name="new_PostIt_new"></a>
### new PostIt(id)
PostIt Module.


| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="PostIt+on"></a>
### postIt.on(event, listener) ⇒ <code>object</code>
Registers a `listener` to a `PostIt` instance (`id`), for a given `event`.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| listener | <code>function</code> | 

<a name="PostIt+off"></a>
### postIt.off(event, [listener]) ⇒ <code>object</code>
- If a `listener` is not provided, then unregister all listeners from a `PostIt` instance (`id`), for a given `event`.
- If a `listener` is provided, then unregister a `listener` from a `PostIt` instance (`id`), for a given `event`.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| [listener] | <code>function</code> | 

<a name="PostIt+emit"></a>
### postIt.emit(event, target, message, origin) ⇒ <code>object</code>
- If `event` is an asterisk (\*), then emit an `event` to all listeners registered to a `PostIt` instance (`id`), for all given `event`s.
- If `event` is not an asterisk (\*), then emit an `event` to all listeners registered to a `PostIt` instance (`id`), for a given `event`.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| target | <code>object</code> | 
| message | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 
| origin | <code>string</code> | 

