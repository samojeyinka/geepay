import React from 'react';
import { Link } from 'react-router-dom';
import {logo, user,user1,user2,user3,user4,user5, view } from '../assets/assets';

const OrdersTable = () => {

    const orderDetails = [
        {
            id: 1,
            profileImage:user1,
            fullName: 'Marcus Bergson',
            date: 'Nov 15,2023',
            amount: '80,000',
            status: 'Paid',
            className:'paid-clr'
        },

        {
            id: 2,
            profileImage:user2,
            fullName: 'Jaydon Vaccaro',
            date: 'Nov 15,2023',
            amount: '150,000',
            status: 'Refund',
            className:'refund-clr'
        },

        {
            id: 3,
            profileImage:user3,
            fullName: 'Corey Schleifer',
            date: 'Nov 14,2023',
            amount: '87,000',
            status: 'Paid',
            className:'paid-clr'
        },
        {
            id: 4,
            profileImage:user4,
            fullName: 'Cooper Press',
            date: 'Nov 14,2023',
            amount: '100,000',
            status: 'Refund',
            className:'refund-clr'
        },
        {
            id: 5,
            profileImage:user5,
            fullName: 'Philip Lubin',
            date: 'Nov 13,2023',
            amount: '78,000',
            status: 'Paid',
            className:'paid-clr'
        },
    ]


    //Handle invoice

    const showInvoice = () => {
        const invoice = document.getElementById("invoiceBox");
        invoice.style.display = "inherit";
        const blur = document.getElementById("blur");
        blur.style.display = "inherit";


    }


    const hideInvoice = () => {
        const invoice = document.getElementById("invoiceBox");
        invoice.style.display = "none";
        const blur = document.getElementById("blur");
        blur.style.display = "none";

    }

    return (
        <>
         <div className="blur" id="blur"></div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Invoice</th>
                </thead>
                <br />
                <tbody>
                    {orderDetails.map(details => (
                        <tr>
                            <td><img src={details.profileImage} />
                                <span>{details.fullName}</span>
                            </td>
                            <td>{details.date}</td>
                            <td><b>${details.amount}</b></td>
                            <td className={details.className}>{details.status}</td>
                            <td className='view-btn' onClick={showInvoice}>
                                <img src={view} />
                                <Link>View</Link>
                            </td>
                        </tr>
                    ))};

                </tbody>
            </table>

            {/* Invoice */}

            <div id='invoiceBox'>
                    <div className='ib-flex'>
                        <div className='ib-top'>
                            <div className='ib-top-left'>
                                <img src={logo}/>
                                <h3>Invoice</h3>
                            </div>
                            <div className='ib-top-right'>
    
                                <h4>Geepay HQ</h4>
                                <p>500-30 Wellington St.</p>
                                <p>Box 129, Commerce Court</p>
                                <p>Toronto, Ontario M5L 1E2</p>
                            </div>
                        </div>
                        <div className='ib-middle'>
                            <div className='customer-info'>
                                <div className='ci-left'>
                                    <b>Bill To:</b>
                                    <p>Marcus Bergson</p>
                                    <p>Payment ID</p>
                                    <p>Address</p>
                                    <p>City</p>
                                    <p>Country</p>
                                    <p>Postal Code</p>

                                </div>
                                <div className='ci-right'>
                                <b>INVOICE#</b>
                                    <p>000045</p>
                                    <p>35E489</p>
                                    <p>Oke-ogbo</p>
                                    <p>Osogbo</p>
                                    <p>Nigeria</p>
                                    <p>52315</p>
                                </div>
                            </div>
                        </div>
                        <div className='ib-details'>
                            <table>
                                <thead>
                                    <th>ITEMS</th>
                                    <th>DESCRIPTION</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>TAX</th>
                                    <th>AMOUNT</th>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Item1</td>
                                    <td>Description</td>
                                    <td>1</td>
                                    <td>$5</td>
                                    <td>0%</td>
                                    <td>$5.00</td>
                                    </tr>
                                    <tr>
                                    <td>Item1</td>
                                    <td>Description</td>
                                    <td>6</td>
                                    <td>$8.5</td>
                                    <td>0%</td>
                                    <td>$51.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='ib-total'>
                            <div className='ib-note'>
                                <p>Thank you for choosing our product! Your payment
                                     invoice is attached.</p>
                            </div>
                            <div className='ib-total-box'>
                                <span>TOTAL</span>
                                <h3>$56.00</h3>
                                </div> 
                            
                        </div>
                        <div className='action'>
                            <button className='ib-a-btn cancel' onClick={hideInvoice}>Cancel</button>
                            <button className='ib-a-btn delete'>Delete</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default OrdersTable