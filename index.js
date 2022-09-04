class User {
  constructor(firstName, lastName, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = email;
  }
 
  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }
  sendEmail() {
    console.log(`Email sent to ${email}`);
  }
  delete() {
    console.log('User removed');
  }
}

const user = new User(createUser(
'John',
'Doe',
'john@doe.com',
);

const user2 = new User(
'Jane',
'Doe',
'jane@doe.com',
);

console.log(user.delete === user2.delete);
