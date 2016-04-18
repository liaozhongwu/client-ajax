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