import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import { Postcomponent } from "./Components/Post";

function App() {
  const [timer, setTimer] = useState(1);
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState({
    id: "",
    title: "",
    body: "",
    verifyPost: false,
  });

  // Memoized handleChange function using useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setSinglePost((prevSinglePost) => ({
      ...prevSinglePost,
      [name]: value,
    }));
  }, []);

  // Memoized handleSubmit function using useCallback and useMemo
  const handleSubmit = useCallback(() => {
    setId((prevId) => prevId + 1);
    const updatedPost = { ...singlePost, id };
    setPosts((prevPosts) => [...prevPosts, updatedPost]);
  }, [id, singlePost]);

  // Increment timer every second using useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App" data-testid="app">
      <div data-testid="timer">Timer: {timer}</div>
      <div>
        <input
          placeholder="Enter post title"
          data-testid="title-input"
          name="title"
          onChange={handleChange}
        />
        <br />
        <textarea
          placeholder="Enter post body"
          data-testid="post-input"
          name="body"
          onChange={handleChange}
        ></textarea>
        <br />
        <button data-testid="add-post-button" onClick={handleSubmit}>
          Add Post
        </button>
      </div>

      <hr />
      <h1>Posts</h1>
      <div data-testid="posts-container">
        {posts.map((data, index) => (
          <div key={index}>
            {/* MemoizedPost component with memoization */}
            <Postcomponent data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
