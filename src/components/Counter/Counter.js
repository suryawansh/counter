import { Button, TextField , Typography} from "@mui/material";
import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="root">
      <Typography variant="h4"  >Counter App</ Typography>

      <h2 className={count > 0 ? "positive" : "negative"}>{count}</h2>
      <div className="firstApp">
        <Button
          variant="contained"
          color="error"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>

        <TextField
          id="outlined-basic"
          value={count}
          onChange={(p) => setCount(p.target.value)}
          variant="outlined"
        />

        <Button
          variant="contained"
          color="success"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
