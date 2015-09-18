$(function() {

  var hoodList = [];
  var hoodContent = '';

  var printHoods = function(hoods) {
    $('.hood-holder').append($('<section>')
                      .addClass('hood')
                      .addClass(hoods[0].name)
                        .append($('img')
                        .attr('src', hoods[0].imgUrl)
                        .attr('alt', 'picture of ' + hoods[0].name)
                        .addClass('thumbnail')));
    $('.thumbnail').after($('<a>')
                      .attr('href',hoods[0].name)
                      .append($('<h3>')
                        .text(hoods[0].name.toUpperCase())));
    $('.' + hoods[0].name).append($('<p>').text(hoods[0].content));
  }

  function Neighborhood(name, imgUrl, content) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.content = content;
  }

  //Contact Form Submit Behavior
  $('#submit-form').on('click', function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var city = $('#city').val()
    $('#name').val('');
    $('#email').val('');
    $('#city').val('');
    //dummy message generation instead of sumbit to server or database
    var message = 'Hello ' + name + ' from ' + city + '! ' + 'Thanks for giving us your email address: ' + email + '. We promise to only use it for spam!'
    alert(message);
  });

  hoodContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua'
  hoodNames = ['Ballard', 'Greenlake', 'Fremont', 'Wallingford', 'Queen Anne', 'Magnolia']

  for(var i = 0; i < hoodNames.length; i++) {
    hoodList.push(new Neighborhood(hoodNames[i], 'assets/Images/' + hoodNames[i] + '.jpg', hoodContent));
  }
  printHoods(hoodList);
});
