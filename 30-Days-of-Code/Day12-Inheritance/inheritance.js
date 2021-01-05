class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      'Name: ' +
        this.lastName +
        ', ' +
        this.firstName +
        '\nID: ' +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let avg =
      this.scores.reduce((acc, cur) => parseInt(acc) + parseInt(cur)) /
      this.scores.length;
    if (avg < 40) {
      return 'T';
    } else if (avg < 55) {
      return 'D';
    } else if (avg < 70) {
      return 'P';
    } else if (avg < 80) {
      return 'A';
    } else if (avg < 90) {
      return 'E';
    } else {
      return 'O';
    }
  }
}

let s = new Student('Heraldo', 'Memelli', '8135627', ['100', '80']);
s.printPerson();
s.calculate();
console.log(`Grade: + ${s.calculate()}`);
