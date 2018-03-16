import React from 'react'
import ReactDOM from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM

import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
// import PhotoEditorUI from 'photoeditorsdk/react-ui'

class ApplicationComponent extends React.Component {
  render () {
    const { ReactComponent } = PhotoEditorUI

    return (<ReactComponent
      license='PUT YOUR LICENSE KEY HERE' // e.h. '{"owner":"Imgly Inc.","version":"2.1", ...}'
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
