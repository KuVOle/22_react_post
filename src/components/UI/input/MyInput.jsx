import React from "react";
import classes from './MyInput.modules.css';

const MyIput = React.forwardRef((props, ref) => {

    return (<div><input ref={ref} className={classes.myInput} {...props} /></div>);
});

export default MyIput;