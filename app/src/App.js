import './App.css';
import {useState, useEffect} from 'react'
import Home from "./Home.js"
import Navbar from './Navbar';
import Contact from './Contact';

export default function App() {
  const [page, setPage] = useState("Home")

  if (page === "Home") {
    return (
      <>
      <Navbar setPage={setPage} />
      <Home />

      </>
    );
}
   else if (page === "Contact") {
   return (
      <>
        <Navbar setPage={setPage}/>
        <Contact />
      
      </>
    );
}
    else {
    return (
      <>
      
      
      </>
    );
}
}
