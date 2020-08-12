/*// new를 활용한 Object 생성자 호출
var user = new Object();
user.name = '윤성';
user.interests = [ '코딩', '수영'];
user.greeting = function () {
    console.log('안녕? 나는 ' + this.name + '이야.');
};
user.greeting();



// 객체의 리터럴을 활용한 user 생성
var user = {
    name: '종명',
    interests: ['여행', '독서'],
    greeting: function () {
        console.log('안녕? 나는 ' + this.name + '이야.');
    }
}
user.greeting();



// 생성자 함수 생성
function User(name, interests) {
    this.name = name;
    this.interests = interests;
    this.greeting = function () {
        console.log('안녕? 나는 ' + this.name + '이야.');
    }
}
// user 객체를 생성하는데 new를 활용해 생성자 함수 호출
var user = new User('이준',['먹기', '테레비보기']);
user.greeting();



// 위에서 생성한 User 생성자 함수의 프로토타입과 Object.create() 메소드 활용
var user = Object.create(User.prototype, {
    name: { value: '이진' },
    interest: { value: ['자기', '운동'] }
});
//user.greeting();



// 프로토타입 객체에 greeting 함수 추가
User.prototype.greeting = function() {
    console.log('안녕? 나는 ' + this.name + '이야.' );
}
user.greeting();



// 객체를 반환하는 생성 함수 사용
function createUser(name, interests) {
    var user = {};
    user.name = name;
    user.interests = interests;
    user.greeting = function () {
        console.log('안녕? 나는 ' + this.name + '이야.');
    };
    return user;
}
// 매개변수를 이용해 생성함수 호출
var user = createUser('윤성', ['독서', '자전거타기']);
user.greeting();*/



/*// User 클래스 생성
class User {
    // User 생성자 함수와 상응
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    // User.prototype.greeting과 같다
    greeting() {
        console.log('안녕? 나는 ' + this.name + '이야.')
    }
}
let user = new User('종명', ['시 읽기', '시 쓰기']);
user.greeting();*/



// 클래스 표현식 활용
let User = class {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('안녕? 나는 ' + this.name + '이야.')
    }
}