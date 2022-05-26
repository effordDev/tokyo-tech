import { LightningElement } from 'lwc';

export default class App extends LightningElement {
     
     currentView = 'home'

     navigate(event) {
		console.log('app: navigate running ', event.detail.view);

		const { view } = event.detail;

		if (view !== this.currentView) {
			this.currentView = view;
		}
	}
}
