import BookingCard from "../components/BookingCard";

const bookings = [
  { destination: "Paris", date: "Aug 15, 2025", price: 1299 },
  { destination: "Tokyo", date: "Sep 10, 2025", price: 1599 },
  { destination: "New York", date: "Oct 5, 2025", price: 899 },
];

function LandingPage() {
  return (
    <>
      <h2 className="mb-4">Your Bookings</h2>
      <div className="row">
        {bookings.map((b, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <BookingCard destination={b.destination} date={b.date} price={b.price} />
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingPage;
