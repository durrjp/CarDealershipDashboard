import { useSalesData } from "./barDataProvider.js";


export const showBarChart = () => {
    const SalesData = useSalesData()
    // create an object with property of salesperson and value of profit.
    const salesPeepsandProfits = {}
    // iterate each sale in the data
    SalesData.forEach(sale => {
        const salesPerson = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
        const profit = sale.gross_profit
        // if sales person not in object create a key:value pair of sales person: profit
        if (!salesPeepsandProfits.hasOwnProperty(salesPerson)) {
            salesPeepsandProfits[salesPerson] = profit
        // if sales person already in object add the new sales profit to existing profit for that sales person
        } else {
        salesPeepsandProfits[salesPerson] += profit
        }
    });


    // creating ordered array of salesmen from highest to lowest sales
    let ordered = []
    for (const salesmen in salesPeepsandProfits) {
        ordered.push([salesmen,salesPeepsandProfits[salesmen]])
    }
    ordered.sort(function(a,b) {
        return b[1] - a[1]
    })

    // creating the array of Sales People from the ordered array created before
    const salesPeopleArray = []
    ordered.forEach(person => {
        salesPeopleArray.push(person[0])
    }); 
    
    // creating the array of profits from the ordered array created before
    const profits = []
    ordered.forEach(person => {
        profits.push(person[1])
    });


    //create an array of background colors
    const backgroundColorArray = []

    profits.forEach(number => {
        if (number >= 1500) {
            backgroundColorArray.push("rgb(58, 204, 58, .7)")
        } else if (number >= 500 && number < 1500) {
            backgroundColorArray.push("rgb(255, 255, 0, .7)")
        } else if (number < 500) {
            backgroundColorArray.push("rgb(255, 0, 0, .7)")
        }
    })

    //settings for the bar graph
    const target = document.querySelector("#canvas")
    const myBarChart = new Chart(target, {
        type: 'bar',
        data: {
            labels: salesPeopleArray,
            datasets: [{
                label: "Total Sales",
                barPercentage: 0.5,
                fill: false,
                backgroundColor: backgroundColorArray,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: profits
            }]
        },
        // remove grid lines from bar graph
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                }],
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }]
            },
            legend: {
                display: false
            },
        }}
    );
}




