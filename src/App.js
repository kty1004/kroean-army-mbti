import Intro from './routes/intro';
import Typea from './routes/typea';
import Typeb from './routes/typeb';

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
      </Routes>
    </Router>
  );
}

export default App;
