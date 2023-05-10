import './NewBoxForm.css';

const NewBoxForm = ({ formData, handleChange, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='color'>Color:</label>
                <input
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='width'>Width:</label>
                <input
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='height'>Height:</label>
                <input
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Create New Box!</button>
            </div>
        </form>
    )
}

export default NewBoxForm;