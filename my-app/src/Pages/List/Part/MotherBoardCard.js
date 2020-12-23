import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class MotherBoardCard extends Component {
    render() {
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/mother-board">Motherboard</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/mother-board">
                        <i className="fas fa-plus" />
                        Choose a Motherboard
                    </Link>
                </td>
                <td className="base"></td>
                <td className="promo"></td>
                <td className="snipping"></td>
                <td className="tax"></td>
                <td className="price"></td>
                <td className="where"></td>
            </tr>

        )
    }
}

export default MotherBoardCard;