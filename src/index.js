import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node'
import StoryblokClient from 'storyblok-js-client';

const handlers = [
  http.get('https://api.storyblok.com/v2/some-path', () => {
    // Respond with a network error.
    return HttpResponse.error();
  }),
  http.post('https://api.storyblok.com/v2/some-path', () => {
    // Respond with a network error.
    return HttpResponse.error();
  }),
  http.delete('https://api.storyblok.com/v2/some-path', () => {
    // Respond with a network error.
    return HttpResponse.error();
  }),
  http.put('https://api.storyblok.com/v2/some-path', () => {
    // Respond with a network error.
    return HttpResponse.error();
  }),
];

export const server = setupServer(...handlers)
server.listen()

const client = new StoryblokClient({
  accessToken: 'wrong-token-on-purpose',
});

client
  .get('some-path', {})
  .then(() => console.log('get promise resolved'))
  .catch(() => console.log('get promise rejected'));

client
  .getAll('some-path', {})
  .then(() => console.log('getAll promise resolved'))
  .catch(() => console.log('getAll promise rejected'));

client
  .post('some-path', {})
  .then(() => console.log('post promise resolved'))
  .catch(() => console.log('post promise rejected'));

client
  .delete('some-path', {})
  .then(() => console.log('delete promise resolved'))
  .catch(() => console.log('delete promise rejected'));

client
  .put('some-path', {})
  .then(() => console.log('put promise resolved'))
  .catch(() => console.log('put promise rejected'));
