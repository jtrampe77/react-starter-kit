import React from 'react';

import styles from './button.module.css'

function Button({children, variant, ...props}) {
       // styles obj
       // obj.prop = value
       // obj['prop']
       console.log(variant)
    return (
        <button className={styles[variant]}>
            {children}
        </button>
     );
}

export default Button;

 

 