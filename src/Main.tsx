import React, { useState } from 'react';
type NameProps = {
    name: string;
    val?: {};
    age?: number;
};

const Main = ({ name, age }: NameProps) => {
    const [temp, setTemp] = useState(String);
    // for form submission use React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(temp);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={temp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const targetValue = e.target;
                    setTemp(targetValue.value);
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default Main;
