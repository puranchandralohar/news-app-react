import React from "react";
import { Headlines } from "./Component/Headlines";
import { Epaper } from "./Component/Epaper";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { ErrorPage } from "./Component/ErrorPage";
import { Footer } from "./Common/Footer";
import { BrowserRouter } from "react-router-dom";
import { Route ,Routes } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headlines/>}/>
        <Route path="/" element={<Epaper/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
