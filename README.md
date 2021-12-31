# soetz-dot-codes

This is the repo for my personal website. Thanks for stopping by :)

Before we start, you should know that there is no `LICENSE.md` file or anything similar because this is not free software. Of course you have the right to be inspired (I’d be honored, actually) and I won’t be angry if you copy individual components or techniques, but **please do not clone this entire project and just replace the content with your info**. That’s **not** OK.

## Requirements

- NodeJS 16+ (I don’t see any reason it wouldn’t work with eg. v14 or 12 but I’ve never tried it)
- A reachable MongoDB 5+ instance (same)
- A web browser, but if you’re reading this I suspect you already have one
- That’s it

## Installing

```bash
$ git clone git@gitlab.com:soetz/soetz-dot-codes.git
$ cd soetz-dot-codes
$ npm install
$ cp environment.client.example.ts environment.client.ts && cp environment.server.example.js environment.server.js
```

Now you can replace the content of `environment.client.ts` and `environment.server.js` with what’s relevant for your setup.

The backend is closed-source so you can connect to the production as a fallback. You should have a few errors in the console but nothing that prevents the site from doing its job, and you’ll be able to query podcast episodes and links.

To do that, set `environment.client.ts` to:

```js
export const environment = {
  server: {
    domain: "server.soetz.codes",
    port: "443",
    secure: true,
  },
};
```

That’s it. You can now use `npm run dev` to benefit from hot module replacement, or `npm run preview` to build and bundle the whole thing and serve it.
