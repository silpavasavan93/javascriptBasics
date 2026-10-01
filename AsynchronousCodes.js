// add 2 numbres are return the result 

//async await
 async function add (a,b){
    return await Promise.resolve(a+b)
}

//console.log(add (5,6))
add(5,6).then(result=>{console.log(result)})