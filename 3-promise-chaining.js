Promise.resolve(10)
  .then((num) => {
    console.log('Step 1 :', num);
    return num + 5;
  })
  .then((num) => {
    console.log('Step 2 :', num);
    return num * 2;
  })
  .then((num) => {
    console.log('Step 3 :', num);
  })
  .catch((err) => {
    console.log('Caught:', err.message);
  });
