function BookingCard({ destination, date, price }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{destination}</h5>
        <p className="card-text mb-1"><strong>Date:</strong> {date}</p>
        <p className="card-text"><strong>Price:</strong> ${price}</p>
        <a href="#" className="btn btn-success">Book Now</a>
      </div>
    </div>
  );
}

export default BookingCard;
