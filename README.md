# react-mgid-widget
Embed your MGID widget inside a react app 

[![npm version](https://badge.fury.io/js/react-mgid-widget.svg)](https://badge.fury.io/js/react-mgid-widget)

## Installation & Usage

```sh
npm install react-mgid-widget --save
```

### Requirements
- React 18.0.0 or higher
- React 19.0.0 is fully supported

### Include the Component

#### Functional Component (Recommended)
```js
import React from 'react'
import { MgidWidget } from 'react-mgid-widget'

const MyComponent = () => {
  return <MgidWidget id='983763' src='https://jsc.mgid.com/site/284163.js'/>
}
```

#### Class Component
```js
import React from 'react'
import { MgidWidget } from 'react-mgid-widget'

class Component extends React.Component {
  render() {
    return <MgidWidget id='983763' src='https://jsc.mgid.com/site/284163.js'/>
  }
}
```
## Props
Name                   | Type 
-----------------------|----------:
**id**            |string
**src**           |string
