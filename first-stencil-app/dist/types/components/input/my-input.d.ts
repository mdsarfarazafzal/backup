import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyInput {
    msg: string;
    emit: EventEmitter<string>;
    sendToParent(): void;
    textToParent(msg: string): void;
    render(): any;
}
