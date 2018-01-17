import React from 'react'
import ReactDOM from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM

import PhotoEditorDesktopUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.DesktopUI.js'
// import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js'

class ApplicationComponent extends React.Component {
  render () {
    const { ReactComponent } = PhotoEditorDesktopUI
    // const { ReactComponent } = PhotoEditorReactUI
    return (<ReactComponent
      license='YOUR LICENSE'
      assets={{
        baseUrl: '/node_modules/photoeditorsdk/assets'
      }}
      editor={{image: this.props.image }}
      style={{
        width: 1024,
        height: 576
      }} />)
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')

  const image = new Image()

  image.onload = () => {
    ReactDOM.render(<ApplicationComponent image={image} />, container)
  }
  image.src = '/example.jpg'
}
