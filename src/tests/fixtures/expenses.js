import moment from "moment"

export default  [
    {
        id: '1',
        description: "Gum",
        note: '',
        amount: 140,
        createdAt: 0
    },
    {
        id: '2',
        description: "Rent",
        note: '',
        amount: 14000.94,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: "Credit",
        note: 'Credit card bills',
        amount: 113221.80,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
]