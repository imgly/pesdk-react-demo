import React from 'react'
import { deepmergeAll, UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

export class PhotoEditorSDK extends React.Component {
  config = {
    container: '#editor',
    image: '../example.jpg', // Image url or Image path relative to assets folder
    license: '',
    /** A pre start script is used to copy the assets from node modules to public directory */
    assetBaseUrl: 'assets/'
  }

  componentDidMount() {
    this.initEditor()

    // Make the value global for the Cypress end-to-end (E2E) test.
    // This is not necessary for the PhotoEditorSDK to work and can be removed safely.
    window.initPesdk = this.initEditor.bind(this);
  }

  async initEditor(config = {}) {
    if (this.editor) {
      this.editor.dispose()
    }
    const editor = await PhotoEditorSDKUI.init(
      deepmergeAll([this.config, config])
    )
    this.editor = editor

    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc)
    })

    // Make the value global for the Cypress end-to-end (E2E) test.
    // This is not necessary for the PhotoEditorSDK to work and can be removed safely.
    window.pesdkEditor = editor
  }

  render() {
    return (<div id="editor" style={{ width: '100vw', height: '100vh' }} />)
  }
}
