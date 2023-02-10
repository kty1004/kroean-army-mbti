import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/mousehovering/mainhovering.js';

function Typeb(){
    // jsx에다가 함수 인자를 바로 입력할 수가 없음. 그건 props임
    return(
        <div>
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
}

export default Typeb;