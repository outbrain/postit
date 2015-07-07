<a name="Manager"></a>
## Manager
Manager Module.

**Kind**: global variable  
**Access:** public  

* [Manager](#Manager)
  * ~~[.__records](#Manager.__records)~~
  * [.add(id)](#Manager.add) ⇒ <code>object</code> &#124; <code>void</code>
  * [.remove(id)](#Manager.remove) ⇒ <code>object</code> &#124; <code>void</code>
  * [.removeAll()](#Manager.removeAll) ⇒ <code>object</code>
  * [.size()](#Manager.size) ⇒ <code>number</code>
  * [.get(id)](#Manager.get) ⇒ <code>object</code> &#124; <code>void</code>
  * [.getAll(id)](#Manager.getAll) ⇒ <code>object</code>
  * [.on(id)](#Manager.on) ⇒ <code>object</code> &#124; <code>void</code>
  * [.off(id)](#Manager.off) ⇒ <code>object</code> &#124; <code>void</code>
  * [.emit(id)](#Manager.emit) ⇒ <code>object</code> &#124; <code>void</code>
  * [.openWindow()](#Manager.openWindow)

<a name="Manager.__records"></a>
### ~~Manager.__records~~
***Deprecated***

Exposes the Manager's records.

**Kind**: static property of <code>[Manager](#Manager)</code>  
**Access:** public  
<a name="Manager.add"></a>
### Manager.add(id) ⇒ <code>object</code> &#124; <code>void</code>
Creates and manages a new `PostIt` instance.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.remove"></a>
### Manager.remove(id) ⇒ <code>object</code> &#124; <code>void</code>
Removes an explicit `PostIt` instance.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.removeAll"></a>
### Manager.removeAll() ⇒ <code>object</code>
Remove all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
<a name="Manager.size"></a>
### Manager.size() ⇒ <code>number</code>
Returns the length of all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
<a name="Manager.get"></a>
### Manager.get(id) ⇒ <code>object</code> &#124; <code>void</code>
Gets an explicit `PostIt` instance.

**Kind**: static method of <code>[Manager](#Manager)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.getAll"></a>
### Manager.getAll(id) ⇒ <code>object</code>
Gets all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.on"></a>
### Manager.on(id) ⇒ <code>object</code> &#124; <code>void</code>
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+on](postit.md#PostIt+on) for further information (signature, etc.).  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.off"></a>
### Manager.off(id) ⇒ <code>object</code> &#124; <code>void</code>
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+off](postit.md#PostIt+off) for further information (signature, etc.).  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.emit"></a>
### Manager.emit(id) ⇒ <code>object</code> &#124; <code>void</code>
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+emit](postit.md#PostIt+emit) for further information (signature, etc.).  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.openWindow"></a>
### Manager.openWindow()
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [helpers.md#helpers.openWindow](helpers.md#helpers.openWindow) for further information (signature, etc.).  
