var cart = 0;
var notification = $(".checkout-notification");

$(".cart").click(function() {
  cart++;
  $(".cart-item").empty();
  $(".cart-item").append(cart);
});

$(".cart").click(function() {
  notification.show().delay(3000).fadeOut();
});
