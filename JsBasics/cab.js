/** @format */

// call apply bind

let user = { name: "Ganesh" };

function meetup(greeting) {
  console.log(`${greeting} ${this.name}`);
}

meetup("Hello"); // hello undefined.
meetup.call(user, "Hello"); // Hello Ganesh

// call method accepts argument list
// apply method accepts array of arguments

meetup.apply(user, ["Hello"]);

//unline call and apply, bind doesn't execute the function immediately

let meet = meetup.bind(user);
meet("Hello");
meet("He");
meet("Ram");
meet("Laxman");
