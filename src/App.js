import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import Dropdown from './components/Dropdown';
import IntervalSelector from './components/IntervalSelector';

const App = () => {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState('1m');
  const [symbol, setSymbol] = useState('btcusdt');

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`
    );

    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      const newCandle = {
        time: message.k.t,
        price: parseFloat(message.k.c),
      };
      setData(prev => [...prev.slice(-100), newCandle]);
    };

    return () => ws.close();
  }, [symbol, interval]);

  return (
    <div>
      <h1>Binance WebSocket Chart</h1>
      <Dropdown
        options={['btcusdt', 'ethusdt']}
        onChange={setSymbol}
      />
      <IntervalSelector
        intervals={['1m', '5m', '1h']}
        onSelect={setInterval}
      />
      <Chart data={data} />
    </div>
  );
};

export default App;
