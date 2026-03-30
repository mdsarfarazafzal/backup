const pr = new Promise((resolve, reject) => {
    resolve("Hey");
})
async function hey1() {
    console.log("hey1 execution context");
    const res = await pr;
    console.log("returned to call stack");
    console.log(res);
}

function hey2() {
    console.log("hey2 execution context");
    pr.then((res) => {
        console.log(res);
    });
    console.log("did not wait");
}
//hey1();
// hey1 execution context
// global execution context
// returned to call stack
// Hey
hey2();
// hey2 execution context
// did not wait
// global execution context
// Hey
console.log("Global execution context");