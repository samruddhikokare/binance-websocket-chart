# Binance WebSocket Chart

This project is a real-time cryptocurrency chart application built using **React.js** and **Binance's WebSocket API**. It visualizes live price data for selected cryptocurrency pairs like BTC/USDT and ETH/USDT.

## Features

- **Real-time price updates** using Binance WebSocket API.
- Interactive chart using **Chart.js**.
- Dropdown to select different trading pairs.
- Time interval selector for live updates (1 minute, 5 minutes, 1 hour).

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** (comes with Node.js) or **Yarn** (optional)
Check installation:

node -v
npm -v
Getting Started
Clone the repository:

git clone https://github.com/your-username/binance-websocket-chart.git
cd binance-websocket-chart
Install dependencies:

npm install
Run the application:

npm start
This command starts the app in development mode. Open http://localhost:3000 to view it in the browser.

File Structure
public/: Contains the public-facing HTML and assets.
src/components/: Contains reusable React components like Chart.js, Dropdown.js, and IntervalSelector.js.
src/App.js: Main component to bring everything together.
src/index.js: Entry point for rendering the React application.
