import './App.css';
import {useState, useEffect} from 'react'
import Home from "./Home.js"

export default function App() {
  const [page, setPage] = useState("Home")

  if (page === "Home") {
    return (
      <>
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
