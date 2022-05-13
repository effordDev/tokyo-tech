import { api, LightningElement } from 'lwc';

export default class ProfileAvi extends LightningElement {
     @api image = ''
     @api backupImage = ''
     @api allowFlip = false
     @api size = 'large'

     get style() {
          return `img ${this.size} ${this.flip ? 'flipper' : ''}`
     }

     get flip() {
          return this.allowFlip == 'true'
     }
     // get hasBackup() {
     //      return !!this.backupImage.length
     // }
}
