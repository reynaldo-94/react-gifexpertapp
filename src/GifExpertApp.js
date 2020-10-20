import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     setCategories(['Hunter Hunter', ...categories]);

    //     // setCategories( cats => [ ...cats, 'HunterXHunter' ] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Le mando la referencia a setCategories */}
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid 
                            key={ category}
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
}