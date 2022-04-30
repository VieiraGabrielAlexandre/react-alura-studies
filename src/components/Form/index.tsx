import React from 'react';
import Botao from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
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
                <div className={style.inputContainer}>
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