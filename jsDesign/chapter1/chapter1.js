
function initHightLight(){
    document.querySelectorAll("code").forEach(function(element) {
        var className = element.getAttribute('class');
        if(className && className.indexOf('html')>=0){
            element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
    });
    hljs.initHighlightingOnLoad();
}

function changeStyle() {
    document.getElementById('codeStyle').href = '../../js/lib/rainbow.css';
}

initHightLight();

var obj1 = {
    a: 2,
    b: 3
}

function cloneOne(obj){
    var tempObj = function(){};
    tempObj.prototype = obj;
    return new tempObj();
}

function cloneTwo(obj){
    return Object.create(obj);
}

//综合方法
Object.create = Object.create || function( obj ){
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function testClone(){
    var a = cloneOne(obj1);
    console.log(a);
    var b = cloneTwo(obj1);
    console.log(b);
    console.log(b.a);
    obj1.c = 1;
    console.log(a.c+','+b.c);
    obj1.a = 10;
    console.log(a.a+','+b.a);
}
testClone();
