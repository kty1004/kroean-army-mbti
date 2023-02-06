import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/intro.module.css';
import { useEffect, useState } from 'react';

function Intro() {
    const [isover, setIsOver] = useState(false);
    
    const hovering=()=> setIsOver(true)
    const nonhovering=()=> setIsOver(false)

    return(
        <div>
            <div className="header">
                <h1>군 생활 판독기</h1>
            </div>
            <div className="link">
                <Link to='/typea'>
                    <div onMouseEnter={hovering}
                onMouseLeave={nonhovering}
                className={isover? style.mouseEntering :null}
                >시작하기</div>
                </Link>
                
                <div onMouseEnter={hovering}
                onMouseLeave={nonhovering}
                className={isover? style.mouseEntering :null}
                >공유하기</div>
            </div>
        </div>
    )
}

export default Intro;