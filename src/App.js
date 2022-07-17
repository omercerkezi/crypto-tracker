import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import Navigation from "./Navigation";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <Navigation change={handleChange} />
      <div className="coin-tags">
        <p className="tag-rank">#</p>
        <p className="tag-coin">Coin</p>
        <p className="tag-price">Price</p>
        <p className="tag-volume">24 Volume</p>
        <p className="tag-percent">24h</p>
        <p className="tag-mktcap">M.Cap</p>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
            rank={coin.market_cap_rank}
          />
        );
      })}
    </div>
  );
}

export default App;
