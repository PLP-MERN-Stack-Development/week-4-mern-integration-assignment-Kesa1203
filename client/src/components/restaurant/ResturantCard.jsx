import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 overflow-hidden">
        <img 
          src={restaurant.image || '/placeholder-restaurant.jpg'} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{restaurant.name}</h3>
        <div className="flex items-center mb-2">
          <RatingStars rating={restaurant.rating} size="sm" />
          <span className="ml-2 text-sm text-gray-600">{restaurant.rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{restaurant.location}</span>
          <span className="font-medium">{restaurant.priceRange}</span>
        </div>
        <Link 
          to={`/restaurants/${restaurant._id}`}
          className="mt-4 inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;