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

## Installation

Clone the repository, inside the cloned repository run:

`npm install`

Afterwards, run `npm start` to compile the application and run a web server. Go to
`http://localhost:8080/` to see the example in action.

## Switching to the ReactUI

If you want to see what this example looks like with the ReactUI, simply replace these two lines in `src/application.js`

```javascript
import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
```

with the following

```javascript
import PhotoEditorUI from 'photoeditorsdk/react-ui'
import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'
```

You can find more details about our available UIs [here](https://docs.photoeditorsdk.com/guides/html5/v4/introduction/ui).

## Listening for Events

The `ReactComponent` of both the [DesktopUI](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.ReactComponent.html) and [ReactUI](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.ReactUI.ReactComponent.html) provides access to the respective UI instance ([DesktopUI](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.html) or [ReactUI](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.ReactUI.html)) through its `ui` property. 

You can use this UI instance in order to register callbacks for events.

```javascript
import PhotoEditorUI from 'photoeditorsdk/desktop-ui'

class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.pesdk = React.createRef()
  }

  componentDidMount () {
    var ui = this.pesdk.current.ui
    ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {
      console.log("Ready!")
    })

    editor.ui.on(PhotoEditorUI.Events.EXPORT, img => {
      console.log("Exported!")
    })
  }

  render () {
    return (<PhotoEditorUI.ReactComponent
      ref={this.pesdk}
      license='...'
      ...
    />)
  }
}
```

Please refer to our [guides](https://docs.photoeditorsdk.com/guides/html5/v4/concepts/events) for examples and a list of all available events.

## Accessing the SDK functions

Using the `ui` property of the `ReactComponent` mentioned above, you now have access to the UI, Editor and SDK and all of their functions:

```javascript
import PhotoEditorUI from 'photoeditorsdk/desktop-ui'

class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.pesdk = React.createRef()
  }

  componentDidMount () {
    var ui = this.pesdk.current.ui
    ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {
      var editor = ui.getEditor()
      var sdk = editor.getSDK()
    })
  }

  render () {
    return (<PhotoEditorUI.ReactComponent
      ref={this.pesdk}
      license='...'
      ...
    />)
  }
}
```





## License

Please see [LICENSE](https://github.com/imgly/pesdk-html5-react/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors

Made 2013-2020 by img.ly

## Support or Contact

Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo) on our website.
