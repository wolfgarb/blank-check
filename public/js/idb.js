let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function (event) {
  // save reference to db
  const db = event.target.result;
  // create object store
  db.createObjectStore('new_trans', { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    console.log('nav online');
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};
