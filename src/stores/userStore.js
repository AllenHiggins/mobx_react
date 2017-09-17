import { observable, action, computed } from 'mobx';

class userStore {
  @observable firstName = '';
  @observable lastName = 'Moo';

  @computed get fullName(){
    const fullname = this.firstName + " " + this.lastName;
    return fullname;
  }

}


export default new userStore();
