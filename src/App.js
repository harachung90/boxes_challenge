import './App.css';
import React from 'react';
import boxes from './boxes';
import Box from "./Box";

function App(props) {
    const [box, setBox] = React.useState(boxes)

    const styles = {
        //backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const boxArray = boxes;
    const boxElements = boxArray.map(box =>
        (<Box key={box.id} on={box.on}/>
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
