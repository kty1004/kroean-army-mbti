import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '../component/mousehovering/mainhovering.js';

function Typea(){
    return(
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>typeA의 질문</h4>
                <p>blablablablabla</p>
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