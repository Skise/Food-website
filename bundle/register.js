var username = $('#username').val(),
    cellPhone = $('#cellphone').val(),
    email = $('#email').val(),
    pass = $('#password').val();

$.ajax({
    url: url,
    type: 'POST',
    data: {
        username: username,
        cellPhone: cellPhone,
        email: email,
        password: pass,
    },
    success: function (res) {
        location.href('./login.html');
    },
})
