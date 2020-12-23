import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import Service from '../../../../Client/Service'
import { Link, withRouter } from 'react-router-dom';

class CPU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpus: []
        }
    }

    componentDidMount() {
        Service.getCPUs().then((response) => {
            this.setState({
                cpus: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    setCPU2List(cpu) {
        localStorage.setItem('cpu', JSON.stringify(cpu));
        this.props.history.push({pathname: "/list"});
    }

    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A CPU</h1>
                </div>

                <div className="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row ">
                        <div className="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table className="table">
                                <thead className="product-card-head">
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" className="font-weight-bold" id="name">Name</th>
                                        <th scope="col" className="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" className="font-weight-bold" id="core">Core</th>
                                        <th scope="col" className="font-weight-bold" id="thread">Thread</th>
                                        <th scope="col" className="font-weight-bold" id="socket">Socket</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cpus.map(
                                            cpu =>
                                            <tr className="product-card" key={cpu.id}>
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/cpu/${cpu.id}`}>
                                                        <img src={cpu.img} alt="CPU"/>
                                                        <span>{cpu.fullname}</span>
                                                    </Link>
                                                </td>

                                                <td className="card-text">{cpu.chipset}</td>
                                                <td className="card-text">{cpu.cores}</td>
                                                <td className="card-text">{cpu.threads}</td>
                                                <td className="card-text">{cpu.socket}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate" ></i></td>
                                                <td className="card-text">-</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.setCPU2List(cpu)}>Add</button>
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

export default withRouter(CPU);
