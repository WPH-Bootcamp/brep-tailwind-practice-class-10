function delay(ms, val, isSuccess = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(val);
      } else {
        reject(new Error(`Proses ${val} gagal`));
      }
    }, ms);
  });
}

// 1. Promise.all()
Promise.all([
  delay(100, 'A', true),
  delay(50, 'B', true),
  delay(150, 'C', true),
])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

// 2. Promise.race()
Promise.race([
  delay(100, 'A', true),
  delay(50, 'B', true),
  delay(150, 'C', true),
])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

// 3. Promise.allSettled()
Promise.allSettled([
  delay(100, 'A', true),
  delay(50, 'B', false),
  delay(150, 'C', true),
]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Berhasil :', result.value);
    } else {
      console.log('Gagal :', result.reason.message);
    }
  });
});
