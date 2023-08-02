import { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
import TestVue from './TestComponent/test.vue'

const allcomponents: { [name: string]: Component } = { SvgIcon, TestVue }

export default {
  install(app: App) {
    Object.keys(allcomponents).forEach((key) => {
      app.component(key, allcomponents[key])
    })
  },
}
