## node-text-width
A simple node library for find the width of text in Node JS, We are using canvas for analyze the width so it's lightweight and more quick than other librabries.

## How to use

```
const getWidth = require('node-text-width');

let width = getWidth("text", { font: "Arial", fontSize: 15});

```
### Options

| option | type | description|
|--|--|--|
| font | string | font name|
| fontSize | number | font size|
