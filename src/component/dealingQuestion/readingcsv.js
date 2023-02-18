import { type } from '@testing-library/user-event/dist/type';
import axiox from 'axios';

async function ReadingCsv() {
  const res = await axiox.get('http://localhost:3000/questions.csv');
  const data = await res.data
  const rows= data.split('\n').slice(1)
  
  const modifedRows= rows.map(elt => {
    const modifedElt= elt.replace(/"/g, '')
    let row= modifedElt.split(',')
    if (row.length >2) { //row요소가 2개 초과일때
      for (let i=2; i <row.length; i++){
        row[1]=row[1]+row[i]
      }
      row=[row[0],row[1], 'row인자 3개 였음']
      return row
    } else { //row요소가 정상적으로 나왔을 때
      return row
    }
  });
  return modifedRows
}

export default ReadingCsv;
// 이 데이터를 받는 곳
// common.js, questionPage.js, app.js