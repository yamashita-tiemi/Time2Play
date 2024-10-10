import * as React from "react";

function MyButton({ title }: { title: string }) {
    return (
        <button>{title}</button>
    );
}
  
export default function Navbar() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" />
            <ul>
                
            </ul>
        </div>
    );
}