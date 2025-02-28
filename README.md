# Storyblok-js-client inconsistent promise resolution/rejection

To run this demo, run `npm install` and then `npm run start`.

You will see output like this (the order might differ):

```
get promise rejected
post promise resolved
getAll promise rejected
delete promise resolved
put promise resolved
```

The script uses [Mock Service Worker](https://mswjs.io/docs/getting-started) to mimic network errors for the requests. You can see that the `get` and `getAll` methods of `StoryblokClient` correctly reject the promise in case of a network error. But the methods `post`, `delete`, and `put` do not.
