// variable to hold connection
let db;
// establish a connection to IDB called 'budget tracker', V 1.0
const request = indexedDB.open('budget_tracker', 1);

// this event occurs if the DB version changes
request.onupgradeneeded = function (event) {
  // save reference to db
  const db = event.target.result;
  // create object store
  db.createObjectStore('new_trans', { autoIncrement: true });
};

// success
request.onsuccess = function (event) {
  // on success, save reference to global variable 'db'
  db = event.target.result;

  // conditional to check if online.
  if (navigator.onLine) {
    // if online, carry out uploadTrans()
    uploadTrans();
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

function uploadTrans() {
  // open transaction on db
  const transaction = db.transaction(['new_trans'], 'readwrite');
  // access store
  const store = transaction.objectStore('new_trans');
  // get all records from store and set to variable
  const getTrans = store.getAll();

  // on success...
  getTrans.onsuccess = function () {
    // if data exists, send to api server
    if (getTrans.result.length > 0) {
      // POST /api/transactions endpoint
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getTrans.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((serverResponse) => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          // open another transaction for pending
          const transaction = db.transaction(['new_trans'], 'readwrite');
          // access new_trans obj store
          const store = transaction.transObjectStore('new_trans');
          // CLEAR from store, bc it has been successfully moved to the db
          store.clear();

          window.alert('Transaction(s) have been saved and submitted');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

// listener for app coming back online
window.addEventListener('online', uploadTrans);
