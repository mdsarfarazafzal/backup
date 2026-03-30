class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
const userone = new User("testuser", "testing");
const userProxy = new Proxy(userone, {
    get(target, prop) {
        return `Here is your ${Reflect.get(target,prop)}`;
    },
    set(target, prop, value) {
        if (prop === "password") {
            throw new Error("can not change password")
        } else {
            return Reflect.set(target, prop, value);
        }
    }
})
userProxy.username = "usertested"
// userProxy.password = "tested"
console.log(userProxy.username)
console.log(userProxy.password);