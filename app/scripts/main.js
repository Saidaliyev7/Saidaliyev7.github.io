$(document).ready(function () {
  //header city dropdown 
  $('#header .city-dropdown .dropdown-top .name').click(function () {
    $(this).closest('.city-dropdown').find('.dropdown-bottom').slideToggle();
  })
  $('#header .city-dropdown .dropdown-bottom .dropdown-item').click(function () {
    var clickedValue = $(this).text().replace(/\s/g, '');
    $(this).closest('.city-dropdown').find('.dropdown-top').find('.name').text(clickedValue);
    $(this).closest('.dropdown-bottom').slideUp();
  })
  //slider 
  $('#categories .slider-container').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay:true,
  })
  $('#departments .slider-container').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
  })
  //BackToTop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  })
  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 450);
  })
  //popups
  $('.login-popup').click(function () {
    $('.active-registration-overlay').fadeIn();
    $('.registration').fadeIn();
  })
  $('.exit-icon').click(function () {
    $('.active-registration-overlay').fadeOut();
    $('.registration').fadeOut();
    $('.cart-overlay').fadeOut();
    $('.cart').fadeOut();
  })
  $('.bag-popup').click(function () {
    $('.cart-overlay').fadeIn();
    $('.cart').fadeIn();
  })
  $(document).click(function (e) {
    if ($('.active-registration-overlay').is(e.target) || $('.cart-overlay').is(e.target)) {
      $('.registration').fadeOut();
      $('.active-registration-overlay').fadeOut();
      $('.cart-overlay').fadeOut();
      $('.cart').fadeOut();
    }
  })

  //registration accardion
  $('.reg-content-accardion').click(function () {
    if (!$(this).hasClass('active')) {
      $('.reg-content-accardion').removeClass('active');
      $('.accardion-content').removeClass('active');
      $('.accardion-content').eq($(this).index()).addClass('active');
      $(this).addClass('active');
    }
  })
  //product-hover 
  $('#products .product').hover(function () {
    $(this).find('.product-hover-content').fadeToggle();
  })
  $('#product-list .product').hover(function () {
    $(this).find('.product-hover-content').fadeToggle();
  })
  //basket-counter
  $('.count-input .minus').click(function () {
    let SiblingInput = $(this).parent().find('input');
    let SiblingInputValue = parseInt($(this).parent().find('input').val());
    let counter = parseFloat($(this).closest('.basket').find('.price').text())
    let addCounter = parseFloat($(this).parent().siblings('.count').text())
    if (SiblingInputValue > 1) {
      let newValue = SiblingInputValue - 1;
      $(this).parent().find('input').val(newValue);
      $(this).parent().siblings('.count').text((addCounter - counter).toFixed(2));
      $('.result-right .number').text((addCounter - counter).toFixed(2));
    }
  })
  $('.count-input .plus').click(function () {
    let SiblingInput = $(this).parent().find('input');
    let SiblingInputValue = parseInt($(this).parent().find('input').val());
    let newValue = SiblingInputValue + 1;
    let counter = parseFloat($(this).closest('.basket').find('.price').text())
    let addCounter = parseFloat($(this).parent().siblings('.count').text())
    $(this).parent().find('input').val(newValue);
    $(this).parent().siblings('.count').text((counter + addCounter).toFixed(2));
    $('.result-right .number').text((counter + addCounter).toFixed(2))
  })
  //checkbox
  $('.checkbox-element').click(function () {
    $(this).toggleClass('active');
  })
  //product-list-dropdowns
  $('#product-list .filters .title').click(function () {
    $(this).siblings('.content').slideToggle();
  })
  //title-content
  $('.title-content .list-style').click(function(){
    if($(this).hasClass('cubes')){
      $('.title-content .list-style').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.products').find('.products-list').fadeOut()
      $('.products-catalog-cubes').fadeIn();
    }else{
      $('.title-content .list-style').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.products').find('.products-list').fadeOut()
      $('.products-catalog-lines').fadeIn();
    }
    
  })

  //product-image-carousel
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    vertical:true,
    verticalSwiping:true,

  })
  $('.product-slider .item').click(function(){
    let item=$(this)
    let clickedSrc= item.find('img').attr('src');
    let Source=clickedSrc.toString();
    let changingSrc=item.closest('.item-image').find('.product-main-image');
    changingSrc.find('img').attr('src',Source).load(function(){
      this.width;  
  
  });;
  $('.product-slider .item').removeClass('active')
  $(this).addClass('active')
  })
})
