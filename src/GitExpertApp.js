import React, {Fragment, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(["Goku"])

    //const handleAdd = () => {
    //    /* setcategories( [...categories, "PrincessXmortal"]) */
    //    setcategories( cats => [ ...cats, "PrincessXmortal"]);
    //}
    



    return ( 

        <Fragment>
            <h2>GitExpertApp</h2>

            <AddCategory setCategories= { setCategories } />

            <hr />

            <ol>
                {
                    categories.map( category => (
                         <GifGrid
                            key={ category }
                            category={category} 

                         />
                    ))
                }

            </ol>
        </Fragment>

     );
}
 
export default GitExpertApp;