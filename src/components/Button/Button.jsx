import s from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ load}) => {
    return  ( 
        <div className={s.wrapper}>
            <button className={s.button} type="button" onClick={() => load()}>
                Load more
            </button> 
        </div>
     )
}
 
export default Button;

Button.propTypes = {
  load: PropTypes.func,
};