
 addEventListener('message', ({ data }) => {
    const response = 'worker response to'+data;
    console.log(response);
    fxn(data)
  });

const fxn = function(data){
    console.log('in fxn')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        postMessage(json);
    });
  }