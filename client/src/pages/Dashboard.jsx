import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PostList from '../components/posts/PostList';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useApi();
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const data = await get('/posts/me');
        setPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserPosts();
  }, [get]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
          <Link 
            to="/create-post" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Create New Review
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800">Total Reviews</h3>
              <p className="text-2xl font-bold">{posts.length}</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800">Average Rating</h3>
              <p className="text-2xl font-bold">
                {posts.length > 0 
                  ? (posts.reduce((sum, post) => sum + post.rating, 0) / posts.length 
                ): 0
                }
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800">Featured</h3>
              <p className="text-2xl font-bold">
                {posts.filter(post => post.featured).length}
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">Your Recent Reviews</h2>
          <PostList posts={posts} isLoading={isLoading} />
          {posts.length === 0 && !isLoading && (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">You haven't created any reviews yet.</p>
              <Link 
                to="/create-post" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition"
              >
                Create Your First Review
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;