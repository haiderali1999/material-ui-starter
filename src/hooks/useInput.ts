/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";

// Define the type of the state object
type InputState = Record<string, any>;

const useInput = (initialState: InputState = {}): { 
  output: InputState; 
  setInput: React.Dispatch<React.SetStateAction<InputState>>; 
  handleInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
} => {
  const [output, setInput] = useState<InputState>(initialState);

  // Optionally update state on initial load if initialState is changed
  useEffect(() => {
    setInput(initialState);
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { output, setInput, handleInput };
};

export default useInput;
