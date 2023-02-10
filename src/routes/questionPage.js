import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/mousehovering/mainhovering.js';
import { useState } from "react";

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
    const testingNum=3;
    if (testingNum===1) {
        // typeA
        return (
        <div>
            <CommonObject/>
            <div className="ox">
                <Link to='/typeb'>
                <button
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                className={style.btn}>
                    o
                </button>
                </Link>

                <button 
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                className={style.btn}>
                    x
                </button>
            </div>

        </div>)
    } else if(testingNum===2) {
        // typeB
        return(
            <div>
                <CommonObject/>
            <div>
                <Link to='/typec'>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button></Link>
                
                <Link to='/typec'>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button></Link>

                <Link to='/typec'>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button></Link>
                <Link to='/typec'>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button></Link>
                <Link to='/typec'>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button></Link>
            </div>
        </div>
        )
    } else if (testingNum===3) {
        const [disabled, setDisabled] = useState(true);
        
        function onChange(event) {
            const inputValue= Number(event.target.value);
            console.log(inputValue);
            if (inputValue!==0) {
                setDisabled(false);
            } else{
                setDisabled(true);
            }

        }
        return(
            <div>
            <div>
                <input
                onChange={onChange}
                name='input'
                type='number'
                placeholder="please put in number"
                required
                />
                <Link to='/final'>
                <button
                disabled={disabled} //이건 갱신이 안되는 구나.
                >next Step</button></Link>
                
            </div>
            
        </div>
        )
    }
    
}

export default QuestionPage;