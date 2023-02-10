import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';
import CommonObject from './makeQpage.js/common';
import QuestionPage from '../../routes/questionPage';

let reseivedData= ReadingCsv().then((res)=>reseivedData=res)
// 비동기를 잘 이해하고 있는 것이 매우 중요하구나....

function SendingCsv(data) {
    data.forEach(element => {
        return(
            QuestionPage(element[0]),
            CommonObject(element[1])
        )
    });
}// questionPage랑 통신하는 걸 구현해야 함. 한 질문보냈다가 기다렸다 해야 함.


export default SendingCsv;