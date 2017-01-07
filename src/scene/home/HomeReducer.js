/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import type { Action } from '../../application/Action';
import type { Message } from '../../domain/chat/Message';

export const homeReducerName = 'homeContainer';

export type HomeState = {
  document: {
    title: string,
  },
  channels: Array<string>,
  messages: Array<Message>,
};

const initialState: HomeState = {
  document: {
    title: 'Home',
  },
  channels: [
    'Dogs',
    'Cats',
  ],
  messages: [
    {
      photo: 'http://1.bp.blogspot.com/-dV6HsNNx0H0/Tp4P8aKHQ1I/AAAAAAAABbc/cxEUHsGpo3M/s320/623586AnimeGuy2.jpg',
      text: 'Hello there, how are you?',
    },
    {
      photo: 'http://anh-sex-lon-con-trinh.sextgem.com/anh-dep/anh-girl-xinh-tren-facebook/girlxinhvietnam-girlxinhfacebook-p5-2.jpg',
      text: 'Not bad',
    },
  ],
};

export default function(state: HomeState = initialState, action: Action): HomeState {
  switch (action.type) {
    default:
      return state;
  }
}
