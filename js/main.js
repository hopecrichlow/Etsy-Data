(function () {

 var firstItem = etsy.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  _.each(etsy.results, function (item) {
    var itemHTML = templateFunction(item);
    $('.graphics').append(itemHTML);

  });


}());