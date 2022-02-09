import React from 'react';
import styles from './styles.module.scss';

function Button(props) {


   
    return ( 
        <button className={styles[props.variant]}>{props.children}</button>
     );
}

export default Button;