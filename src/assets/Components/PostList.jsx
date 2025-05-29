import { useContext, useEffect, useState } from "react";

import Post from "./Post";
import { PostLists as PostListsData } from "../store/Post-list-store";
import Message from "./Message";

const PostList = () => {
  const { postlist, addInitialPosts } = useContext(PostListsData);
  // const [dataFetched, setDataFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });
    return () => {
      console.log("Cleaning Up UseEffect");

      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      // <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>
      <div
        className="text-center"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }
  // const handleOnClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (
    <>
      {postlist.length === 0 && <Message />}
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
