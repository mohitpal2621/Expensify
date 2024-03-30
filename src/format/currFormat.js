const curr = Intl.NumberFormat("en-US", {
    style: "currency",           //Decimal, percent or currency
    currency: "INR",             //ISO code for countries' currencies
    currencyDisplay: "code",   //symbol, code, name
    useGrouping: "auto",
    minimumIntegerDigits: 1,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});

export default curr;