import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_DATA } from "../store/actions/posts-actions";

function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA });
  }, [dispatch]);
  const posts = useSelector((state) => state.post.data);
  // console.log(posts, posts.length);
  const createPost = () => {
    return posts.map((p) => {
      return <h3 key={p.id}>{p.title}</h3>;
    });
  };
  return <>{createPost()}</>;
}

export default Posts;
