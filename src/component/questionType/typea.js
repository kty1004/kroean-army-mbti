import {Link} from 'react-router-dom';

import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/mousehovering/mainhovering.js';

export function SendingUserValueToSavingValue(value){
    return value
}

export function Typea(){
     // jsx에다가 함수 인자를 바로 입력할 수가 없음. 그건 props임
    return(
        <div>
            <div className="ox">
                <Link to='/typeb'>
                <button
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                onClick={()=>SendingUserValueToSavingValue('o')}
                className={style.btn}>
                    o
                </button>
                </Link>

                <button 
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                onClick={()=>SendingUserValueToSavingValue('x')}
                className={style.btn}>
                    x
                </button>
            </div>

        </div>
    )

}
