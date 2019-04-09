import React from 'react'
import ReactDOM from 'react-dom'

// import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
// import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
import PhotoEditorUI from 'photoeditorsdk/react-ui'
import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'

class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.pesdk = React.createRef()
  }

  componentDidMount () {
    var ui = this.pesdk.current.ui
    // You can register event callbacks and access
    // all SDK function through the ui property
    ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {
      var editor = ui.getEditor()
      var sdk = editor.getSDK()
    })
  }

  render () {
    return (<PhotoEditorUI.ReactComponent
      // license='// e.g. '{"owner":"Imgly Inc.","version":"2.1", ...}'
      assets={{
        baseUrl: 'node_modules/photoeditorsdk/assets'
      }}
      editor={{image: this.props.image }}
      style={{
        width: '100vw',
        height: '100vh'
      }} 
      ref={this.pesdk}
    />)
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')
  const image = new Image()
  image.src = '/example.jpg'
  ReactDOM.render(<ApplicationComponent image={image} />, container)
}
