import { useState } from "react";
import Nav from "./component/Nav";
import Hero from "./component/Hero";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} />
      <Hero />
    </div>
  );
};
export default App;
