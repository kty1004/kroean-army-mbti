import Intro from './routes/intro';
import QuestionPage from '/Users/kimtaeyoung1/Documents/GitHub/kroean-army-mbti/src/routes/questionPage.js';
import Final from './routes/final';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Intro/>} path='/'/>
        <Route element={<QuestionPage/>} path='/questionpage'/>
        <Route element={<Final/>} path='/final'/>
      </Routes>
    </Router>
  );
}

export default App;
