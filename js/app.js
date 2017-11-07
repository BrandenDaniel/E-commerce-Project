
var notification = $(".checkout-notification");
var itemCounter1 = 1;
var itemCounter2 = 1;
var itemCounter3 = 1;

var price1 = parseInt($(".price-1").text(), 10);
var price2 = parseInt($(".price-2").text(), 10);
var price3 = parseInt($(".price-3").text(), 10);

var totalPrice = price1 + price2 + price3;


$(".cart").click(function() {
  notification.show().delay(3000).fadeOut();
  $(".cart-item").css('display', 'inline-block');
});

$(".total-cost").append(totalPrice);

$(".add-1").click(function () {
  itemCounter1++;
  $(".box-1").attr('value', itemCounter1);
  if (itemCounter1 === 0) {
    $(".item-1").remove();
  }
});

$(".add-2").click(function () {
  itemCounter2++;
  $(".box-2").attr('value', itemCounter2);
  if (itemCounter2 === 0) {
    $(".item-2").remove();
  }
});

$(".add-3").click(function () {
  itemCounter3++;
  $(".box-3").attr('value', itemCounter3);
  if (itemCounter3 === 0) {
    $(".item-3").remove();
  }
});

$(".reduce-1").click(function () {
  itemCounter1--;
  $(".box-1").attr('value', itemCounter1);
  if (itemCounter1 <= 0) {
    $(".item-1").remove();
  }
});

$(".reduce-2").click(function () {
  itemCounter2--;
  $(".box-2").attr('value', itemCounter2);
  if (itemCounter2 <= 0) {
    $(".item-2").remove();
  }
});

$(".reduce-3").click(function () {
  itemCounter3--;
  $(".box-3").attr('value', itemCounter3);
  if (itemCounter3 <= 0) {
    $(".item-3").remove();
  }
});

$(".rm-1").click(function () {
  $(".item-1").remove();
});

$(".rm-2").click(function () {
  $(".item-2").remove();
});

$(".rm-3").click(function () {
  $(".item-3").remove();
});

// $(".cart").click(function() {
//   $(".nbp").css('display', 'block');
// });
