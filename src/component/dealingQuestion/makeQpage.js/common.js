import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';

import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';


let reseivedData= ReadingCsv().then((res)=>reseivedData=res)
// 비동기를 잘 이해하고 있는 것이 매우 중요하구나....

function CommonObject(){ //type마다 공통적으로 있는 부분
    // 요 함수에서 질문 데이터를 받아야 함.
    const questionpackge=reseivedData[0]
    
    const question ='d'
    return (
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>{question}</h4>
            </div>
        </div>
    )
}

export default CommonObject;