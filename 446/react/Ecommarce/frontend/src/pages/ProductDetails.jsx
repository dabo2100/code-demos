import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { domain } from "../store";

export default function ProductDetails() {
  const { value: baseUrl } = domain();
  const params = useParams();

  useEffect(() => {
    let url = baseUrl + `/api/products/${params.productId}`;
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>ProductDetails</div>;
}
