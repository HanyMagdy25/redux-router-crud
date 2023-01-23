import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import PostList from "../components/PostList";
import { deletePost, fetchPosts } from "../state/postSlice";

export default function Index() {
  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts)
  // Destruction
  const { records, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // console.log("posts", posts);

  const deleteRecord = useCallback(
    (id) => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );

  return (
    <Loading loading={loading} error={error}>
      <PostList data={records} deleteRecord={deleteRecord} />
    </Loading>
  );
}
