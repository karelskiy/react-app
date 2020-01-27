import React from 'react'
import classes from './../components/common/formsControl/FormsControl.module.css'


export const withFormsRedirect = Components => ({ input, meta, ...props }) => {
    return (
        <div className={classes.formControl + ' ' + (meta.touched && meta.error && classes.error)}>
            <Components {...input} {...props} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );

}