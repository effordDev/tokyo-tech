import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
    
     nav(event) {

          const { name } = event.target.dataset

          console.log('nav event: ', name);

          this.dispatchEvent(
			new CustomEvent('navigate', {
				composed: true,
				bubbles: true,
				detail: {
					view: name
				}
			})
		); 
     }

}
