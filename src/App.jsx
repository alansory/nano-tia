import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<NewsCard />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;