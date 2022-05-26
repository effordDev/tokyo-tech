import { LightningElement, api } from 'lwc';
import { fetchTimelineDate } from '../../../../data/timeline.js';

export default class Timeline extends LightningElement {

	timelineItems = []

	connectedCallback() {
		this.timelineItems = fetchTimelineDate()
		console.log('timeline data2 ', this.timelineItems)
	}

}
