import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import { buildQueries } from '@testing-library/react';

const BoxList = () => {
    const INITIAL_FORM = { color: "", width: "", height: "" };
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [boxes, setBoxes] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { color, height, width } = formData;
        setBoxes([...boxes, { id: uuid(), color, height, width }]);
        setFormData(INITIAL_FORM);
    }

    const onButtonClick = (e) => {
        const { id } = e.target;
        setBoxes(boxes.filter(box => box.id !== id));
    }

    return (
        <div className='BoxList'>
            <NewBoxForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            {boxes.map(({ id, color, width, height }) => <Box key={id} id={id} color={color} width={width} height={height} onButtonClick={onButtonClick} />)}
        </div>
    )
}

export default BoxList;