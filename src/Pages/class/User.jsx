export default class User {
    constructor(name, email, password, phoneNumber) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.phoneNumber = phoneNumber;
    }
  
    getName() {
      return this.name;
    }

    getEmail(){
        return this.email;
    }
  }  