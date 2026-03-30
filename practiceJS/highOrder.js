const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "David", age: 35 },
];
// filter users by age < 30
const youngUsers = users.filter((x) => x.age < 30).map((x)=>x.name);
console.log(youngUsers); 
const newUserList = users.map((user) => {
    user["salary"] = Math.round((user.id * Math.random() * 10000));
    return user;
});
console.log(newUserList);
const totalSalary = newUserList.reduce((acc, curr) => {
    acc = acc + curr.salary; 
    return acc;
}, 0);
console.log("Total Salary: ", totalSalary);