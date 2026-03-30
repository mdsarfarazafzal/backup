const user = (name, email) => {
  const originalPassword = "12345";
  return {
    name: name,
    email: email,
    validatePasssword: function (password) {
      return password === originalPassword ? true : false;
    },
  };
};
const user1 = user("alex", "alex@user.com");
console.log(user1.validatePasssword("12345"));

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
