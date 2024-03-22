const curr = Intl.NumberFormat("en-IN", {
    style: "currency",           //Decimal, percent or currency
    currency: "INR",             //ISO code for countries' currencies
    currencyDisplay: "code",   //symbol, code, name
    useGrouping: "auto",
    minimumIntegerDigits: 1,
    maximumFractionDigits: 10,
    minimumFractionDigits: 2,
});

export default curr;