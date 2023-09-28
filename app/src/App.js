import './App.css';
import {useState, useEffect} from 'react'
import Home from "./Home.js"
import Navbar from './Navbar';

export default function App() {
  const [page, setPage] = useState("Home")

  if (page === "Home") {
    return (
      <>
      <Navbar />
      <Home />

      </>
    );
}
   else if (page === "#") {
   return (
      <>
      
      
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
