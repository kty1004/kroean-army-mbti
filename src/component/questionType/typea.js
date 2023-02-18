import {Link} from 'react-router-dom';

import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/mousehovering/mainhovering.js';

import SavingUserValue from '../dealingUserValue/savingValue';

function Typea(){
     // jsx에다가 함수 인자를 바로 입력할 수가 없음. 그건 props임

    return(
        <div>
            <div className="ox">
                <Link to='/typeb'>
                <button
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                onClick={()=>SavingUserValue('o')}
                className={style.btn}>
                    o
                </button>
                </Link>

                <button 
                onMouseEnter={mousehovering.hovering} 
                onMouseLeave={mousehovering.nonhovering}
                onClick={()=>SavingUserValue('x')}
                className={style.btn}>
                    x
                </button>
            </div>

        </div>
    )

}

export default Typea;