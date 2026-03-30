const getUser = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await res.json();
    console.log(result);
    console.log('not blocked');
}
// const getUser = () => {
//   const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
//     res.then((result) => {
//         return result.json();

//     }).then((data) => {
//         console.log(data);
//   })
//   console.log("not blocked");
// };
getUser();