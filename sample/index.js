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
ajax({url: "/:id", id: 1) // /1
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