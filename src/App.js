import React from "react";
import { Headlines } from "./Component/Headlines";
import { Epaper } from "./Component/Epaper";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { ErrorPage } from "./Component/ErrorPage";
import { BrowserRouter } from "react-router-dom";
import { Route ,Routes } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headlines/>}/>
        <Route path="/epaper" element={<Epaper/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
