import { useState } from "react";

const PostsForm = () => {
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
        <form  className="flex w-full justify-between items-center px-5 border-b  border-gray-500 py-3 gap-4 "  onSubmit={handleSubmitPost}>
          <img 
          className="w-14 h-14 rounded-full"
          src= "https://i.pinimg.com/736x/3d/1d/7b/3d1d7be11cc3d15140284ee69284321c.jpg" 
          alt = "icon"
          />
          <input
          className="bg-transparent focus: outline-none border-none w-full"
            type="text"
            placeholder="What is happening"
            value={post}
            onChange={handleInputChange}
          />
          <input  className="text-lg bg-sky-400 w-24 h-9 rounded-3xl hover: bg-sky-600"  
          type="submit" value="Post" />
        </form>
        <section>
          {posts.map((item, index) => (
            <div key={index}
            className="flex w-full justify-between items-center px-5 border-b  border-gray-500 py-3 gap-4 "
            >

              <img 
          className="w-14 h-14 rounded-full"
          src= "https://i.pinimg.com/736x/3d/1d/7b/3d1d7be11cc3d15140284ee69284321c.jpg" 
          alt = "icon"
          />
          <section className="w-full text-lg">
            <span className="font-bold"> dan </span> 
            <span className="opacity-35"> @dan22 </span>
              <p>{item}</p>
          </section>

              <button className="text-lg bg-red-600 w-24 h-9 rounded-3xl hover: bg-red-600"
              onClick={() => handleDeletePost(index)}>Borrar</button>
            </div>
          ))}
        </section>
      </>
    );
  };
  
  export {PostsForm}