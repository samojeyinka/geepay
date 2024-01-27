import React from 'react';
import { Link } from 'react-router-dom';
import { user, view } from '../assets/assets';

const OrdersTable = () => {
    return (
        <>
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
                    <tr>
                        <td><img src={user} />
                            <span>Marcus Bergson</span>
                        </td>
                        <td>Nov 15,2023</td>
                        <td><b>$80,000</b></td>
                        <td>Paid</td>
                        <td className='view-btn'>
                            <img src={view} />
                            <Link>View</Link>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} />
                            <span>Marcus Bergson</span>
                        </td>

                        <td>Nov 15,2023</td>
                        <td><b>$80,000</b></td>
                        <td>Paid</td>
                        <td className='view-btn'>
                            <img src={view} />
                            <Link>View</Link>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} />
                            <span>Marcus Bergson</span>
                        </td>
                        <td>Nov 15,2023</td>
                        <td><b>$80,000</b></td>
                        <td>Paid</td>
                        <td className='view-btn'>
                            <img src={view} />
                            <Link>View</Link>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} />
                            <span>Marcus Bergson</span>
                        </td>
                        <td>Nov 15,2023</td>
                        <td><b>$80,000</b></td>
                        <td>Paid</td>
                        <td className='view-btn'>
                            <img src={view} />
                            <Link>View</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OrdersTable