import './App.css';
import React from 'react';
import boxes from './boxes';
import Box from "./Box";

function App(props) {
    const [box, setBox] = React.useState(boxes)

    const styles = {
        //backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }


    function toggle(id) {
        setBox(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }

    const boxArray = boxes;
    const boxElements = boxArray.map(box =>
        (<Box key={box.id}
              id={box.id}
              on={box.on}
              toggle={toggle}
            />
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
