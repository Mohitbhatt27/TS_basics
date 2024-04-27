import { PropsWithChildren } from "react";
import { useState } from "react";
type TitleProps = {
  text: string;
  list: string[];
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Child({
  text,
  list,
  handleOnChange,
  children,
}: PropsWithChildren<TitleProps>) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {text}
      {list && list.length > 0 && list[0]}
      <input type="text" onChange={handleOnChange} />
      {children}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input type="number" onChange={(e) => setCount(e.target.valueAsNumber)} />
    </div>
  );
}

export default Child;
