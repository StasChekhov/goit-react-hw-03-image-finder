import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css'


const Loader = () => {
    return ( 
        <div className={s.loader}>
            <BallTriangle color="#3f51b5" height={80} width={80} />
        </div>
     );
}
 
export default Loader;