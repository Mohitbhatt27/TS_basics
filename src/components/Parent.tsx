import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <Child
        text="Hello World "
        list={["a", "b", "c"]}
        handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />

      {text}

      <p>Something something</p>
      <h2>Hello</h2>
    </>
  );
}

export default Parent;
