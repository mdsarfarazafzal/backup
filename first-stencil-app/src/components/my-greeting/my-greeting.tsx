import { Component, Prop, State } from '@stencil/core/internal';
import { h } from '@stencil/core';

@Component({
  tag: 'my-greeting',
})
export class MyGreeting {
  @Prop() greeting: string = '';
  @State() childMsg: string = '';
  recieveMsg(data: string) {
    this.childMsg = data;
  }
  componentWillLoad() {
    console.log('Component is about to load');
  }
  render() {
    return (
      <div class="min-h-screen gap-3 flex flex-col justify-center items-center">
        <p class="font-bold text-2xl">From index.html: {this.greeting}</p>
        {this.childMsg && <p class="font-bold text-2xl">From Input: {this.childMsg}</p>}
        <my-input
          msg="Hey Input"
          onEmit={event => {
            this.recieveMsg(event.detail);
          }}
        ></my-input>
      </div>
    );
  }
}
