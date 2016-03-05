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
Registers `.postMessage` event listeners.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| listener | <code>function</code> | 

<a name="PostIt+off"></a>
### postIt.off(event, [listener]) ⇒ <code>object</code>
Unregisters (all | explicit) `.postMessage` event listeners.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| [listener] | <code>function</code> | 

<a name="PostIt+emit"></a>
### postIt.emit(event, target, message, origin) ⇒ <code>object</code>
Emits explicit `message` events, using the client's `.postMessage` emitter.

**Kind**: instance method of <code>[PostIt](#PostIt)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| target | <code>object</code> | 
| message | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 
| origin | <code>string</code> | 

