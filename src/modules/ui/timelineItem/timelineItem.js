import { api, LightningElement } from 'lwc';

export default class Card extends LightningElement {
     @api item = {}

     get caption() {
          return this.item?.caption
     }
     get year() {
          return this.item?.year
     }
     get month() {
          return this.item?.month
     }
     get monthFormatted() {
          let date = new Date()
          date.setMonth(this.month - 1)
          return date.toLocaleString('default', { month: 'long' })
     }
}
