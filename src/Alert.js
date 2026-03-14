import {useEffect} from 'react';

import style from './Alert.module.css';


function Alert({msg, type, removeAlert, list}){

    useEffect(()=>{
        const timeOutID = setTimeout(()=>{
            removeAlert();
        }, 3000);

        return ()=>clearTimeout(timeOutID);
    }, [list, removeAlert]);

    return (
        <h2 className={`${style.heading} ${style[`alert${type}`]}`}>{msg}</h2>
    );
}
export default Alert;