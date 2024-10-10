
import {useState,useEffect} from "react"

function App() {
   const [posts, setPosts]= useState([]);
   const [post, setPost]= useState("");

   useEffect(() => {
    console.log("Componente cargado")
  }, [])

   const handleSubmitPost= (event) => {
    event.preventDefault()
    if (post){
      setPosts([...posts, post]);
      setPost("");
      console.log([...posts, post])
    }
   };


   const handleImputChange= (event) => {
    setPost(event.target.value);
   };

   const handleDeletePost= (index) => {
    const newPosts = posts.filter((_,i ) => i !== index)
    setPosts(newPosts)

   };

  return (
    <>
      <h1>Clon twitter</h1>
      <form onSubmit={handleSubmitPost}>
        <input type="text" 
        placeholder="Escribir algo" 
        value={post}
        onChange={handleImputChange}/>
        <input type="submit" value="postear"/>
      </form>
      <p> actual post:  {post}</p>

    
    <section>
    {posts.map((item, index) => (
      <div key= "index"> 
      <p>{item}</p>
      <button onClick= {() => handleDeletePost (index)}> Borrar</button>
        </div>
      ))}
</section>
    

      

    </>
  )
}

export default App
