import {SendingUserValueToSavingValue} from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questionType/typea.js';

function SavingUserValue(){
    const value= SendingUserValueToSavingValue();
    const userValueSorage=[] // array 순서가 문제의 순서임.
    userValueSorage.push(value);
    console.log(value)
    return(
        userValueSorage
    )
}

export default SavingUserValue;
