// we will fetch all data here
// https://restcountries.com/v3.1/all?fields=name,flags
import { useEffect, useState } from 'react';
import usePagination from './hooks/usePagination';
import FlagsContainer from './components/FlagsContainer'
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const [flags, setFlags] = useState([])
  const [currentPage,setCurrentPage] = useState(0)

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((response) => response.json())
    .then((data) => setFlags(data)).catch(e=> console.log(e.error))

  }

  useEffect(() => {
    fetchData()
  }, [])

  const [flagsToDisplay,pagesToDisplay] = usePagination(flags,12,currentPage)
  
  return (
    <div className="App">
      <FlagsContainer flags={flagsToDisplay}/>
      <Pagination setCurrentPage={setCurrentPage} pagesToDisplay={pagesToDisplay} currentPage={currentPage}/>
    </div>
  );
}

export default App;
