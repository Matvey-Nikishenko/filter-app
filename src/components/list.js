import React from 'react';
import './list.scss';

const List = ({filteredData}) => {
    let id = 100;
    const elements = filteredData.map((person) => {
        return (
            <li className="list-item" key={id++}>
                <span>{person.name} {person.lastname}</span>
                <span>Возраст: {person.age}</span>
                <span>Пол: {person.sex === 'm' ? 'мужской' : 'женский'}</span>
            </li>
        )
    })
    
    
    return (
        <ul className="list">
            {elements}
        </ul>
    )
};

export default List;