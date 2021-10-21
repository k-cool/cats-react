// promist study

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeeded');
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise //
  .then(console.log)
  .catch(console.log);
