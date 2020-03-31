import React from 'react'
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: '../example.jpg', // Image url or Image path relative to assets folder
      license: '',
      /** A pre start script is used to copy the assets from node modules to public directory */
      assetBaseUrl: 'assets/'
    })
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc)
    })
  }

  render() {
    return (<div role="Editor" id="editor" style={{ width: '100vw', height: '100vh' }} />)
  }
}
