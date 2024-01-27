import React from 'react';
import { boxTick, positiveSL, negativeSL, trendUp, trendDwn, rotateIcon } from '../assets/assets';

const OrderStats = () => {
    return (
        <>
            <div className='order-details'>
                {/* ---------- */}
                <div className='stat-box'>
                    <div className='stat-box-top'>
                        <div className='box-tick-box'>
                            <img src={boxTick} />
                        </div>
                        <div className='box-tick-box'>
                            <img src={positiveSL} />
                        </div>
                    </div>
                    <div className='stat-box-middle'>
                        <h4>Total Order</h4>
                        <h3>350</h3>
                    </div>
                    <div className='stat-box-btm'>
                        <button className='positive-btn'>
                            <img src={trendUp} />
                            <span>23.5%</span>
                        </button>

                        <span>vs. previous month</span>
                    </div>
                </div>
                {/* ---------- */}
                <div className='stat-box'>
                    <div className='stat-box-top'>
                        <div className='box-tick-box'>
                            <img src={rotateIcon} />
                        </div>
                        <div className='box-tick-box'>
                            <img src={negativeSL} />
                        </div>
                    </div>
                    <div className='stat-box-middle'>
                        <h4>Total Refund</h4>
                        <h3>270</h3>
                    </div>
                    <div className='stat-box-btm'>
                        <button className='negative-btn'>
                            <img src={trendDwn} />
                            <span>23.5%</span>
                        </button>

                        <span>vs. previous month</span>
                    </div>
                </div>
                {/* ---------- */}
                <div className='stat-box'>
                    <div className='stat-box-top'>
                        <div className='box-tick-box'>
                            <img src={boxTick} />
                        </div>
                        <div className='box-tick-box'>
                            <img src={positiveSL} />
                        </div>
                    </div>
                    <div className='stat-box-middle'>
                        <h4>Total Order</h4>
                        <h3>350</h3>
                    </div>
                    <div className='stat-box-btm'>
                        <button>
                            <img src={trendUp} />
                            <span>23.5%</span>
                        </button>

                        <span>vs. previous month</span>
                    </div>
                </div>
                {/* ---------- */}
                <div className='stat-box'>
                    <div className='stat-box-top'>
                        <div className='box-tick-box'>
                            <img src={boxTick} />
                        </div>
                        <div className='box-tick-box'>
                            <img src={positiveSL} />
                        </div>
                    </div>
                    <div className='stat-box-middle'>
                        <h4>Total Order</h4>
                        <h3>350</h3>
                    </div>
                    <div className='stat-box-btm'>
                        <button>
                            <img src={trendUp} />
                            <span>23.5%</span>
                        </button>

                        <span>vs. previous month</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OrderStats