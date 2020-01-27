import React from 'react';
import classes from './FormsControl.module.css'
import { withFormsRedirect } from '../../../hoc/withFormsControl';

// export const Textarea = ({ input, meta, ...props }) => {
//     return (
//         <div className={classes.formControl + ' ' + (meta.touched && meta.error && classes.error)}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             <div>
//                 {meta.touched && meta.error && <span>{meta.error}</span>}
//             </div>
//         </div>
//     )
// }

// export const Input = ({ input, meta, ...props }) => {
//     return (
//         <div className={classes.formControl + ' ' + (meta.touched && meta.error && classes.error)}>
//             <input {...input} {...props} />
//             {meta.touched && meta.error && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const Textarea = withFormsRedirect('textarea')
export const Input = withFormsRedirect('input');