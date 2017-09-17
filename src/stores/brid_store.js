import { observable, action, computed } from 'mobx';

class BridStore {
  @observable brids = []

  @action addBrid = (brid) => {
    this.brids.push(brid);
  }

  @computed get bridCount(){
    return this.brids.length;
  }
}

export default new BridStore();
