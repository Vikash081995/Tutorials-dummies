import React, { useState } from "react";

const Hello = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div data-testid="hello">Hello</div>;
      <button onClick={() => setShow(true)}>Show</button>
      {show && <p>World </p>}
    </div>
  );
};

export default Hello;
