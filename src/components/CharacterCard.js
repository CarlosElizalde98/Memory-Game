import React from "react";

const CharacterCard = ({handleClick, id, name, image, type}) => {
    return (
        <div className="card" onClick={(e) => handleClick(e.target.id)}>
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
            <div className="img-info">
                <p>{name}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default CharacterCard;