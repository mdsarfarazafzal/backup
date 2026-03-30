import { r as registerInstance, a as createEvent, h } from './index-BUzUtKrh.js';

const MyInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.emit = createEvent(this, "emit", 7);
    }
    msg = '';
    emit;
    sendToParent() {
        this.emit.emit('Hi Parent');
    }
    textToParent(msg) {
        this.emit.emit(msg);
    }
    render() {
        return (h("div", { key: 'b9ae6e3efb8b257cd5ce5f4ef3c5b741262f4579', class: "flex flex-col gap-3" }, h("button", { key: 'e88b9f6783858f6ecf2fbe6bd2c8edfb1c56b32e', onClick: () => this.sendToParent(), class: "p-2 bg-slate-800 text-neutral-50 rounded-lg cursor-pointer hover:scale-105" }, "Send to Parent"), h("p", { key: 'fd0c6df1aaaab7e634c3ade18d193a7f9a32d141', class: "font-semibold text-lg" }, "From Greeting: ", this.msg), h("input", { key: '93d7eebaed374855043ffbd04bb983986badd85f', onInput: e => this.textToParent(e.target.value), placeholder: "Text to Parent...", class: "border-gray-400 outline-gray-800 rounded-md border-2 p-2 text-sm", type: "text" })));
    }
};

export { MyInput as my_input };
//# sourceMappingURL=my-input.entry.esm.js.map

//# sourceMappingURL=my-input.entry.js.map