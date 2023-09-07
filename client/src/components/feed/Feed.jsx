import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/64f84c10380f1599e8d536e9")
      setPosts(res.data)
    }
    
    fetchPosts();
  })

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
