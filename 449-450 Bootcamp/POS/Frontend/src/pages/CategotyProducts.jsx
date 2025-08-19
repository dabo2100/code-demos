import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { domain } from '../store';
import ProductCard from '../componenets/ProductCard';

export default function CategotyProducts() {
  // What category is ?
  let pageStyle = 'container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3';

  const params = useParams();
  const [categoryInfo, setCategoryInfo] = useState({});
  useEffect(() => {
    axios
      .get(domain + `/api/categories/${params.categoryId}`, {
        params: {
          populate: {
            products: {
              populate: '*',
            },
          },
        },
      })
      .then((res) => {
        setCategoryInfo(res.data.data);
      });
  }, []);
  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center">
      <h1 className="w-full text-2xl text-center">All {categoryInfo.name}</h1>
      <div className={pageStyle}>
        {categoryInfo.products?.map((el) => (
          <ProductCard key={el.documentId} product={el} />
        ))}
      </div>
    </div>
  );
}
