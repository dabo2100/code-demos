import axios from 'axios';
import { useEffect, useState } from 'react';
import { domain } from '../store';
import CategoryCard from '../componenets/CategoryCard';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  let pageStyle = 'container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3';
  useEffect(() => {
    axios
      .get(domain + '/api/categories', { params: { populate: '*' } })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full h-full overflow-auto flex items-center flex-col">
      <div className={pageStyle}>
        {categories.map((el, index) => (
          <CategoryCard key={el.documentId} category={el} index={index} />
        ))}
      </div>
    </div>
  );
}

// Layout => checkToken
