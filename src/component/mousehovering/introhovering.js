import style from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/styles/introPage_style/introhovering.module.css';

function hovering(prop){
    prop.target.className=style.mouseEntering
}// hovering active

function nonhovering(prop) {
    prop.target.className=null
} // hovering is deathed

export {hovering, nonhovering};