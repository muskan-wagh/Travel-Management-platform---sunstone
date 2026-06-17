function DestinationCart({ title, text }) {
  return (
    <div className="card h-100">
      <img src="https://placehold.co/600x400" className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
}

export default DestinationCart;
