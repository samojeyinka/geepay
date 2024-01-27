import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header />

      <main className='db-main-flex'>
        <div className='db-main-left'>
          <div className='sales-trend'><h1>Charts</h1></div>
          <div className='last-orders'><h1>Last Orders</h1></div>
        </div>

        <div className='db-main-right'>
          <div className='order-details'><h1>Order details</h1></div>
          <div className='top-platform'><h1>Top platforms</h1></div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard