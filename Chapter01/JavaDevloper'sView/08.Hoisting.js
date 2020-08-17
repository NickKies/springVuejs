// 함수 선언을 최상위로 위치시킨다.
function travel() {
    console.log('여행중');
}

// 변수 선언은 함수 선언 아래에 위치시킨다.
var travel;
travel = '무계획';

console.log(travel);
//travel();


/*
function workout() {
    goToGym();
    var goToGym = function () {
        console.log('가짐에서 운동');
    }
    return;
    function goToGym() {
        console.log('나짐에서 운동');
    }
}

workout();*/

function workout() {
    function goToGym() {
        console.log('나짐에서 운동');
    }
    var goToGym;
    goToGym();
    goToGym = function () {
        console.log('가짐에서 운동');
    }
    return;
}
workout();