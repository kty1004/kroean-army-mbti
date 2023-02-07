import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainHovering.module.css';
import mainPageBtn from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/mainpage_style/mainPageBtn.module.css';

function hovering(prop){
    const className= prop.target.className
    prop.target.className= className+` ${style.mouseEntering}`
}// hovering active

function nonhovering(prop) {
    prop.target.className=mainPageBtn.btn
} // hovering is deathed

export {hovering, nonhovering};