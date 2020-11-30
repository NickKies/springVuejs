class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting () {
        console.log('저는' + this.name + '.');
    }
    get interestsCount () {
        return this.interests ? this.interests.length : 0;
    }
}

class TeamMember extends User {
    constructor(name, interests) {
        super(name, interests);
        this._tasks = [];
        this._welcomeText = '우리팀에 어서왕!';
    }
    greeting () {
        console.log('저는 ' + this.name + '. ' + this._welcomeText);
    }
    work () {
        console.log('저는' + this._tasks.length + ' 개의 일을 하고 있어요.')
    }
    set tasks (tasks) {
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTasksCapacity()) {
            acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
            console.log('삐빅 두 개까지만 가능합니다.');
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }
    static maxTasksCapacity () {
        return 2;
    }
}

let member = new TeamMember('윤성', ['여행']);
member.greeting();   // 저는 윤성. 우리팀에 어서왕!
member.tasks = ['티캣3개 사기', '호텔 예약', '렌트카 빌리기'];
// 삐빅 두 개까지만 가능합니다.
member.work();       // 저는 2개의 일을 하고있어요
console.log(member.interestsCount); // 1
member.interestsCount = 2;          // This won’t save the change
console.log(member.interestsCount); // 1


User.prototype.eat = function () {
    console.log('점심을 뭘먹을까유?');
};
member.eat();  // 점심을 뭘먹을까유?


User.sleep = function () {
    console.log('자라');
};
member.sleep();  // Uncaught TypeError: member.sleep is not a function
User.sleep();    // 자라

console.log(User.prototype.hasOwnProperty('머겅'));  // true
console.log(User.hasOwnProperty('머겅'));            // true