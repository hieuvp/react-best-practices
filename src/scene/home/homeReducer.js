/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import type { Action } from '../../application/Action';
import type { Message } from '../../model/Message';

type State = {
  channels: Array<string>,
  messages: Array<Message>,
};

const initialState: State = {
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

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
