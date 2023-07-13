import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
  const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post:IPost) => {
      deletePost(post)
  }

  const handleUpdate = (post:IPost) => {
      updatePost(post)
  }
  return (
    <div>
        <div className="post__list">
          <button onClick={handleCreate}>Add new post</button>
          {isLoading && <h1>Идет загрузка...</h1>}
          {error && <h1>Произошла ошибка...</h1>}
          {posts && posts.map(post =>
              <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
          ) }
        </div>
    </div>
  );
};

export default PostContainer;
