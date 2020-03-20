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

    // declaring variable for array of Sales People
    const salesPeople = Object.keys(salesPeepsandProfits)
    // declaring variable for array of profits
    const profits = Object.values(salesPeepsandProfits)
    console.log(profits)


    //create an array of background colors
    const backgroundColorArray = []
    console.log(backgroundColorArray)

    profits.forEach(number => {
        if (number >= 1500) {
            backgroundColorArray.push("rgb(58, 204, 58, .5)")
        } else if (number >= 500 && number < 1500) {
            backgroundColorArray.push("rgb(255, 255, 0, .5)")
        } else if (number < 500) {
            backgroundColorArray.push("rgb(255, 0, 0, .5)")
        }
    })

    //settings for the bar graph
    const target = document.querySelector("#canvas")
    const myBarChart = new Chart(target, {
        type: 'bar',
        data: {
            labels: salesPeople,
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
        options: {}
    });
}




