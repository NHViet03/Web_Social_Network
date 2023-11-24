import { combineReducers } from "redux";
import auth from "./authReducer";
import postDetail from "./postDetailReducer";
import sharePost from "./sharePostReducer";
import theme from "./themeReducer";
import homePosts from './postReducer'
import notify from './notifyReducer'
import addPostModal from './addPostModalReducer'

export default combineReducers({
  auth,
  postDetail,
  sharePost,
  theme,
  homePosts,
  notify,
  addPostModal
});
