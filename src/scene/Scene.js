/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import HomeContainer from './home/HomeContainer';
import homeReducer from './home/homeReducer';

const SCENES = {
  [HomeContainer.TAG_NAME]: {
    component: HomeContainer,
    reducer: homeReducer,
    path: 'home',
  },
};

export const sceneReducers = (() => {
  const reducers = {};
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  for (const tag in SCENES) {
    if (hasOwnProperty.call(SCENES, tag)) {
      reducers[tag] = SCENES[tag].reducer;
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
