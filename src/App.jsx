import { useState, useEffect } from "react";

import { fetchDATAFromApi } from "./utils/api";

function App() {
  
  const apiTesting = () => {
      fetchDATAFromApi('/movie/popular')
  }

  return <div className="App">App</div>
    
}

export default App
