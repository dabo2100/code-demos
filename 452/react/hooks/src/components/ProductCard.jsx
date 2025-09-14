export default function ProductCard({ item }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>Price : {item.price} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
