import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';

let question= ReadingCsv().then((res)=>question=res[1].slice(1).join()) 
//array로 왔는데 이를 비동기 과정에서 분리하는 법을 모르겠어....
// 비동기를 잘 이해하고 있는 것이 매우 중요하구나....


function CommonObject(){ //type마다 공통적으로 있는 부분
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