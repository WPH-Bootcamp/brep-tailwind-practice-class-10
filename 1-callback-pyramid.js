console.log('Start');

setTimeout(() => {
  console.log('Async');
}, 1000);

console.log('End');

function sayHello(name, callback) {
  console.log('Hello', name);
  callback();
}

sayHello('Budi', function () {
  console.log('Done');
});

setTimeout(function () {
  console.log('Langkah 1');

  setTimeout(function () {
    console.log('Langkah 2');

    setTimeout(function () {
      console.log('Langkah 3');
      console.log('Selesai');
    }, 200);
  }, 200);
}, 200);

login()
.then(getProfile)
.then(getOrders)
.then(getPayments)
.then(render);