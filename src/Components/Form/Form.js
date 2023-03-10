import './Form.css'
import { useState } from 'react';
import { generateRandomId } from '../../utilities';

export function Form(props){

    const [formData, setFormData] = useState('')

    function handleChange(e){
        const value = e.target.value
        setFormData(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        let newTask;
        if (formData.length > 0){
            newTask = {
                id: generateRandomId(),
                text: formData
            }
        } else {
            return
        }

        props.addTask(newTask)
        
        setFormData('')
    }

    return(
        <form 
            className="add-task-form"
            onSubmit={handleSubmit}    
        >
            <input
                className="add-task-form--input"
                type="text"
                placeholder="write your task here"
                onChange={handleChange}
                value={formData}
            />
            <button
                className="add-task-form--button"
            >
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>
    )
}