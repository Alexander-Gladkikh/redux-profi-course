import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const {data: posts, isLoading, error, refetch} = postAPI.useFetchAllPostsQuery(10)
  return (
    <div>
        <div className="post__list">
          <button onClick={() => refetch()}>Refetch</button>
          {isLoading && <h1>Идет загрузка...</h1>}
          {error && <h1>Произошла ошибка...</h1>}
          {posts && posts.map(post =>
              <PostItem key={post.id} post={post} />
          ) }
        </div>
    </div>
  );
};

export default PostContainer;
