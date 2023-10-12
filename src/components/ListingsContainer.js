import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, deleteListingFromState } ) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
        <ListingCard listing={listing} deleteListingFromState={deleteListingFromState} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
