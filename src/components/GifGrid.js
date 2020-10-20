import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // loading: Es una propiedad del state de mi hooks
    const { data:images, loading } = useFetchGifs(category);    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            // ... Operador spred
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
