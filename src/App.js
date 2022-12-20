import './App.css';
import React from 'react';
import boxes from './boxes';

function App() {

    const [box, setBox] = React.useState(boxes)

    const boxArray = boxes;
    const boxElements = boxArray.map(box =>
        (<div className="box" key={box.id}></div>
            ))

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="boxes">
                {boxElements}
            </div>
        </main>
    );
}

export default App;
