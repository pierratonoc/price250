import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const data = [
    1,2,3
]

function HomePage() {
    const [countries, setCountries] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/regional_level').then((res)=>{
            setCountries(res.data)
            console.log(res.data);
        })

        axios.get('http://localhost:5000/product').then((res1) => {
            setProducts(res1.data)
            console.log(res1.data);
        })

  },[]);

    return (
        <React.Fragment>
        <section className="new_arrival section_padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="arrival_tittle">
                            <h2>Highest available products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row align-items-center">
                    {products.map(product =>(

                        <div key={product.product_id} className="col-sm-4">
                            <div className="new_arrival_iner filter-container">
                                <div className="single_arrivel_item p_star">
                                    <div className="text">
                                        <Link to="/"><h3>{product.name}</h3></Link>
                                        <p>Country</p>
                                        <h5>RWF ###</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="new_arrival ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="arrival_tittle">
                                <h2>countries with the highest produce</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                        {countries.map(country => (

                            <div key={countries.regional_level_id} className="col-lg-3">
                            <div className="new_arrival_iner filter-container">
                                <div className="single_arrivel_item ">
                                    <div className="text">
                                        <Link to="/"><h3>{country.level_name}</h3></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </React.Fragment>

    );
}

export default HomePage;