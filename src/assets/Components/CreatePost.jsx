import { useContext, useRef } from "react";
import { PostLists } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostLists);
  const userIdElement = useRef();
  const TitleElement = useRef();
  const BodyElement = useRef();
  const reactionElement = useRef();
  const TagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const title = TitleElement.current.value;
    const body = BodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = TagsElement.current.value.trim().split(/\s+/);

    const newPost = {
      id: Date.now().toString(),
      title,
      body,
      reactions: parseInt(reaction) || 0,
      userId,
      tags,
    };

    addPost(newPost);
    userIdElement.current.value = "";
    TitleElement.current.value = "";
    BodyElement.current.value = "";
    reactionElement.current.value = "";
    TagsElement.current.value = "";
    alert("Post Has Been Uploaded");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          <h4>
            <b>Enter Your User Id Here</b>
          </h4>
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <h4>
            <b>Post Title</b>
          </h4>
        </label>
        <input
          type="text"
          ref={TitleElement}
          className="form-control"
          id="title"
          placeholder="How Are you feeling todays...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          <h4>
            <b>Post Contain</b>
          </h4>
        </label>
        <textarea
          type="text"
          ref={BodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          <h4>
            <b>Number of reaction</b>
          </h4>
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reacttions"
          placeholder="How many peaple reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          <h4>
            <b> Enter Your Hastag Here</b>
          </h4>
        </label>
        <input
          type="text"
          className="form-control"
          ref={TagsElement}
          id="tags"
          placeholder="Please enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
