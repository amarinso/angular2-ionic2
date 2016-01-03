import {Page, Modal} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/prehome/prehome.html'
})
export class PreHome {
  constructor(public modal:Modal) {
  }
  show() {
    this.modal.open(PreHome);
  }
  close() {
    //this.modal.close(PreHome);
  }
}
