var Beverage = function(){};

Beverage.prototype.boilWater = function(){
    console.blue('把水烧开');
}

Beverage.prototype.addBe = function(){
    throw new Error('子类必须重写addBe方法');
}

Beverage.prototype.addInGlass = function(){
    console.blue('倒入杯中');
}

Beverage.prototype.addAddation = function(){
    throw new Error('子类必须重写addAddation方法');
}

Beverage.prototype.needAddation = function () {
    return true;
}

Beverage.prototype.init = function(){
    this.boilWater();
    this.addBe();
    this.addInGlass();
    if(this.needAddation()){
        this.addAddation();
    }
}

var Tea2 = function(){};

Tea2.prototype = new Beverage();

Tea2.prototype.addBe = function(){
    console.red('加入茶');
}
Tea2.prototype.addAddation = function(){
    console.red('加糖');
}
Tea2.prototype.addInGlass = function(){
    console.red('倒入茶杯');
}

var tea2 = new Tea2();
// tea2.init();

var Coffee2 = function(){};

Coffee2.prototype = new Beverage();

Coffee2.prototype.addBe = function(){
    console.red('加入咖啡');
}

Coffee2.prototype.addAddation = function () {
    console.red('加柠檬');
}

Coffee2.prototype.needAddation = function () {
    return confirm('需要调料吗');
}

var coffee2 = new Coffee2();
// coffee2.init();

// Beverage.prototype.boilWater = function () {
//     console.log('把水凉凉');
// }
// coffee2.init();

var BeverageNew = function (params) {
    var boilWater = function(){
        console.log('把水烧开');
    }
    var addBe = params.addBe || function(){
        throw new Error('必须重写addBe');
    }
    var addInGlass = params.addInGlass || function(){
        throw new Error('必须重写addInGlass');
    }
    var addAddation = params.addAddation || function(){
        throw new Error('必须重写addAddation');
    }
    var needAddation = params.needAddation==undefined || params.needAddation;
    var F = function(){};
    F.prototype.init = function(){
        boilWater();
        addBe();
        addInGlass();
        if(needAddation()){
            addAddation();
        }
    }
    return F;
}

var TeaNew = BeverageNew({
    addBe: function () {
        console.blue('加个茶');
    },
    addInGlass: function () {
        console.blue('倒杯里');
    },
    addAddation: function () {
        console.red('加糖')
    },
    needAddation: function () {
        return confirm('加糖吗？');
    }
});
new TeaNew().init();