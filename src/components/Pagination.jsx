// right now i just want two buttons 
// one button will add one to our current page
// another button will remove one to our current page
//previous and the other will be nexra


import React from 'react'

const Pagination = ({setCurrentPage,pagesToDisplay,currentPage}) => {
  return (
  
    <div>
        <button onClick={() => setCurrentPage((previousPage) => previousPage - 1)}>Previous</button>
       
    {/* here i want to show all the buttons of the possible pages */}
    { 
     [...Array(pagesToDisplay)].map((num, index)=>(index > currentPage && index < (currentPage + 5)) && <button onClick={()=> setCurrentPage(index)}>{index+1}</button>)
    }
    <button onClick={() => setCurrentPage((previousPage) => previousPage + 1)}>Next</button>
    </div>
     

  )
}

export default Pagination