/** @format */

// callback hell leads to unmanagable code. also it is not easy for any user to handle multiple callback at the same time

/* promise - provide better error handling than callbacks and events.

Benefits of Promises 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling*/

var promiseCode = new Promise(function (resolve, reject) {
  const x = 5;
  const y = 10;
  const xx = 5;
  //   if (x == y) {
  //     resolve();
  //   }

  if (x == y) {
    // reject();
  } else if (x === x) {
    // resolve();
  } else {
    // reject();
  }
});

promiseCode
  .then(function () {
    console.log(`Success, You are best`);
  })
  .catch(function () {
    console.log(`Something not right`);
  });

//   -----------------

// Async then
const someData = async () => {
  //promise - Mordern
  var data = "Hello Js is giving 10L package";
  return data;
};

// someData().then((data) => console.log(data)); //async with .then

//Async Await
const someData0 = async () => {
  var data = await "Hello World";
  console.log(data);
};

// someData0();

function promiseHigh() {
  let P1 = new Promise((resolve, reject) => resolve("Hello"));
  let P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You will get offerletter tom");
    }, 2000);
  });
  let multiPromise = Promise.all([P1, P2]);
  return multiPromise;
}
async function display() {
  let data = await promiseHigh();
  console.log(data);
}

display();
