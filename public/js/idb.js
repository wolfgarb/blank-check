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
    // functions to write...
    // uploadDeposit
    // uploadWithdrawal
    console.log('nav online');
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// function to submit with no connection
function saveRecord(record) {
  // open new transaction with DB with read/write permissions
  const transaction = db.transaction(['new_trans'], 'readwrite');

  // access the object store for 'new_trans'
  const transObjectStore = transaction.objectStore('new_trans');

  // add record with the 'add' method
  transObjectStore.add(record);
}
