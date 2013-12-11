$(document).ready(function() {
  $('.list-group-item > .dropdown').hide()

  $('.list-group-item > .dropdown').on('hidden.bs.dropdown', function () {
    $(this).hide()
  })

  $('li.list-group-item a, .list-group-item > .dropdown').on('mouseenter', function(event) {
    if ( !$(this).is($('.dropdown.open')) ) {
      $(this).parent().children('a').css('background-color', '#eee')
    }
    $(this).parent().children('.dropdown').show()
  })

  $('li.list-group-item a, .list-group-item > .dropdown').on('mouseleave', function() {
    $(this).parent().children('a').removeAttr('style')
    if ( $(this).parent().children('.dropdown').hasClass('open') ) {
      $(this).parent().children('.dropdown').not('.open').hide()
      return
    }
    $(this).parent().children('.dropdown').hide()
  })
})
