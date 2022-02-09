import { Component } from 'react';
import s from './Searchbar.module.css';


export default class Searchbar extends Component {
    state = {
        photoName: '', 

    }
    handleNameChange = (e) => {
        this.setState({ photoName: e.currentTarget.value.toLowerCase() });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.photoName.trim() === '') {
            alert("Please enter the symbols")
            return
        }
        this.props.onSubmit(this.state.photoName);
        this.setState({ photoName: '' });

    }
    render() {
        return ( 
            <header onSubmit={this.handleSubmit} className={s.searchbar}>
                <form className={s.form}>
                    <button type="submit" className={s.button}>
                    <span className={s.button_label}>Search</span>
                    </button>
    
                    <input
                    className={s.input}
                    type="text"
                    value={this.state.photoName}  
                    onChange={this.handleNameChange}    
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}
 
