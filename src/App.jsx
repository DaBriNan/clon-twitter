import { PostsForm } from "./components/PostsForm"

function App() {

  return (
    <div className="h-screen text-2x1  border-x  border-gray-500 w-2/5">
        <section className="flex w-full text-lg  font-bols mb-4 border-b  border-gray-500">
        <div className="w-1/2  p-2 flex justify-center hover:bg-neutral-900"> For you</div>
        <div className=" w-1/2 p-2 flex justify-center hover:bg-neutral-900"> Following</div>
        </section>
    
      <PostsForm />
    </div>
  );
}

/*const PostsForm = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (post) {
      setPosts([...posts, post]);
      setPost("");
    }
  };

  const handleInputChange = (e) => {
    setPost(e.target.value);
  };

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <>
      <form onSubmit={handleSubmitPost}>
        <input
          type="text"
          placeholder="Escribe algo"
          value={post}
          onChange={handleInputChange}
        />
        <input type="submit" value="Postear" />
      </form>
      <section>
        {posts.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => handleDeletePost(index)}>Borrar</button>
          </div>
        ))}
      </section>
    </>
  );
};*/

export default App;