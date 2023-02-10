import {Link} from 'react-router-dom';
import Typea from '../component/questionType/typea';
import Typec from '../component/questionType/typec';
import Typeb from '../component/questionType/typeb';

import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';

function CommonObject(){ //type마다 공통적으로 있는 부분
    // 요 함수에서 질문 데이터를 받아야 함.
    return (
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>hello</h4>
            </div>
        </div>
    )
}

function QuestionPage(){
    const testingNum=2;
    if (testingNum===1) {
        // typeA
        return (
        <div>
            <CommonObject/>
            <Typea/>

        </div>)
    } else if(testingNum===2) {
        // typeB
        return(
            <div>
                <CommonObject/>
                <Typeb/>
        </div>
        )
    } else if (testingNum===3) {
        return (
            <div>
                <CommonObject/>
                <Typec/>
            </div>
            
        )
    } else {
        return (
            <div>
                <h1> Something is wrong.</h1>
            </div>
        )
    }
    
}

export default QuestionPage;