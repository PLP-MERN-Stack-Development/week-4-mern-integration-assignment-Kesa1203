import { Link } from 'react-router-dom';
import RatingStars from '../restaurant/RatingStars';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image || '/placeholder-food.jpg'} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <RatingStars rating={post.rating} />
        </div>
        <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.location}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <Link 
          to={`/posts/${post._id}`}
          className="mt-4 inline-block text-amber-600 hover:text-amber-800 font-medium"
        >
          Read Review
        </Link>
      </div>
    </div>
  );
};

export default PostCard;