import React from 'react'
import ReactDOM from 'react-dom'

import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
// import PhotoEditorUI from 'photoeditorsdk/react-ui'

class ApplicationComponent extends React.Component {
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
      }} />)
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')
  const image = new Image()
  image.src = '/example.jpg'
  ReactDOM.render(<ApplicationComponent image={image} />, container)

}
