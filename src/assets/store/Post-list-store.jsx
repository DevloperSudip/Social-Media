import { createContext, useReducer } from "react";

// Default posts list (this will be the initial state)
// const Default_Post_List = [
//   {
//     id: "1",
//     title: "Going To Mumbai",
//     body: "Hi friend, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Pass Ho Gaye Bhai",
//     body: "4 years of fun, and I still passed. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

// Default context with empty functions (for add and delete post)
const Default_Context = {
  postlist: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
};

// Create the PostLists context
export const PostLists = createContext(Default_Context);

// Reducer function to update postlist based on actions
const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state]; // Add new post to the list
    case "ADD_INITIAL_POST":
      return action.payload;
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload); // Remove post by id
    default:
      return state;
  }
};

// PostLists provider component
const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  // Function to add a post
  const addPost = (newPost) => {
    // console.log("🚀 New Post:", newPost);

    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const addInitialPosts = (posts) => {
    // console.log("🚀 New Post:", newPost);

    dispatchPostList({ type: "ADD_INITIAL_POST", payload: posts });
  };

  // Function to delete a post
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  return (
    <PostLists.Provider
      value={{ postlist, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;
