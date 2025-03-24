import { useState } from 'react'
import { CurrencyInputForm } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [ amount, setAmount ] = useState(0);
  const [from, setFrom] = useState("usd");
  const [ to, setTo ] = useState("inr");
  const [ convertedAmount, setConvertedAmount ] = useState(0);

  const currency_Info = useCurrencyInfo(from);

  // drop down options
  const optionKeys = Object.keys(currency_Info)

  // swap to values
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currency_Info[ to ]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[url(https://c8.alamy.com/comp/PT0WFC/candle-stick-graph-chart-with-indicator-showing-bullish-point-or-bearish-point-up-trend-or-down-trend-of-price-of-stock-market-or-stock-exchange-trad-PT0WFC.jpg)]">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={ (e) => {
            e.preventDefault();
            convert();
          } }>
            <div className="w-full mb-1">
              <CurrencyInputForm
                label='from'
                amount={ amount }
                cuttencyOptions={ optionKeys }
                onCurrencyChange={ (currency_Info) => setAmount(amount) }
                selectCurrency={ from }
                onAmountChange={ (amount) => setAmount(amount) }
              />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}> swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrencyInputForm
                label="to"
                amount={ convertedAmount }
                cuttencyOptions={ optionKeys }
                onCurrencyChange={ (currency_Info) => setTo(currency_Info) }
                selectCurrency={ to }
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
