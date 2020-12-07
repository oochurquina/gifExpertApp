
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['ONE PUCH','SAMURAI X','DRAGON BALL'];
    const [categories, setCategories] = useState(['one punch']);
    
    // const handleAdd =()=>{
    //     setcategories([...categories,'Agregado recientemente']);
    // }
    
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>   
            <ol>
                {
                    categories.map(category => (<GifGrid 
                        key = {category}
                        category={category} />))
                }
            </ol>
            {/* {categories}        */}
        </div>
    )
}

export default GifExpertApp
