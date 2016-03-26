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
Registers an event `listener` for an `event`, to a `PostIt` instance.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| listener | <code>function</code> | 

<a name="PostIt+off"></a>
### postIt.off(event, [listener]) ⇒ <code>object</code>
- If a `listener` is not provided, then unregister all event listeners for an `event`, from a `PostIt` instance.
- If a `listener` is provided, then unregister an event `listener` for an `event`, from a `PostIt` instance.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| [listener] | <code>function</code> | 

<a name="PostIt+emit"></a>
### postIt.emit(event, target, message, origin) ⇒ <code>object</code>
Emits an `event` to registered event listeners for an `event`, to a `PostIt` instance.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| target | <code>object</code> | 
| message | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 
| origin | <code>string</code> | 

