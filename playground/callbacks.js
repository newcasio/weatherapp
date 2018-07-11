var getUser =(id, callback) =>{
  var user = {
    id:id,
    name: 'Vikram'
  }
  callback(user);
};

getUser(31, (userObject) =>{console.log(userObject)}     );


//substitute id parameter into user so now id = 31, so now user is id =31, name=Vikram in part 1.
//now substitute (userObject) function from part 2 into where callback is called in part 1.
//the (user) parameter from part 1 is now the parameter for the userObject function, so console.log(user).
