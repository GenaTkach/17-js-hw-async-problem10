// Problem -> console 10 x 10
for (var i = 0; i < 10; i++) {
    var j = i + 1;
    setTimeout(function () {
        console.log(i - j);
        i++;
    }, 1000);
}