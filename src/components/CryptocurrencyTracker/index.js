// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoList: [],
    isLoding: true,
  }

  componentDidMount() {
    this.cryptoFetchedList()
  }

  cryptoFetchedList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({cryptoList: formattedData, isLoding: false})
  }

  spinner = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {cryptoList, isLoding} = this.state

    return (
      <div className="page-container">
        {isLoding ? (
          this.spinner()
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
