import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingStars from '../restaurant/RatingStars';
import LoadingSpinner from '../common/LoadingSpinner';
import { useApi } from '../../hooks/useApi';

const PostDetail = () => {
  const { id } = useParams();
  const { get } = useApi();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id, get]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-96 overflow-hidden">
        <img 
          src={post.image || '/placeholder-food.jpg'} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <RatingStars rating={post.rating} size="lg" />
        </div>
        <div className="flex items-center space-x-4 text-gray-600 mb-6">
          <span>{post.location}</span>
          <span>•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.priceRange}</span>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Restaurant Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-medium">Cuisine:</span> {post.cuisine}</p>
              <p><span className="font-medium">Address:</span> {post.address}</p>
            </div>
            <div>
              <p><span className="font-medium">Contact:</span> {post.contact}</p>
              <p><span className="font-medium">Website:</span> 
                {post.website ? <a href={post.website} target="_blank" rel="noreferrer" className="text-amber-600"> Visit Site</a> : ' Not available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;