<a name="Manager"></a>
## Manager
Manager Module.

**Kind**: global variable  
**Access:** public  

* [Manager](#Manager)
  * [.__records](#Manager.__records)
  * [.add(id)](#Manager.add) ⇒ <code>object</code>
  * [.remove(id)](#Manager.remove) ⇒ <code>object</code>
  * [.removeAll()](#Manager.removeAll) ⇒ <code>object</code>
  * [.size()](#Manager.size) ⇒ <code>number</code>
  * [.on()](#Manager.on)
  * [.off()](#Manager.off)
  * [.emit()](#Manager.emit)
  * [.openWindow()](#Manager.openWindow)

<a name="Manager.__records"></a>
### Manager.__records
Exposes the Manager's records.

**Kind**: static property of <code>[Manager](#Manager)</code>  
**Access:** public  
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
Remove all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
<a name="Manager.size"></a>
### Manager.size() ⇒ <code>number</code>
Returns the length of all `PostIt` instances.

**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
<a name="Manager.on"></a>
### Manager.on()
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+on](postit.md#PostIt+on) for further information.  
<a name="Manager.off"></a>
### Manager.off()
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+off](postit.md#PostIt+off) for further information.  
<a name="Manager.emit"></a>
### Manager.emit()
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [postit.md#PostIt+emit](postit.md#PostIt+emit) for further information.  
<a name="Manager.openWindow"></a>
### Manager.openWindow()
**Kind**: static method of <code>[Manager](#Manager)</code>  
**Access:** public  
**See**: [helpers.md#helpers.openWindow](helpers.md#helpers.openWindow) for further information.  
