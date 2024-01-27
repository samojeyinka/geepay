import React from 'react';
import Header from '../components/Header';
import BarChart from '../components/BarChartBox';
import { Link } from 'react-router-dom';
import { user,view } from '../assets/assets';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Header />

      <main className='db-main-flex'>
        <div className='db-main-left'>
          <div className='sales-trend'>
            <h2>Sales Trends</h2>
            <div className='chart-box'>
              <BarChart/>
            </div>
          </div>
          <div className='last-orders'>
            <div className='lo-flex'>
            <h2>Last Orders</h2>
            <Link to='/see-all'>See All</Link>
            </div>
            {/* Table */}

          <table>
            <thead>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </thead>
            <br/>
            <tbody>
              <tr>
              <td><img src={user}/>
                <span>Marcus Bergson</span>
                </td>
                <td>Nov 15,2023</td>
                <td><b>$80,000</b></td>
                <td>Paid</td>
                <td className='view-btn'>
                  <img src={view}/>
                  <Link>View</Link>
                </td>
              </tr>
              <tr>
                <td><img src={user}/>
                <span>Marcus Bergson</span>
                </td>
                
                <td>Nov 15,2023</td>
                <td><b>$80,000</b></td>
                <td>Paid</td>
                <td className='view-btn'>
                  <img src={view}/>
                  <Link>View</Link>
                </td>
              </tr>
              <tr>
              <td><img src={user}/>
                <span>Marcus Bergson</span>
                </td>
                <td>Nov 15,2023</td>
                <td><b>$80,000</b></td>
                <td>Paid</td>
                <td className='view-btn'>
                  <img src={view}/>
                  <Link>View</Link>
                </td>
              </tr>
              <tr>
              <td><img src={user}/>
                <span>Marcus Bergson</span>
                </td>
                <td>Nov 15,2023</td>
                <td><b>$80,000</b></td>
                <td>Paid</td>
                <td className='view-btn'>
                  <img src={view}/>
                  <Link>View</Link>
                </td>
              </tr>
            </tbody>
          </table>


            </div>
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