export default function ProductCard({ imgSrc, cat, price }) {
    return (
        <div className="col-12 col-md-6 col-lg-3 p-2">
            <div className="card col-12 h-100">
                <img src={imgSrc} height={300} className="card-img-top col-12 object-fit-contain" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cat}</h5>
                    <p className="card-text">Price : {price} $ </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}