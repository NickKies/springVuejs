// 스코프와 클로저 자바스크립트 예제
function bookHotel(city) {
    var availableHotel = '엄슴';
    for ( var i = 0; i < hotels.length; i++ ) {
        var hotel = hotels[i];
        if ( hotel.city === city && hotel.hasRoom ) {
            availableHotel = hotel.name;
            break;
        }
    }
    // 여기서 i와 hotel은 여전히 접근 가능하다.
    console.log('확인된 레코드: ' + (i + 1));
    console.log('마지막에 확인된 호텔: ' + hotel.name);
    {
        function placeOrder() {
            var totalAmount = 200;
            console.log('어디를 예약할래? => ' + availableHotel);
        }
    }
    placeOrder();
    // 접근 불가
    //console.log(totalAmount);
    return availableHotel;
}

var hotels = [{ name: '신라호텔', hasRoom: false, city: '서울'},
            { name: '제주호텔', hasRoom: true, city: '서울'}];
console.log(bookHotel('서울'));
// 접근 불가
// console.log(availableHotel);