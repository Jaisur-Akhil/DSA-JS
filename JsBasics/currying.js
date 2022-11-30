/** @format */
// regular version
const add = (a, b, c) => {
  return a + b + c;
};

console.log(add(1, 2, 3));

//curried version.
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(addCurry(1)(2)(3));
