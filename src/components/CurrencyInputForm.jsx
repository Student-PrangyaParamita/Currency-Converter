import React, {useId} from "react";

// useId is a custom hook that generates a unique id for each instance of the component
// This is useful for accessibility purposes, as it ensures that each input element has a unique id

function CurrencyInputForm({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    cuttencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "" }) {

    const anountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="anountInputId" className="text-black/40 mb-3 inline-block">{label}</label>

                <input
                    id={ anountInputId }
                    className="outline-none w-full bg-transprent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={ amountDisable }
                    value={ amount }
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>

                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={ selectCurrency }
                    onChange={ (e) => onCurrencyChange && onCurrencyChange(Number(e.target.value)) }
                    disabled={ currencyDisable }>

                    {/* for element repeat in a loop always use key */}
                    { cuttencyOptions.map((_currency) => (
                        <option key={ _currency } value={ _currency }>{ _currency }</option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default CurrencyInputForm;
