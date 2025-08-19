import { Link } from 'react-router-dom';
import { domain } from '../store';
import { delay, motion } from 'motion/react';
export default function CategoryCard({ category,index }) {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.3 } }}>
      <Link to={`categories/${category.documentId}`} className="card bg-base-200 shadow-sm cursor-pointer hover:scale-105 transition">
        <figure>
          <img src={domain + category.img?.formats.medium.url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.name}</h2>
          <p>{category.products?.length} Items</p>
        </div>
      </Link>
    </motion.div>
  );
}
