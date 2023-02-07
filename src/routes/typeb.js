import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '../component/mousehovering/mainhovering.js';

function Typeb(){
    return(
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className='header'>
                <h1>typeB 질문</h1>
                <p>blablablablablabla</p>
            </div>

            <div>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button>
                <button 
                onMouseEnter={mousehovering.hovering}
                onMouseLeave={mousehovering.nonhovering} 
                className={style.btn}>
                    
                </button>
            </div>
        </div>
    )
}

export default Typeb;