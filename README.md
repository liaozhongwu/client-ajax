# client-ajax
---
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/client-ajax.svg?style=flat
[npm-url]: https://npmjs.org/package/client-ajax

## Install

```
npm i client-ajax --save
```

```
<script type="text/javascript" src="/ajax.js"></script>
```

## Usage

```js
var ajax = require('client-ajax') 
// var ajax = require('client-ajax').setDefault()

var data = {a: "a", b: {b: "b"}, c: ["c"]}

// $.ajax
ajax({
	url: "",
	method: "POST",
 	data: data,
 	before: function () {},
 	success: function (body) {
 		console.log(body)
 	},
 	error: function (err) {
 		console.error(err)
 	},
 	complete: function () {}
})

// Promise
ajax({
	url: "",
	method: "POST",
	data: data
}).then(function (body) {
	console.log(body)
}, function (err) {
	console.error(err)
})

// callback
ajax({
	url: "",
	method: "POST",
	data: data
}, function (err, body) {
	if (err) return console.error(err)
 	console.log(body)
})

// request payload
ajax({
	url: "",
	method: "POST",
	data: data,
	format: "json"
}).then(function (body) {
	console.log(body)
}, function (err) {
	console.log(err)
})

// request timeout
ajax({
	url: "",
	method: "POST",
	data: data,
	timeout: 3000
}).then(function (body) {
	console.log(body)
}, function (err) {
	console.log(err)
})

// return response
ajax({
	url: "",
	method: "POST",
	data: data,
	origin: true
}).then(function (resp) {
	console.log(resp)
}, function (err) {
	console.log(err)
})

// return html
ajax({
	url: "",
	type: "text"
}).then(function (body) {
	console.log(body)
}, function (err) {
	console.log(err)
})

// url template
ajax({url: "/:id", id: 1}) // /1
ajax({url: "/{id}", id: 1}) // /1

// querystring
ajax({url: "", data: data}) // ?a=a&b[b]=b&c[]=c

// set default options
ajax.setDefault({
	format: "json", // set default format
	body: true, // set default body returned
	timeout: 3000 // set default timeout
})

// set error interceptor
ajax.setErrorInterceptor(function (err) {
	console.error(err)
})

// simple
ajax.get("", data, function (err, body){})
ajax.post("", data).then(function (body) {}, function (err) {})
```

## API
### options
| key | description | type | optional values | default value |
|-----|------|-----|-------|-------|
| url | request url | string | | "" |
| method | request method | string | "GET","POST","PUT","HEAD","DELETE","PATCH" | "GET" |
| async | is async  | boolean | true,false | true |
| data | request data | object | | {} |
| format | data format | string | "form","json","formdata" | "form" |
| timeout | request timeout | number | | |
| origin | return response | boolean | true, false | false |
| type | response type | string | "","arraybuffer","blob","document","json","text" | "json" |
| headers | request headers | object | | {} |
| before | before send | function | | noop |
| success | request succeed | function |  | noop |
| error | make mistakes | function |  | noop |
| complete | request complete | function |  | noop |

## Notice

The package should be used in broswer.

You can use it with broswerify or webpack, or simply copy source code with script tag to your project

If you can't make sure that Promise is supported in broswer, please use callback instead of Promise

## License

client-ajax is released under the MIT license.

## Change Log
0.1.1 - initial

0.1.4 - add options.timeout

0.1.5 - default return body, replace options.body with options.origin
