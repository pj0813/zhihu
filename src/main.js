import Vue from 'vue'
import './css/comm.css'
import './css/iconfont.css'
import App from './App'


import router from './router/router'
	new Vue({
		router,
		render:h=>h(App)
	}).$mount('#app')
	