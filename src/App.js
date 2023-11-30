import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharactersList from "./components/CharactersList";
import React from "react";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characterdetails" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
