var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 1;
var b = "Hello World"; //it also takes up the type automatically
var c = false; //type set to boolean
//functions with variable declarations w. return type (normal)
function abc(num, name) {
    console.log(num + " : " + name);
    return "hello world";
}
//same with arrow function
var abcd = function (num, name) {
    console.log(num + " : " + name);
    return 10;
};
//object creation with type
var obj1 = {
    name: "rupak",
    age: 20
};
//now we replace
var obj2 = {
    name: "rupak",
    age: 20,
    sem: 4
}; //result is same
//unions
var univar = null; // | means this d_type or that
var univar2; //this means if we put object then we need to follow interface
var alieg1 = "rupak123";
//other types any,unknown,never
var dontuseit = 123;
var dontuseit2 = "abc";
dontuseit = dontuseit2;
// let strdemo:string = dontuseit2 (this will throw error, unknown type variable can't be initialized on other types)
var strdemo = dontuseit2; // this works;; example of type assertion(like typecasting)
var func2 = function () {
    console.log("ok");
};
//void type should be used as a return type if there is nothing to return
//## DOM Manipulations ***must use type assertion
var someElement = document.querySelector('.foo');
//this should be done to aceess dom element is ts (donot convert it to any!!)
//all elements are there, just convert and use it
console.log(someElement.value);
var someElement2 = document.addEventListener('event', function (event) {
    var target = event.target; //target also donot work itself
    console.log(target.value);
});
// if we implement interface inside class, we must use the function inside
//use access specifier inside the class i.e on the elements, not directly on the class
var extendIt = /** @class */ (function () {
    function extendIt() {
    }
    extendIt.prototype.printf = function () {
        console.log("hello world");
    };
    return extendIt;
}());
var getname = /** @class */ (function (_super) {
    __extends(getname, _super);
    function getname(fstname, lstname) {
        var _this = _super.call(this) || this;
        _this.display = function () {
            return (_this.firstname + " " + _this.lastname);
        };
        _this.firstname = fstname;
        _this.lastname = lstname;
        _this.address = "mgm"; //readonly access specifier can only be initialized here and is then immutable
        return _this;
    }
    getname.prototype.func1 = function () {
        return "abc";
    };
    return getname;
}(extendIt));
var prntname = new getname("Rupak", "Biswas");
console.log(prntname.printf);
//generics (like template in cpp)
//putting this changes the type as given during call
//multiple of these generics can be given
var genEg1 = function (eg) {
    console.log(eg);
};
genEg1(123);
genEg1("Rupak"); //manual declaration
//doing extends make a default type (actually this is not needed; do normal declaration)
var genEg2 = function (eg) {
    console.log(eg);
};
genEg2(1234);
//Enums (not that useful; just use objects)
var Status;
(function (Status) {
    Status[Status["a"] = 0] = "a";
    Status[Status["b"] = 1] = "b";
    Status["c"] = "rupak";
})(Status || (Status = {}));
console.log(Status.a); // a = 0, b = 1, c = rupak
var enumeg = Status.a; //can be used as a datatype also
