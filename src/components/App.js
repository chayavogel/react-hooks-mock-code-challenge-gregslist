import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r)=> r.json())
    .then((data) => setListings(data))
  }, [])

  function deleteListingFromState(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} deleteListingFromState={deleteListingFromState}/>
    </div>
  );
}

export default App;
