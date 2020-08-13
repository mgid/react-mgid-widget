# react-mgid-widget
Embed your MGID widget inside a react app 

[![npm version](https://badge.fury.io/js/react-mgid-widget.svg)](https://badge.fury.io/js/react-mgid-widget)

## Installation & Usage

```sh
npm install react-mgid-widget --save
```
### Include the Component

```js
import React from 'react'
import { MgidWidget } from 'react-mgid-widget'

class Component extends React.Component {

  render() {
    return <MgidWidget id='M207275ScriptRootC353317' src='https://jsc.mgid.com/b/a/barada.com.353317.js'/>
  }
}
```
## Props
Name                   | Type 
-----------------------|----------:
**id**            |string
**src**           |string
