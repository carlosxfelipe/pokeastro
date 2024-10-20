import { createSignal, type Component, type JSXElement } from "solid-js";

interface Props {
  initialValue?: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue ?? 10);

  const buttonClass = "bg-blue-500 p-2 mr-2 rounded w-40";

  return (
    <>
      {/* <h1>Contador</h1> */}
      {props.children}
      <h3>Valor: {counter()} </h3>
      <button class={buttonClass} onClick={() => setCounter((prev) => ++prev)}>
        +1
      </button>
      <button
        class={buttonClass}
        onClick={() => setCounter((prev) => (prev > 0 ? --prev : prev))}
      >
        -1
      </button>
    </>
  );
};
