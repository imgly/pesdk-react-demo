import React from 'react'
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
    // @ts-ignore Make the value global for the Cypress E2E test
    window.initEditor = this.initEditor.bind(this);
  }

  async initEditor() {
    if (this.editor) {
      this.editor.dispose()
    }
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: '../example.jpg', // Image url or Image path relative to assets folder
      license: '',
      /** A pre start script is used to copy the assets from node modules to public directory */
      assetBaseUrl: 'assets/'
    })
    this.editor = editor
    // Make the value global for the Cypress E2E test
    window.editor = editor
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc)
    })
  }

  render() {
    return (<div id="editor" style={{ width: '100vw', height: '100vh' }} />)
  }
}
