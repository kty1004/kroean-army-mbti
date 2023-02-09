import * as csvdata from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/readingcsv.js';

async function Qurl() {
    const allData = await csvdata.ReadingCsv() //promise데이터를 받기 위해 좀 기다리라는 뜻의 await을 사용함.
    allData.forEach(element => {
        if (element[0]==='a'){ //질문이 a타입일 때
            // typea의 양식을 가져와야 하거나 보내야 함.

            // 각 질문마다 파일을 생성하지 말고, 유저의 입력을 받았으면, 안의 내용을 교체하는 것으로 하자.
            // 그럼 url은 같아도 안에 있는 내용물은 다름.
            // 고유 url을 생성해야 함.
        }
    });
}


export default Qurl;