import './About.css';
import { useState } from 'react';

const AboutMe = () => {

    const [name, setName] = useState("");
    

    const Show = () => {
        let myName = "Eduardo";
        setName(myName);
    }
    return (
        <div>
            <h1>About Me</h1>
            <p>Hi my name is:</p>
            <p>{name}</p>

            <button onClick={Show}>Show</button>
        </div>
    );
};

export default AboutMe;
