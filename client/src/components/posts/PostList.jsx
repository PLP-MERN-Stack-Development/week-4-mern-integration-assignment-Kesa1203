import PostCard from './PostCard';
import LoadingSpinner from '../common/LoadingSpinner';

const PostList = ({ posts, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;