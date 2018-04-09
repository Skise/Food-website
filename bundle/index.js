var good = document.querySelectorAll('.fa-thumbs-up');
console.log(good[0].parentNode.childNodes[1]);

good[0].onclick = function (e) {
    var node = event.target;
    // console.log(good.style);
    // var color = good.getAttrbute('color');
    var num = node.parentNode.childNodes[1].innerHTML;
    console.log(num);
    if (!node.classList.contains('choosed')) {
        node.classList.add('choosed');
        node.parentNode.childNodes[1].innerHTML = parseInt(num) + 1;
    } else {
        node.classList.remove('choosed');
        node.parentNode.childNodes[1].innerHTML = parseInt(num) - 1;
    }
}