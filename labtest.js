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
//////////   1   
console.log("task1");
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
////////    2
console.log("task2");
var arr2 = [1, 2, 3, "ahmed"];
console.log(arr2);
////////    3
console.log("task3");
var varboolornum;
varboolornum = 10;
console.log(varboolornum);
varboolornum = true;
console.log(varboolornum);
///////    4
console.log("task4");
function fun1(id, age, name) {
    if (age === void 0) { age = 18; }
    console.log("".concat(id, " -- ").concat(age, " -- ").concat(name, " "));
}
fun1(1);
fun1(2, 19);
fun1(3, 29, "ayman");
//////   5
console.log("task5");
var User = /** @class */ (function () {
    function User(id, name, username, email, Post) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.Post = Post;
        this.localusername = username;
    }
    User.prototype.get_username = function () {
        return this.localusername;
    };
    User.prototype.set_username = function (v) {
        this.localusername = v;
    };
    return User;
}());
var user1 = new User(5, "ayman", "jjjj", "dfddxf@lmkmn");
console.log("user ".concat(user1.name, " = ").concat(user1.email, " "));
////////        6
console.log("task6");
var VIPUser = /** @class */ (function (_super) {
    __extends(VIPUser, _super);
    function VIPUser(id, name, username, email, Post) {
        var _this = _super.call(this, id, name, username, email, Post) || this;
        _this.id = id;
        _this.name = name;
        _this.username = username;
        _this.email = email;
        _this.Post = Post;
        return _this;
    }
    VIPUser.prototype.show = function () {
        console.log(this.Post);
    };
    return VIPUser;
}(User));
var xs = new VIPUser(1, "ahmed", "awdwa", "dawadwdd@dwadwa", { "title": "mytitle", "body": "clean body" });
xs.show();
