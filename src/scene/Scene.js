/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import HomeContainer from './home/HomeContainer';
import homeReducer from './home/homeReducer';
import LoginContainer from './login/LoginContainer';
import loginReducer from './login/loginReducer';

const SCENES = {
  [HomeContainer.TAG_NAME]: {
    component: HomeContainer,
    reducer: homeReducer,
    path: 'home',
  },
  [LoginContainer.TAG_NAME]: {
    component: LoginContainer,
    reducer: loginReducer,
    path: 'login',
  },
};

export const sceneReducers = (() => {
  const reducers = {};
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  for (const tag in SCENES) {
    if (hasOwnProperty.call(SCENES, tag)) {
      const reducer = SCENES[tag].reducer;
      if (reducer) reducers[tag] = reducer;
    }
  }
  return reducers;
})();

export const scenes = (() => {
  const scenes = [];
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  for (const tag in SCENES) {
    if (hasOwnProperty.call(SCENES, tag)) {
      scenes.push(SCENES[tag]);
    }
  }
  return scenes;
})();
