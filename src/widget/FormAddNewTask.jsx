import React, { useState, useCallback } from 'react';

function FormAddNewTask({ onAddTask }) {
    const [value, setValue] = useState('');

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onAddTask(value);
        setValue('');
    }, [value, onAddTask]);

    return (
        <form onSubmit={handleSubmit} className='row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2'>
            <div className='col-12'>
                <div data-mdb-input-init className='form-outline'>
                    <input type='text' id='form1' className='form-control' value={value} onChange={handleChange} />
                    <label className='form-label' htmlFor='form1'>Enter a task here</label>
                </div>
            </div>
            <div className='col-12'>
                <button type='submit' data-mdb-button-init data-mdb-ripple-init className='btn btn-primary'>Add</button>
            </div>
        </form>
    );
}

export default FormAddNewTask;


