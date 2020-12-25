import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'

import { Link } from 'react-router-dom';
import MotherboardService from '../../../../Client/MotherboardService'
import img from './motherboard-demo.jpeg'
import formatMoney from '../../../../Components/Page/CurrencyFormat';

class MotherBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motherboards: []
        }
    }

    componentDidMount() {
        MotherboardService.getMotherboards().then((response) => {
            this.setState({
                motherboards: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A MotherBoard</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table class="table">
                                <thead>
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="socket">Socket / CPU</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="size">Size</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.motherboards.map(
                                            motherboard => 
                                            <tr className="product-card" key={motherboard.id}>
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/motherboard/${motherboard.id}`}>
                                                        <img src={(motherboard.priceList)?.length <= 0 ? img : motherboard.priceList[0]?.img} alt={motherboard.id}/>
                                                        <span>{motherboard.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{motherboard.clockSpeed}</td>
                                                <td className="card-text">{motherboard.chipset}</td>
                                                <td className="card-text">{motherboard.sizeOfRam}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate" ></i></td>
                                                <td className="card-text">{motherboard.priceList?.length <= 0 ? "-" : formatMoney(motherboard.priceList[0].price) + "VND"}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>MotherboardService.setMotherboard2List(motherboard)}>Add</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <PageNav/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MotherBoard;