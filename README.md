<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK integration example for ReactJS

This repository contains an example for integrating PhotoEditor SDK into a ReactJS application.
PhotoEditor SDK provides a ReactUI which exposes a React Component that can be easily used inside
any ReactJS application.

## Note

[PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo)
is a product of img.ly GmbH. In order to use PhotoEditor SDK inside one of your products, please
[request a license](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo).


## Let's get started!

We will be using use [create-react-app](https://create-react-app.dev/docs/getting-started/) for simplicity.

##### Create a project

- Start a new project with `create-react-app`

```bash

npx create-react-app my-app
cd my-app
npm run start

```
Note: (npx comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))

- Then open `http://localhost:3000/` to see yout app.


##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:
  1. React >= 16.3
  1. React DOM >= 16.3
  1. Styled Components >= 4.4

React and React DOM are already insalled using Create React App.

- Run `npm install --save styled-components@^4.4` to include Styled Components in the project.

##### Installing PhotoEditor SDK

- Run `npm install --save photoeditorsdk@latest`.

You will be left with following structure in your `node_modules/photoeditorsdk/`

```bash
├── assets
│   ├── adjustment
│   ├── colorpicker
│   ├── controls
│   ├── filter
│   ├── focus
│   ├── font
│   ├── frame
│   ├── overlay
│   ├── sticker
│   ├── textdesign
│   └── transform
├── esm
└── cjs
```

The package contains three folders that you need to integrate to your project.
1. `assets`: It contains all assets required for the PhotoEditor, this includes for example assets for *frames*, *stickers* and the *ui*.
1. `cjs`: It contains PhotoEditor SDK UI bundled as commonjs modules, will be loaded for older browser versions.
1. `esm`: It contains PhotoEditor SDK UI bundled as ECMAScript modules, will be loaded for supported modern browser versions.

- Copy the `assets` from `node_modules/photoeditorsdk` to `public`.

##### Creating an Editor component

```js
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: '../example.jpg', // Image url or Image path relative to assets folder
      license: ''
    })
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc)
    })
  }

  render() {
    return (<div id="editor" style={{ width: '100vw', height: '100vh' }} />)
  }
}

```

## License

Please see [LICENSE](https://github.com/imgly/pesdk-react-demo/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors

Made 2013-2020 by img.ly

## Support or Contact

Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo) on our website.


## Photo credits

Hot Air Balloon photo (example.jpg) by [ellehem on Unsplash](https://unsplash.com/photos/M0HwJ4j58-w). [License](https://unsplash.com/license).