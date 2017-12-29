var url = 'https://www.bitstamp.net/api/v2/ticker/xrpusd/';

$( document ).ready(function() {
  //addToDiv("#main", "Hello World");

$.ajaxSetup({
  crossOrigin: true
});

$.getJSON(url, null, function(data) {
  console.log(data);
});

});

function addToDiv(divName, content) {
	$(divName).html(content);
}


