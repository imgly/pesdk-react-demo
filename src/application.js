import React from 'react'
import ReactDOM from 'react-dom'
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorReactUI'

class ApplicationComponent extends React.Component {
  render () {
    const { ReactComponent } = PhotoEditorReactUI
    return (<ReactComponent
      apiKey='foobarbaz'
      assets={{
        baseUrl: '/node_modules/photoeditorsdk/assets'
      }}
      style={{
        width: 800,
        height: 600
      }} />)
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')
  ReactDOM.render(<ApplicationComponent />, container)
}
