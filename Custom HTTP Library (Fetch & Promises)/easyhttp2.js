
class EasyHTTP {
  // Make an HTTP GET REQUEST
  get(url) {
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP POST REQUEST
  post(url,data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT REQUEST
  put(url,data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE REQUEST
  delete(url) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err));
    });
  }

}