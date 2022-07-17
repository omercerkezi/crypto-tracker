import React from 'react';
import './Coin.css';

function Coin({ name, image, symbol, price, volume, priceChange, marketcap, rank}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <p className='coin-rank'>{rank}</p>
            <div className='coin-coin'>
                <img className='coin-img' src={image} alt='crypto' />
                <h1 className='coin-name'>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <p className='coin-price'>${price}</p>
            <p className='coin-volume'>${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}
            <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Coin