import React from 'react';
import { Link } from 'react-router-dom';
import { user,user1,user2,user3,user4,user5, view } from '../assets/assets';

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
                    {orderDetails.map(details => (
                        <tr>
                            <td><img src={details.profileImage} />
                                <span>{details.fullName}</span>
                            </td>
                            <td>{details.date}</td>
                            <td><b>${details.amount}</b></td>
                            <td className={details.className}>{details.status}</td>
                            <td className='view-btn'>
                                <img src={view} />
                                <Link>View</Link>
                            </td>
                        </tr>
                    ))};

                </tbody>
            </table>
        </>
    )
}

export default OrdersTable