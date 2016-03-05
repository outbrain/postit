<a name="Manager"></a>
## Manager
Manager Module.

**Kind**: global variable  
**Access:** public  

* [Manager](#Manager)
    * [.add(id)](#Manager.add) ⇒ <code>object</code>
    * [.remove(id)](#Manager.remove) ⇒ <code>object</code>
    * [.removeAll()](#Manager.removeAll) ⇒ <code>object</code>
    * [.size()](#Manager.size) ⇒ <code>number</code>
    * [.get(id)](#Manager.get) ⇒ <code>object</code> &#124; <code>void</code>
    * [.getAll()](#Manager.getAll) ⇒ <code>object</code>
    * [.on(id)](#Manager.on) ⇒ <code>object</code>
    * [.off(id)](#Manager.off) ⇒ <code>object</code>
    * [.emit(id)](#Manager.emit) ⇒ <code>object</code>
    * [.openWindow()](#Manager.openWindow)

<a name="Manager.add"></a>
### Manager.add(id) ⇒ <code>object</code>
Creates and manages a new `PostIt` instance.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.remove"></a>
### Manager.remove(id) ⇒ <code>object</code>
Removes an explicit `PostIt` instance.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.removeAll"></a>
### Manager.removeAll() ⇒ <code>object</code>
Removes all `PostIt` instances.

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
### Manager.getAll() ⇒ <code>object</code>
Gets all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  
<a name="Manager.on"></a>
### Manager.on(id) ⇒ <code>object</code>
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+on](postit.md#PostIt+on) for further information (signature, etc.).  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.off"></a>
### Manager.off(id) ⇒ <code>object</code>
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+off](postit.md#PostIt+off) for further information (signature, etc.).  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Manager.emit"></a>
### Manager.emit(id) ⇒ <code>object</code>
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
