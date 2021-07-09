import React, { useState, useReducer } from 'react';
import ContextExample from './ContextExample';

const lens = '100';
const lensUpdate = '292929';
// context
export const ThemeContext = React.createContext({
    lens: lens,
    lensUpdate: lensUpdate
});
type NameProps = {
    name: string;
    val?: {};
    age?: number;
};

// type Reducer<State, Action> = (state: State, action: Action) => State;

// state type
type State = {
    value: number;
};
// action
type Action = {
    type: 'Increase' | 'Decrease' | 'Reset';
    payload?: number;
};
const initialCounterState: State = {
    value: 0
};

const Main = ({ name, age }: NameProps) => {
    const countReducer = (state: State, { type }: Action): State => {
        switch (type) {
            case 'Increase':
                return { ...state, value: state.value + 1 };
            case 'Decrease':
                return {
                    ...state,
                    value: state.value - 1
                };
            case 'Reset':
                return {
                    ...state,
                    value: 0
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(countReducer, initialCounterState);
    const [temp, setTemp] = useState(String);
    // for form submission use React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(temp);
    };

    return (
        <div>
            <ThemeContext.Provider
                value={{ lens: lens, lensUpdate: lensUpdate }}
            >
                <h1>{state.value}</h1>
                <button onClick={() => dispatch({ type: 'Decrease' })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: 'Reset' })}>8</button>
                <button onClick={() => dispatch({ type: 'Increase' })}>
                    +
                </button>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={temp}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const targetValue = e.target;

                            setTemp(targetValue.value);
                        }}
                    />
                    <button type="submit">Submit</button>
                </form>
                <ContextExample />
            </ThemeContext.Provider>
        </div>
    );
};
export default Main;
