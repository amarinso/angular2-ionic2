import {Page, NavController, Modal} from 'ionic-framework/ionic';
import {PreHome} from '../prehome/prehome';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private nav: NavController, private modal:Modal) {
  }

  openPreHome() {
    this.modal.open(PreHome);

  }
}
