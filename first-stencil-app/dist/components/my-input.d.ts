import type { Components, JSX } from "../types/components";

interface MyInput extends Components.MyInput, HTMLElement {}
export const MyInput: {
    prototype: MyInput;
    new (): MyInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
