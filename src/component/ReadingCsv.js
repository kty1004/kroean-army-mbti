
export default async function ReadingCsv() {
  const res = await fetch('/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/questions.csv');
  const data = await res.text()
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
  return (
    rows
  )
}

