export default function ProductCard({ product,className }) {
  return (
    <div className={className} key={product.id} style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.price}$</h5>
        <p className="card-text">{product.title}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
