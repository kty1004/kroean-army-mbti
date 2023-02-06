import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/intro.module.css';

function Intro() {
    function hovering(prop){
        prop.target.className=style.mouseEntering
    }// hovering active
    
    function nonhovering(prop) {
        prop.target.className=null
    } // hovering is deathed

    return(
        <div>
            <div className="header">
                <h1>군 생활 판독기</h1>
            </div>
            <div className="link">
                <Link to='/typea'>
                    <button onMouseEnter={hovering} onMouseLeave={nonhovering}
                >시작하기</button>
                </Link>
                
                <button onMouseEnter={hovering}
                onMouseLeave={nonhovering}
                >공유하기</button>
            </div>
        </div>
    )
}

export default Intro;