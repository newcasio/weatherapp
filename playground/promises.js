var asyncAdd=(a,b) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      if (typeof a==='number' && typeof b==='number'){
        resolve(a+b);
      }else{
        reject('Parameters must be numbers.');
      }
    }, 1500)
  });
};

asyncAdd(5,null).then((res)=>{
  console.log("Results: ", res);
  return asyncAdd(2, res);
}).then((res2)=>{
  console.log('Result 2 is ', res2);
}).catch((errorMessage) =>{
  console.log(errorMessage);
});
