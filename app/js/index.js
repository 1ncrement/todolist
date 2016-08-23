import '../scss/index.scss'
import angular from 'angular'

let app = () => {
	let dir = {
		restrict: 'E',
		template: require('./app.html'),
		controller: AppCtrl,
		controllerAs: 'app'
	};

	return dir;
};

class AppCtrl {
	constructor(){
		let AppCtrlScope = this;
		AppCtrlScope.url = 'fuck-off.com';
	}
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
	.directive('app', app)
	.controller('AppCtrl', AppCtrl);

export default MODULE_NAME;

console.log('I\'m loaded!');