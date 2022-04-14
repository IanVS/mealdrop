In order to get `@storybook/bench` to capture the output from webpack4, I added a listener on the `stderr` of the spawned `yarn start-storybook` process, like so:

```js
child.stderr.on('data', (d) => {
  console.log(d.toString())
})
```

I did this in a local copy of the repo, which was `yarn link`ed into the mealdrop app.
