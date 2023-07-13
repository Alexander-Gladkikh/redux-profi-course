import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hook/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreator";
import PostContainer from "./components/PostContainer";

const App = () => {
  // const dispatch = useAppDispatch();
  //  const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  //
  //  useEffect(() => {
  //    dispatch(fetchUsers())
  //  }, [])


  return (
    <div className='App'>
      {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*{JSON.stringify(users, null, 2)}*/}
      <div style={{display: 'flex'}}>
        <PostContainer />
      </div>
    </div>
  );
};

export default App;
