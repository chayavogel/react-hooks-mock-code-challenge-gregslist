import React from "react";

function ListingCard( { listing, deleteListingFromState } ) {

  async function handleDeleteClick() {
    await fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })

    deleteListingFromState(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{"description"}</strong>
        <span> · {listing.location}</span>
        <button
        className="emoji-button delete"
        onClick={handleDeleteClick}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
