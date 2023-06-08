// how many flags we need to display per page => number // how many elements
// current page => state
// how many element we have. total element 
// how many pages we want to show before next 

function usePagination(allItems,itemsPerPage,currentPage){
    // the amount of pages ...
    //
    const pagesToDisplay = Math.ceil(allItems.length / itemsPerPage)
   // page is 4 and we have 100 items and the page has 10 elements
    const initialItemToDisplay = currentPage*itemsPerPage //40
    // allItems.slice(40,(40+ 10))
    // allItems.slice(40,50)
    const itemsToDisplay = allItems.slice(initialItemToDisplay,initialItemToDisplay + itemsPerPage)
    return [itemsToDisplay,pagesToDisplay]
}

export default usePagination