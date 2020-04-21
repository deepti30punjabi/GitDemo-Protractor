var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
/*for(let i=0;i<5;i++)
{
    setTimeout(() => {
        console.log(i);
    }, 100*i);
}*/ 
