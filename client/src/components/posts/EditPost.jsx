import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import FormInput from '../ui/FormInput';
import RatingStars from '../restaurant/RatingStars';

const EditPost = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    location: '',
    cuisine: '',
    priceRange: '',
    address: '',
    contact: '',
    website: '',
    rating: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { get, put } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id, get]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await put(`/posts/${id}`, formData);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <FormInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Excerpt (Short Description)"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              rows="6"
              required
            />
          </div>
          <FormInput
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Location (City/Town)"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Cuisine Type"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Price Range (e.g., R100-R200)"
              name="priceRange"
              value={formData.priceRange}
              onChange={handleChange}
            />
            <FormInput
              label="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <FormInput
            label="Website URL"
            name="website"
            value={formData.website}
            onChange={handleChange}
            type="url"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <RatingStars 
              rating={formData.rating} 
              editable={true} 
              onRatingChange={handleRatingChange} 
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition disabled:opacity-50"
          >
            {isSubmitting ? 'Updating...' : 'Update Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;