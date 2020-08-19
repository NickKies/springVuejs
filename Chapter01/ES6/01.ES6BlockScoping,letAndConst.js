function workout() {
    //let gym = '가짐';

    const gymStatuses = { '가짐': '엶', '나짐': '엶', '다짐': '닫음'};
    for ( let gym in gymStatuses ) {
        console.log(`${gym}은 ${gymStatuses[gym]}`);
    }

    {
        const gym = '나짐';
        console.log(`${gym}에서 운동`);
        // throw TypeError 발생
        //gym = '다짐';
    }

    console.log(`${gym}에서 운동`);

    {
        function gym() {
            console.log('분리');
        }
        gym();
    }

    if ( gymStatuses[gym] == '엶' ) {
        let exercises = ['스쾃', '벤프', '데드맆'];
        console.log(exercises)
    }
    // 여기서는 exercises에 접근할 수 없다.
    // console.log(exercises)

    try {
        let gym = '다짐';
        console.log(`${gym}에서 운동`);
        throw new Error('문 닫았다?');
    } catch (err) {
        console.log(err);
        let gym = '라짐';
        console.log(`${gym}에서 운동`);
    }
}
workout();