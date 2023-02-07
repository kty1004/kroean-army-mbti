import Intro from './routes/intro';
import Typea from './routes/typea';
import Typeb from './routes/typeb';
import Typec from './routes/typec';
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
        <Route element={<Typea/>} path='/typea'/>
        <Route element={<Typeb/>} path='/typeb'/>
        <Route element={<Typec/>} path='/typec'/>
        <Route element={<Final/>} path='/final'/>
      </Routes>
    </Router>
  );
}

export default App;
