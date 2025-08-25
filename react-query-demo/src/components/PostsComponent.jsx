import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

const PostsComponent = () => {
    const {
        data, 
        error,
        isError, 
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
        cacheTime: 1000 * 60 * 5,

        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data: {error.message}</div>;
    
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()}>
           Refetch posts
            </button>

            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;