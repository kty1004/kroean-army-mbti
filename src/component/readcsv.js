async function ReadingCsv(){
    const res= await fetch('src/component/questions.csv');
    const data= await res.text();
    console.log(data);
}