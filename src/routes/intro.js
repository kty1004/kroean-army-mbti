import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/allCommon.css';
import * as mousehovering from '../component/mousehovering/introhovering.js';


function Intro() {
    
    return(
        <div>
            <div className="header">
                <h1>군 생활 판독기</h1>
            </div>

            <div className="link">
                <Link to='/typea'>
                    <button onMouseEnter={mousehovering.hovering} onMouseLeave={mousehovering.nonhovering}
                >시작하기</button>
                </Link>
                
                <button onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering}
                >공유하기</button>
            </div>
        </div>
    )
}

export default Intro;