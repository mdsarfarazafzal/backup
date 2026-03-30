class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get username() {
    return `Here is your ${this._username}`;
  }
  set username(value) {
    this._username = value;
  }
}
const testuser = new User("testuser", "testuser@user.com", "abc123");
console.log(testuser.username);
/*

const account = {
  set balance(val) {
    this.balance = val; // ERROR: This calls the setter again!
  }
};
account.balance = 100;

You try to set account.balance = 100.

This triggers the set balance(val) function.

Inside that function, you say this.balance = val.

JavaScript sees you are setting balance, so it calls the setter again.

This creates an infinite loop until the browser crashes with a Stack Overflow.

In the constructor, when we say this.username = username, it actually invokes the setter method. If the setter uses
 _username, it stores the data safely. Then, when we access it later, the getter should return that _username to avoid 
 calling itself infinitely.

*/
