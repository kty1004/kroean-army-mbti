import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import SendingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/sendingCsv.js'

function CommonObject(question){ //type마다 공통적으로 있는 부분
    // 요 함수에서 질문 데이터를 받아야 함.
    // SendingCsv()
    const _queston =JSON.stringify(question)
    
    return (
        <div>
            <Link to='/'>
                <button className={style.goToHome}>go to Home</button>
            </Link>
            <div className="question">
                <h4>{_queston}</h4>
            </div>
        </div>
    )
}

export default CommonObject;