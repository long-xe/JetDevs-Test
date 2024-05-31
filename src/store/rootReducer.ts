
import login from './login';
import user from './user';

export const rootReducer = {
  users: user.reducer,
  login: login.reducer
};
