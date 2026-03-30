const obj = { id: 1, data: { name: "Task 1", status: "Done" } };
const { id, data: { name } } = obj;
console.log(name);
