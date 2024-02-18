//import './App.css';

import { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" category="general" pageSize="6"/>} />
          <Route path="/health" element={<News key="health" category="health" pageSize="6" />} />
          <Route path="/science" element={<News key="science" category="science" pageSize="6"/>} />
          <Route path="/business" element={<News key="business" category="business" pageSize="6" />} />
          <Route path="/sports" element={<News key="sports" category="sports" pageSize="6"/>} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize="6"/>} />
          <Route path="/technology" element={<News key="technology" category="technology" pageSize="6"/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

