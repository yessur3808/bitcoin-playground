import React from "react"
import axios from "axios";

import "../../styles/coinlist.css"

class CoinDisplay extends React.Component {
    state={
        currency:'HKD'
    };

    componentDidMount = () => {
        this.loadData(); 
    }

    loadData = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency='+this.state.currency+'&order=market_cap_desc&per_page=150&page=1&sparkline=false')
        .then(res=>{
           this.customHandleUpdate('cryptoData',res.data);
           this.customHandleUpdate('filteredCryptoData',res.data);
        }).catch(error=>console.log(error))
    }

    switchCurrency = ev => {
        var cur_currency = ev.target.getAttribute("data-currency");
        this.setState({
            "currency": cur_currency
        }, () => { 
            this.loadData(); 
        });
    }

    customHandleUpdate = (name, val) => {
        this.setState({ [name]: val });
    }

    handleSearch = ev => {
        var val = ev.target.value;
        var filteredCoins = this.state.cryptoData.filter(coin => {
            return coin.name.toLowerCase().includes(val.toLowerCase());
        });
        this.customHandleUpdate('filteredCryptoData', filteredCoins)
    }

    render(){
        return(
            <div className="coin-widget">
             <h2>Top Coins</h2>


             <div className="coin-search">
                <label id="fieldLabel">
                    <input type="text" className="coin-input" placeholder="Search for Coin .." onChange={this.handleSearch}/>
                </label>
                <div className="currencyBtns">
                    <div className={(this.state.currency && this.state.currency=== "HKD") ? "currencyBtn active" : "currencyBtn"} onClick={this.switchCurrency} data-currency="HKD">HKD</div>
                    <div className={(this.state.currency && this.state.currency=== "USD") ? "currencyBtn active" : "currencyBtn"} onClick={this.switchCurrency} data-currency="USD">USD</div>
                </div>
            </div>

             <div className="coin-list">



            {(this.state.filteredCryptoData && this.state.filteredCryptoData.length && (this.state.filteredCryptoData.length > 0)) ? (this.state.filteredCryptoData.splice(0,4).map((elem, idx) => 

            (
                <div className="coin-container">
                    <div className="coin-row">
                        <div className="coin">
                            
                            <h1>
                                <img src={elem.image} alt="crypto" data-symbol={elem.symbol} /> 
                                <span>{elem.name}</span>
                                
                                </h1>
                        </div>
                        <div className="coin-data">
                            <p className="coin-field coin-price">
                            <span>Price</span>
                                ${elem.current_price.toLocaleString()}{this.state.currency}</p>
                            <p className="coin-field coin-volume">
                                <span>Volume</span>
                                ${elem.total_volume.toLocaleString()}{this.state.currency}</p>
                            {(elem.price_change_24h < 0) ? (
                                <p className="coin-field coin-percent red">{elem.price_change_percentage_24h.toFixed(2)}%</p>
                                ):(
                                    <p className="coin-field coin-percent green">{elem.price_change_percentage_24h.toFixed(2)}%</p>
                                )
                            }
                            <p className="coin-field coin-marketcap">
                                <span>Market Cap</span> ${elem.market_cap.toLocaleString()}{this.state.currency}
                            </p>
                        </div>
                    </div>
                
                </div>
            )

            )

            ) : (
                <div className="coin-container">
                    No data available
                </div>
            ) }
        </div>

        <div id="source" class="source">
            Source: <span class="link">
                <a href="https://www.coingecko.com/en" target="_blank" rel="noreferrer noopener">
                    CoinGecko
                </a>
            </span>
        </div>
           
            </div>
        )
    }
}


export default CoinDisplay