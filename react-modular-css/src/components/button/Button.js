import React from 'react';
import styles from './button.module.css'




function Button({title, type, ...props}) {
    // props is an object
    // type is a string

    return (
        <div>
            <button className={styles[type]}>{title}</button>
        </div>
    
    )
}

export default Button;