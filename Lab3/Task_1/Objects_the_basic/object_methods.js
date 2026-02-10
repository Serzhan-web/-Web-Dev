function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman
  }
}
let family = marry({
  name: "John"
}, {
  name: "Ann"
});


let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("Hello!");
};
user.sayHi(); // Hello!


let user = {
  // ...
};
// first, declare
function sayHi() {
  alert("Hello!");
}
// then add as a method
user.sayHi = sayHi;
user.sayHi(); // Hello!


// these objects do the same
user = {
  sayHi: function() {
    alert("Hello");
  }
};
// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};


let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};
user.sayHi(); // John


let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert(user.name); // "user" instead of "this"
  }
};


let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert( user.name ); // leads to an error
  }
};
let admin = user;
user = null; // overwrite to make things obvious
admin.sayHi(); // TypeError: Cannot read property 'name' of null


let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert( this.name );
}
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // Error: Cannot read property 'name' of undefined