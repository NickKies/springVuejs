function User (name, interests) {
    this.name = name;
    this.interests = interests;
}
User.prototype.greeting = function () {
    console.log('Hi I\'m ' + this.name + ',');
}

console.log(User.constructor === Function);
console.log(User.prototype.constructor === User);
var user = new User();
console.log(user.__proto__ === User.prototype);

function TeamMember (name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function () {
    console.log('저는 ' + this.name + '입니다. 팀에 오신것을 환영해요');
};
TeamMember.prototype.work = function () {
    console.log('저는 ' + this.tasks.length + '개의 일을 하고있습니다.');
};
var member = new TeamMember('종명', ['여행'], ['표 구매', '호텔 예약']);

member.greeting();
member.work();

console.log(member instanceof TeamMember);
console.log(member instanceof User);
console.log(member instanceof Object);

User.prototype.eat = function () {
    console.log('점심으로 뭘 먹을래?');
};
member.eat();

// 최상위 객체에 메소드 추가
Object.prototype.move = function () {
    console.log('모든 객체는 지금부터 움직일 수 있읍니다아');
};
member.move();
var alien = {};
alien.move();
User.move();