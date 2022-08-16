import { App } from 'vue'

import FButton from './button/FButton'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button/JSXButton'

export {
  FButton,
  SFCButton,
  JSXButton,
}

export default {
  install(app: App): void {
    app.component(FButton.name, FButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}
