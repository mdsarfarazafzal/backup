import type { Components, JSX } from "../types/components";

interface MyGreeting extends Components.MyGreeting, HTMLElement {}
export const MyGreeting: {
    prototype: MyGreeting;
    new (): MyGreeting;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
