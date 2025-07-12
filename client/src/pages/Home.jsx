// src/pages/Home.jsx
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PostList from '../components/posts/PostList';
import { useApi } from '../hooks/useApi';
import { getPosts } from '../services/postService';

const Home = () => {
  const { data: posts, loading: isLoading, error } = useApi(() => getPosts({ limit: 6 }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover South Africa's Culinary Treasures</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic reviews of restaurants and hidden gems across South Africa
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-transparent opacity-90"></div>
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Restaurant</h2>
                <p className="text-white mb-6">
                  Each week we highlight an exceptional dining experience from across the country.
                </p>
                <button className="bg-white text-amber-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                  View Feature
                </button>
              </div>
            </div>
            <img 
              src="/hero-food.jpg" 
              alt="South African cuisine"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
          {error && <p className="text-red-600">Failed to load posts: {error.message}</p>}
          <PostList posts={posts || []} isLoading={isLoading} />
          <div className="text-center mt-8">
            <a 
              href="/posts" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition"
            >
              View All Reviews
            </a>
          </div>
        </section>

        <section className="bg-amber-50 rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Culinary Experience</h2>
            <p className="text-gray-600 mb-6">
              Have you discovered an amazing restaurant? Share your experience with our community of food enthusiasts.
            </p>
            <a 
              href="/create-post" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition"
            >
              Write a Review
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
