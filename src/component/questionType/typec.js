import { useState } from "react";
import {Link} from 'react-router-dom';
import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';
import * as mousehovering from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/mousehovering/mainhovering.js';


function Typec() {
    
    const [disabled, setDisabled] = useState(true);

    function onChange(event) {
        const inputValue= Number(event.target.value);
        console.log(inputValue);
        if (inputValue!==0) {
            setDisabled(false);
        } else{
            setDisabled(true);
        }

    }
    return (
        <div>
            <div>
                <input
                onChange={onChange}
                name='input'
                type='number'
                placeholder="please put in number"
                required
                />
                <Link to='/final'>
                <button
                disabled={disabled} //이건 갱신이 안되는 구나.
                >next Step</button></Link>
            </div>
            
        </div>
    )
}

export default Typec;