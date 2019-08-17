import Vue from 'vue'
import VModal from 'vue-js-modal'
import VueFlatPickr from 'vue-flatpickr-component';

Vue.use(VModal)
Vue.use(VueFlatPickr)

// Register all global components
const requireComponent = require.context('~/components/global', false, /[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	Vue.component(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'), componentConfig.default)
})

export default ({ store }) => {

}
