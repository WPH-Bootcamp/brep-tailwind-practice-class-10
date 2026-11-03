new Promise((resolve, reject) => {
  reject(new Error('Gagal'));
}).catch((error) => console.error(error.message));

Promise.resolve(10)
  .then(() => {
    throw new Error('Boom');
  })
  .then((data) => {
    console.log('Step 2, Data: ', data);
  })
  .catch((error) => console.error(error.message));

Promise.reject(new Error('Error awal'))
  .catch((err) => {
    console.error('Handle dulu : ', err.message);
    throw new Error('Error Baru');
  })
  .catch((err) => {
    console.error('Final :', err.message);
  });
