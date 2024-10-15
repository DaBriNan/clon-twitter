import { useState } from "react";

const PostsForm = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    postContent: "",
    likes: 0,
  });
  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (post) {
      setPosts([...posts, post]);
      setPost({
        postContent: "",
        likes: 0,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <>
      <form
        className="flex w-full justify-between items-center px-5 border-b border-gray-500 py-3 gap-4"
        onSubmit={handleSubmitPost}
      >
        <img
          className="w-14 h-14 rounded-full"
          src="https://i.pinimg.com/736x/3d/1d/7b/3d1d7be11cc3d15140284ee69284321c.jpg"
          alt="icon"
        />
        <input
          className="bg-transparent focus:outline-none border-none w-full"
          type="text"
          placeholder="What is happening?"
          value={post.postContent}
          onChange={handleInputChange}
          name="postContent"
        />
        <input
          className="bg-transparent focus:outline-none border-none w-10"
          type="number"
          placeholder="Ingresa tu email"
          value={post.likes}
          onChange={handleInputChange}
          name="likes"
        />
        <input
          className="text-lg bg-sky-500 w-24 h-9 rounded-3xl hover:bg-sky-600 disabled:bg-red-500"
          type="submit"
          value="Post"
          disabled={post.postContent <= 0}
        />
      </form>
      <section>
        {posts.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center px-5 border-b border-gray-500 py-3 gap-4"
          >
            <img
              className="w-14 h-14 rounded-full"
              src="https://i.pinimg.com/736x/3d/1d/7b/3d1d7be11cc3d15140284ee69284321c.jpg"
              alt="icon"
            />
            <section className="w-full text-lg">
              <span className="font-bold">eddy3o </span>
              <span className="opacity-35">@eddy3o - 4s</span>
              <p>
                {item.postContent}, likes: {item.likes}
              </p>
            </section>
            <button
              className="text-lg bg-red-500 w-24 h-9 rounded-3xl hover:bg-red-600"
              onClick={() => handleDeletePost(index)}
            >
              Borrar
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export { PostsForm };