import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '../mousehovering/mainhovering.js';

function Typea(question){
     // jsx에다가 함수 인자를 바로 입력할 수가 없음. 그건 props임

    return(
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>{_question}</h4>
            </div>

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

        </div>
    )

}

export default Typea;