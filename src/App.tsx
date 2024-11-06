import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slice/counterSlice";
import { RootState } from "./redux/store";
import { Button, Stack, TextField, Typography } from "@mui/material";
import useInput from "./hooks/useInput";
import { useEffect } from "react";
import { fetchImages } from "./redux/slice/apiSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { output, handleInput } = useInput({ value: "" });

  const { entities, loading } = useSelector((state: RootState) => state.images);

  useEffect(() => {
    dispatch(fetchImages()); // Dispatching the async thunk
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading images...</div>;
  }

  if (loading === "failed") {
    return <div>Error fetching images</div>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => dispatch(increment())}
        >
          Increment by 1 = {count}
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Increment by 1 = {count}
        </Button>
        <Stack gap={2} mt={2} width="20%">
          <Typography fontWeight="bold">Increment By Value</Typography>
          <TextField
            size="small"
            name="value"
            type="number"
            value={output.value}
            onChange={(e) => handleInput(e)}
          />
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(+output.value))}
          >
            Add {count} in total
          </Button>
        </Stack>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
