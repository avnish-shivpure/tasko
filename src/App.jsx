import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tasker from './pages/Tasker/Tasker';
import ConCurr from './pages/ConCurr/ConCurr';
import PassGen from './pages/PassGen/PassGen';
import About from './pages/About/About';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 md:scroll-auto scroll-smooth pb-60 h-screen transition-all duration-250'>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasker" element={<Tasker />} />
        <Route path="/concurr" element={<ConCurr />} />
        <Route path="/passgen" element={<PassGen />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
