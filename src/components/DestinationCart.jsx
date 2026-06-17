function DestinationCart({ title, text, img }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img src={img} className="card-img-top rounded-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{text}</p>
        <a href="#" className="btn btn-primary w-100">View Details</a>
      </div>
    </div>
  );
}

export default DestinationCart;
