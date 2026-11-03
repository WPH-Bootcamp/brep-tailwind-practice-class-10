new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Selesaii');
  }, 1000);
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log('Akan kapanpun'));

const isOpen = false;
const pemesananOnlen = new Promise((resolve, reject) => {
  if (isOpen) {
    resolve('Bisa belanja');
  } else {
    reject('Toko tutup');
  }
});

pemesananOnlen
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => {
    console.log('Clean up...');
  });
