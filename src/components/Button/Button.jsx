import s from './Button.module.css';


const Button = () => {
    return ( 
        <div className={s.wrapper}>
            <button className={s.button} type="button">
                Load more
            </button>
        </div>
     );
}
 
export default Button;