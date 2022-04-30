import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component {
    render() {
        return (
        <button className={style.inputContainer}>
            This is an example button
        </button>
        );
    }
}

export default Button