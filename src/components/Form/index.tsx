import React from 'react';
import Botao from '../Button';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor='task'>
                        Add new study
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="tarefa"
                        placeholder='What do you want estudy'
                        required 
                    />
                </div>
                <div>
                    <label htmlFor='time'>
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao />
            </form>
        );
    }
}

export default Form;