var obj = {};
obj['100'] = '백';
// 숫자 100은 백으로 변환된다.
console.log(obj[100]);
// foo와 bar 모두 문자열 '[object Object]'로 변환
var foo = { prop: 'f'}, bar = { prop: 'b'};
obj[foo] = 'Foo'
console.log(obj[bar])



// Object.defineProperty 또는 Object.defineProperties를 사용해 객체의 프로퍼티를 수정할 수 있다.
function User(name, department) {
    var _department = department;
    var _name = name;
    Object.defineProperty(this, 'name', {
        value: _name,
        writable: true,
        enumerable: true,
        configurable: false
    });
    Object.defineProperty(this, 'department', {
        get: function () {
            console.log('Retriving department');
            return _department;
        },
        set: function (newValue) {
            console.log('Updating department value to "' + newValue + '"');
            _department = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(this, 'greeting', {
        value: function () {
            console.log('안녕? 나는 ' + _name + '이야.');
        },
        enumerable: false,
        configurable: false
    });
}
var user = new User('이진', '아기');
console.log(user.department);
user.department = '딸랑구';
user.greeting();
/*Object.defineProperty(user, 'name', {
    enumerable: false
});*/
delete user.name;
delete user.department;
for ( var prop in user ) {
    console.log(prop);
}
