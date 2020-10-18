import React, {Component} from 'react';
import './filter.scss';

export default class Filter extends Component {
   

   

    handleInputChange = ({target}) => {
        const {name, value} = target;
        this.props.handleFilterChange(name, value)
    }

    handleCheckboxChange = ({target}) => {
        const {name} = target;
        this.props.handleGenderFilterChange(name)
    }

    render() {
        return (
            <div class='filter'>
                <h2>Фильтры</h2>
                <div className='field'>
                    <label >Имя</label>
                    <input
                            className="input"
                            type="text"
                            value={this.props.name}
                            name="nameFilter"
                            placeholder="Введите имя"
                            onChange={this.handleInputChange} />
                </div>
                
                <div className='field'>
                    <label >Фамилия</label>
                    <input
                            className="input"
                            type="text" 
                            value={this.props.lastName}
                            name="lastNameFilter"
                            placeholder="Введите фамилию"
                            onChange={this.handleInputChange} />
                </div>
                
                <div className='field'>
                    <label >Возраст </label>
                    <input
                        className="input"
                        type="text" 
                        value={this.props.age}
                        name="ageFilter"
                        placeholder="Введите возраст"
                        onChange={this.handleInputChange} />
                </div>
                
                <div className='field'>
                    <span>Пол</span>
                    
                    <input
                            className="checkbox"
                            type="checkbox" 
                            value={this.props.male}
                            name="m"
                            placeholder="Введите возраст"
                            onChange={this.handleCheckboxChange} />
                    <label> М</label>

                    
                    <input
                            className="checkbox"
                            type="checkbox" 
                            value={this.props.female}
                            name="f"
                            placeholder="Введите возраст"
                            onChange={this.handleCheckboxChange} />
                    <label>Ж</label>

                </div> 
            </div>          
        )
    }
};