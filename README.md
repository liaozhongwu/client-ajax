# client-ajax
---
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/client-ajax.svg?style=flat
[npm-url]: https://npmjs.org/package/client-ajax

## Install

```
npm i client-ajax --save
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
 	success: function (resp) {
 		console.log(resp.body)
 	},
 	error: function (err) {
 		console.error(err)
 	},
 	complete: function () {}
})

// callback
ajax({
	url: "",
	method: "POST",
	data: data
}, function (err, resp) {
	if (err) return console.error(err)
 	console.log(resp.body)
})

// Promise
ajax({
	url: "",
	method: "POST",
	data: data
}).then(function (resp) {
	console.log(resp.body)
}, function (err) {
	console.error(err)
})

// url template
ajax({url: "/:id", id: 1}) // /1
ajax({url: "/{id}", id: 1}) // /1

// querystring
ajax({url: "", data: data}) // ?a=a&b[b]=b&c[]=c

// set default options
ajax.setDefault({dataType: "json"}) // set default data to request payload
ajax.setDefault({body: true}) // return body instead of response

// set error interceptor
ajax.setErrorInterceptor(function (err) {
	console.error(err)
})

// simple
ajax.get("", data, function (err, resp){})
ajax.post("", data).then(function (resp) {}, function (err) {})
```

## API
### options
| key | description | type | optional values | default value |
|-----|------|-----|-------|-------|
| url | url | string | | "" |
| method | method | string | "GET","POST","PUT","HEAD","DELETE","PATCH" | "GET" |
| async | is async  | boolean | true,false | true |
| data | data | object | | {} |
| format | data format | string | "form","json","formdata" | "form" |
| body | is body returned | boolean | true, false | false |
| type | response type | string | "","arraybuffer","blob","document","json","text" | "" |
| headers | headers | object | | {} |
| before | before send | function | | noop |
| success | succeed | function |  | noop |
| error | made mistakes | function |  | noop |
| complete | completed | function |  | noop |

## License

client-ajax is released under the MIT license.
