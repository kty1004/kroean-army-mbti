import Typea from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typea.js';
import Typec from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typec.js';
import Typeb from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typeb.js';

import CommonObject from '../component/dealingQuestion/makeQpage.js/common';


function QuestionPage({CsvData}){
    console.log(CsvData[0]);
    if (CsvData[0]==='a') {
        // typeA
        return (
            <div>
                <CommonObject/>
                <Typea/>
            </div>
        )
    } else if(CsvData[0]==='b') {
        // typeB
        return(
            <div>
                <CommonObject/>
                <Typeb/>
            </div>
        )
    } else if (CsvData[0]==='c') {
        return (
            <div>
                <CommonObject/>
                <Typec/>
            </div>
            
        )
    } else {
        return (
            <div>
                <h1>{`${CsvData[0]}: questionType is wrong.`}</h1>
                <p>{`${typeof(CsvData[0])}: questionType's data type`}</p>
            </div>
        )
    }
    
}

export default QuestionPage;