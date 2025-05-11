import 'react';

declare class MathfieldElement extends HTMLElement {
  value: string;
  executeCommand(command: string): void;
}

declare namespace JSX {
  interface IntrinsicElements {
    'math-field': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        ref?: React.Ref<MathfieldElement>;
        value?: string;
      },
      HTMLElement
    >;
  }
}