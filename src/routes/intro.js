import {Link} from 'react-router-dom';

function Intro() {
    return(
        <div>
            <div className="header">
                <h1>군 생활 판독기</h1>
            </div>
            <div className="link">
                <Link to='/typea'><h2>시작하기</h2></Link>
                <h2>공유하기</h2>
            </div>
        </div>
    )
}

export default Intro;