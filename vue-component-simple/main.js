import Vue from 'vue';
import App from './component/app.vue';

new Vue({
	el: '#app',
	render: h => {
		return h(App)
	}
});