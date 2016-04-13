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

// callback
ajax({
	url: "",
	method: "POST",
	data: data
}, function (err, resp) {
	if (err) return console.error(err)
 	console.log(resp.body)
})

// request payload
ajax({
	url: "",
	method: "POST",
	data: data,
	format: "json"
}).then(function (resp) {
	console.log(resp.body)
}, function (err) {
	console.log(err)
})

// request timeout
ajax({
	url: "",
	method: "POST",
	data: data,
	timeout: 3000
}).then(function (resp) {
	console.log(resp.body)
}, function (err) {
	console.log(err)
})

// return body
ajax({
	url: "",
	method: "POST",
	data: data,
	body: true
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
ajax.get("", data, function (err, resp){})
ajax.post("", data).then(function (resp) {}, function (err) {})