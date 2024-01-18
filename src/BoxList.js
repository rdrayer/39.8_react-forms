import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    };

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxes.map(box => (
                <Box 
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={removeBox}
                />
            ))}
        </div>
        
    )
}

export default BoxList;