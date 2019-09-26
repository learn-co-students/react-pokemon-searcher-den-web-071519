import React from 'react'

const PokemonFilter = ({filterByName}) => {


    const handleSubmit = (event) => {
        event.preventDefault()
        filterByName()
    }

    return (
        <input onClick={handleSubmit} type="submit" value="Sort By Name"/>
    )
}

export default PokemonFilter