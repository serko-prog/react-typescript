import React from "react";
import Markdown from "react-markdown";
import {loadFile} from "../infrastructure/loadFile";
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const content: string = loadFile("./IE11.md");;
    const history = useHistory();

    return (<>
        <h1>About</h1>
        <p>The site was created to study the <code>React + TypeScript</code> technology stack.</p>
        <h2>Warning!</h2>
        <div className="card-panel lighten-2 z-depth-4">
            <Markdown source={content}></Markdown>
        </div>
        <button className="btn" onClick={() => history.push("/")}>Go to to-do list</button>
    </>
    )

}