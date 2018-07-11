var getUser =(id, callback) =>{
  var user = {
    id:id,
    name: 'Vikram'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) =>{console.log(userObject)}     );

//same as prev, but running of callback is delayed by 3secs.
//setTimeout (function, delay);  setTimeout( ()=>{} ,3000);
