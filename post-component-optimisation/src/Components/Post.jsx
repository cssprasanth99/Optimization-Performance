import React from "react";
import { useState } from "react";

const Post = ({ data }) => {
  console.log(data);
  if (!data || !data.title || !data.body) {
    return null; // Render nothing or handle gracefully
  }
  const initialVerifyPost = data && data.verifyPost ? data.verifyPost : false;

  const [verified, setVerified] = useState(initialVerifyPost);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate a random color for background
  const randomBackgroundColor = getRandomColor();

  // Style object with random background color
  const postStyle = {
    backgroundColor: randomBackgroundColor,
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const handleChange = () => {
    // Toggle the 'verified' state and update 'verifyPost' in 'data'
    setVerified(!verified);
    data.verifyPost = !verified; // Update 'verifyPost' in 'data'
  };

  return (
    <div data-testid="post" style={postStyle}>
      <div>
        {/* add title in below h6 and body in P tag */}
        <h6>{data.title}</h6>
        <p>{data.body}</p>
      </div>
      {/* The default textContent of button should be  "Verify" and other textContent should be changed to "Verified" and vice-versa */}
      <button data-testid="verify_btn" onClick={handleChange}>
        {data.verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
};

const Postcomponent = React.memo(Post);

export { Postcomponent };
