var shopcar = [];

$('button').click(function (e) {
    var node = e.target;
    var number = node.dataset.num;
    console.log(number);
    shopcar.push(number);
    $(node).attr('disabled', true);
    $(node).addClass('used');
    var name = sessionStorage.getItem('username');
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            username: name,
            number: number,
        },
        success: function () {
            // location.href = "./car.html"
        },
        error: function (res) {
            console.log('error', res);
        },
    });
});

$('#shoppingCar').click(function (e) {
    // var node = e.target;
    // console.log(shopcar);
    location.href = './car.html';
    sessionStorage.setItem('shopNum', shopcar);
})