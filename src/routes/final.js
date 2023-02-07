import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import {Link} from 'react-router-dom';


function Final() {
    return(
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="header">
                <h1> this is final page</h1>
            </div>
        </div>
    )
}

export default Final;