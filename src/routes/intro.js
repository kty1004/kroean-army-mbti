import { type } from '@testing-library/user-event/dist/type/index.js';
import {Link} from 'react-router-dom';
import React, { useEffect,useState } from 'react';

import Qurl from '../component/Qurl.js';
import * as mousehovering from '../component/mousehovering/introhovering.js';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/allCommon.css';
// style을 안 써도, 불러온 것은 모듈이 아니기에 모든 파일에 적용이 된다.


function Intro() {
    Qurl()
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