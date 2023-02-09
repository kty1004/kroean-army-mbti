import axiox from 'axios';

async function ReadingCsv() {
  const res = await axiox.get('http://localhost:3000/questions.csv');
  const data = await res.data
  const rows= data.split('\n').slice(1)
  

  rows.forEach(elt => {
    const modifedElt= elt.replace(/"/g, '')
    let row= modifedElt.split(',')

    if (row.length >2) {
      for (let i=2; i <row.length; i++){
        row[1]=row[1]+row[i]
      }
      row=[row[0],row[1]]
    }
  });
  return rows
}

export {ReadingCsv};
