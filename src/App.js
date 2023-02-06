import Intro from './routes/intro';

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
      </Routes>
    </Router>
  );
}

export default App;
