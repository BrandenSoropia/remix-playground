# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## TODOs:

- Create new post. Requirements:
  - New route
  - Action
  - Figure out how to use localstorage to save and extend it to fake json
- Test components
- Try custom styling components using OG CSS

## Development

Run the Vite dev server:

```shellscript
yarn

yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
