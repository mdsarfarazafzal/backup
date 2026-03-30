import { r as registerInstance, h } from './index-BUzUtKrh.js';

const MyGreeting = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    greeting = '';
    childMsg = '';
    recieveMsg(data) {
        this.childMsg = data;
    }
    componentWillLoad() {
        console.log('Component is about to load');
    }
    render() {
        return (h("div", { key: '8be03abee722d3a2c664b680e0b0c6fc37019cae', class: "min-h-screen gap-3 flex flex-col justify-center items-center" }, h("p", { key: '74bf1449158bc9638beb1d24cde3443d066ac572', class: "font-bold text-2xl" }, "From index.html: ", this.greeting), this.childMsg && h("p", { key: '3b4fcbb1db55932b98f52071b91382b383bfc48c', class: "font-bold text-2xl" }, "From Input: ", this.childMsg), h("my-input", { key: '11b550c260a9f8119dfea9658c4522c5c1ed2115', msg: "Hey Input", onEmit: event => {
                this.recieveMsg(event.detail);
            } })));
    }
};

export { MyGreeting as my_greeting };
//# sourceMappingURL=my-greeting.entry.esm.js.map

//# sourceMappingURL=my-greeting.entry.js.map