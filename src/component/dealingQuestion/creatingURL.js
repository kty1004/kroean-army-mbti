import * as csvdata from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';
import Typea from '../questionType/typea';
import Typeb from '../../routes/typeb';
import Typec from '../../routes/typec';

async function CreatingUrl() {
    const allData = await csvdata.ReadingCsv() //promise데이터를 받기 위해 좀 기다리라는 뜻의 await을 사용함.
    
    allData.forEach(element => {
        if (element[0]==='a'){ //질문이 a타입일 때
            Typea(element[1]);
            console.log(element[1])
            
        }
    });
}


export default CreatingUrl;

// QuestionTypes에다가 질문을 넣으면 그걸 Typea함수가 질문 칸에 넣고, JSX를 return
// 이후 Typea가 return한 것을 받아서 if문을 나감.
// if문 밖에서 고유 url을 만들고, app.js로 전송
//app.js에서는 일일히 jsx문법을 사용하는게 아니라 js import해서 써보자.