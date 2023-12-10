import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const {robots} = props;
    const cardComponent = robots.map((userDeatils, i) => {
        return (
            <Card 
                key={i} 
                id={userDeatils.id} 
                name={userDeatils.name} 
                email={userDeatils.email}
                set={userDeatils.set}
            />
        )
    });
    return (
        <div>
           {cardComponent}
        </div>
    )
}

export default CardList;