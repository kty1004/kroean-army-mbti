import { useState } from "react";
import {Link} from 'react-router-dom';


function Typec() {
    let num=null; //오잉 이러면 왜 useState를 쓰지??
    function onSubmit(event) {
        event.preventDefault();
        const num= event.target.input.value
        console.log(num)
    }

    return (
        <div>
            <div className="header">
            <h1>it's Type C</h1>
            <p>blablablablabla</p>
            </div>

            <div>
                <form onSubmit={onSubmit}>
                <input
                name='input'
                type='number'
                placeholder="please put in number"
                required
                />
            
                <button>next Step</button>
                </form>
                

            </div>
            
        </div>
    )
}

export default Typec;