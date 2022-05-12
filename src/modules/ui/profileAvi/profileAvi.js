import { api, LightningElement } from 'lwc';

export default class ProfileAvi extends LightningElement {
     @api image = ''
     @api backupImage = ''
     @api size = 'large'

     get style() {
          return `img ${this.size}`
     }
     // get hasBackup() {
     //      return !!this.backupImage.length
     // }
}
