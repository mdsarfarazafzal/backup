import { Component, Event, EventEmitter, Prop, State } from '@stencil/core/internal';
import { h } from '@stencil/core';

@Component({
  tag: 'my-input',
})
export class MyInput {
  @Prop() msg: string = '';
  @Event() emit: EventEmitter<string>;
  sendToParent() {
    this.emit.emit('Hi Parent');
  }
  textToParent(msg: string) {
    this.emit.emit(msg);
  }
  render() {
    return (
      <div class="flex flex-col gap-3">
        <button onClick={() => this.sendToParent()} class="p-2 bg-slate-800 text-neutral-50 rounded-lg cursor-pointer hover:scale-105">
          Send to Parent
        </button>
        <p class="font-semibold text-lg">From Greeting: {this.msg}</p>
        <input
          onInput={e => this.textToParent((e.target as HTMLInputElement).value)}
          placeholder="Text to Parent..."
          class="border-gray-400 outline-gray-800 rounded-md border-2 p-2 text-sm"
          type="text"
        />
      </div>
    );
  }
}
