import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryProducts() {
  const params = useParams();

  useEffect(() => {
    let cat_id = params.cat_id;
    let domain = 'http://localhost:1337';
    let endPoint = '/api/categories/' + cat_id;
    let url = domain + endPoint;
    axios.get(url, { params: { populate: '*' } }).then((res) => {
      console.log(res.data.data);
    });
  }, []);
  return <div>CategoryProducts</div>;
}
