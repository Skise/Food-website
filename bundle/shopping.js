var shopcar = [];

$('button').click(function (e) {
    var node = e.target;
    var number = node.dataset.num;
    console.log(number);
    shopcar.push(number);
    $(node).attr('disabled', true);
    $(node).addClass('used');
});

$('#shoppingCar').click(function () {
    console.log(shopcar);
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            car: shopcar,
        },
        success: function () {
            location.href = "./car.html"
        }
    })
})
