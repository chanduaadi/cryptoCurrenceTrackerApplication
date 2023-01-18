// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props
  return (
    <div className="cryptoList-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="crypto-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="crypto-list-container">
        <li className="list-item-heading-container">
          <div className="logo-heading-container">
            <p className="coin-heading">Coin</p>
            <p className="coin-heading">Type</p>
          </div>
          <div className="logo-heading-container">
            <p className="currency-heading">USD</p>
            <p className="currency-heading">EURO</p>
          </div>
        </li>
        {cryptoList.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
