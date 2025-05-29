import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import PostList from "./PostList";
import { PostLists as PostListsData } from "../store/Post-list-store";
import { FaThumbsUp } from "react-icons/fa";
import { RiThumbDownFill } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListsData);
  return (
    <div className="card post-card " style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="badge rounded-pill text-bg-primary hastag"
          >
            #{tag}
          </span>
        ))}
      </div>

      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <MdDelete />
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="alert alert-success reaction" role="alert">
        <FaThumbsUp />
        {post.reactions.likes} likes — <RiThumbDownFill />{" "}
        {post.reactions.dislikes} dislikes <GoHeartFill /> 25 loves
      </div>
    </div>
  );
};

export default Post;
