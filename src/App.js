import Intro from './routes/intro';
import QuestionPage from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/routes/questionPage.js';
import Final from './routes/final';
import ReadingCsv from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/component/dealingQuestion/readingcsv.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

const questionOrder=1;
let questionArray= ReadingCsv().then((res)=>questionArray=res[questionOrder].join()) 
// questionArray를 받아오고 이를 각 js파일에 전송할 것임.
function App() {
  console.log(questionArray)
  return (
    <Router>
      <Routes>
        <Route element={<Intro/>} path='/'/>
        <Route element={<QuestionPage CsvData={questionArray}/>} path='/questionpage'/>
        <Route element={<Final/>} path='/final'/>
      </Routes>
    </Router>
  );
}

export default App;
