import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);

  let domain = 'http://localhost:1337';

  let endpoint = '/api/products';
  let endpoint2 = '/api/categories';

  let url = domain + endpoint;
  let url2 = domain + endpoint2;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.data);
    });

    axios.get(url2).then((res) => {
      console.log(res.data.data);
      setCats(res.data.data);
    });
  }, []);

  
  return (
    <div>
      <div className="w-full">
        {cats.map((el) => (
          <Link to={'/cats/' + el.documentId} className="btn btn-primary" key={el.documentId}>
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
