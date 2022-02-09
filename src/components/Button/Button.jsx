import s from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({isActive, load, input}) => {
    return isActive ? ( 
        <div className={s.wrapper}>
            <button className={s.button} type="button" onClick={() => load(input)}>
                Load more
            </button> 
        </div>
     ): null ;
}
 
export default Button;

Button.propTypes = {
  load: PropTypes.func,
};