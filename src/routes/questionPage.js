import {Link} from 'react-router-dom';
import Typea from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typea.js';
import Typec from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typec.js';
import Typeb from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typeb.js';

import CommonObject from '../component/dealingQuestion/makeQpage.js/common';

function QuestionPage(){
    const questionType='a';
    if (questionType==='a') {
        // typeA
        return (
            <div>
                <CommonObject/>
                <Typea/>
            </div>
        )
    } else if(questionType==='b') {
        // typeB
        return(
            <div>
                <CommonObject/>
                <Typeb/>
            </div>
        )
    } else if (questionType==='c') {
        return (
            <div>
                <CommonObject/>
                <Typec/>
            </div>
            
        )
    } else {
        return (
            <div>
                <h1> question type is wrong.</h1>
            </div>
        )
    }
    
}

export default QuestionPage;