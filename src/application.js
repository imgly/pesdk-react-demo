import React from 'react'
import ReactDOM from 'react-dom'

import PhotoEditorDesktopUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.DesktopUI.js'
// import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js'

class ApplicationComponent extends React.Component {
  render () {
    // const { ReactComponent } = PhotoEditorDesktopUI
    const { ReactComponent } = PhotoEditorReactUI
    return (<ReactComponent
      license='YOUR LICENCE'
      assets={{
        baseUrl: '/node_modules/photoeditorsdk/assets'
      }}
      style={{
        width: 1024,
        height: 576
      }} />)
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')
  ReactDOM.render(<ApplicationComponent />, container)
}
