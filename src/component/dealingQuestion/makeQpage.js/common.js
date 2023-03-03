import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';

import {QuestionNum} from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/makeQpage.js/nextQuestion.js'
import { useEffect, useState } from 'react';

function CommonObject(){ //type마다 공통적으로 있는 부분
    const [data, setData]= useState(null);
    
    useEffect(()=>{
        async function getData(){
            const res= await ReadingCsv()
            const data= await res[QuestionNum()].slice(1)
            setData(data);
        }
        getData() // getData를 실행함.
    },[]);

    if (!data){
        return (
            <div>
                <div className="question">
                    <h4>{data}: somthing is wrong</h4>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>{data}</h4>
            </div>
        </div>
    )
}

export default CommonObject;