// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem

  return (
    <li className="list-item-container">
      <div className="list-item-logo-container">
        <img className="avtor-logo" src={currencyLogo} alt={currencyName} />
        <p className="avatar-heading">{currencyName}</p>
      </div>
      <div className="list-item-logo-container">
        <p className="crypto-item-heading">{usdValue}</p>
        <p className="crypto-item-heading">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
