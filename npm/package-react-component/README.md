# my-react-component-npm-package

## IMPORTANT

THIS IS A TEMPLATE. When making a new React component npm package, copy this template and edit it.

Replace "@kpander/my-react-component-npm-package" with the name for your npm package, in this file and in `package.json`.

This is the name that is used during `npm install [package-name]`.

This repo exists as a learning project for building versionable, standalone, packaged React components.

## Usage

To use this in another project, first:

```
$ npm install --save @kpander/my-react-component-npm-package
```

In your javascript code:

```
import { Component1 } from "@kpander/my-react-component-npm-package";

return (
  <>
    <Component1>something here</Component1>
  </>
);
```


## Development

### Source code

Source code for each component should be in `src/lib/components`.

Each component that should be available in the npm package should be referenced in `src/lib/index.js`.

You can export multiple components, e.g.:

**src/lib/index.js**

```js
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

export { Component1, Component2, Component3 };
```

### Compiling and building

To run the app in development mode, for testing updates:

```
$ npm start
```

To build the `dist/` folder, prior to creating an npm package:

```
$ npm run build
```

To create the npm package:

```
$ npm pack
```

To publish the npm package:

```
$ npm publish
```


## Tests

@todo

```
$ npm test
```


## Maintainer

  - Kendall Anderson (kpander@invisiblethreads.com)

