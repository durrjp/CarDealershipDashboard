import { useSalesData } from "../data/DataProvider.js";


export const showLineChart = () => {
    const SalesData = useSalesData()
    const monthlyProfitsObject = {}

    //function to return dates as months
    const month_name = (dt) => {
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
          return mlist[dt.getMonth()];
    }

    // iterate each sale in the data
    SalesData.forEach(sale => {
        const month = month_name(new Date(sale.purchase_date))
        const profit = sale.gross_profit
        // if month not in object create a key:value pair of month:profit
        if(!monthlyProfitsObject.hasOwnProperty(month)) {
            monthlyProfitsObject[month] = 1
        // if month in object add new profit to existing month
        } else {
            monthlyProfitsObject[month] += 1
        }
    });

    // function to reorder the monthlyProfitsObject into Jan-Dec based on monthNames object
    var monthNames = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
      };
      //return an array of key-value pair arrays
    const forOrdered = Object.entries(monthlyProfitsObject)
      //order the array of key-value pairs based on object monthNames (Jan-Dec)
    const ordered = forOrdered.sort(function(a,b) {
        return monthNames[a[0]] - monthNames[b[0]];
    })

    // declaring variable for array of months
    const MonthsArray = []
    ordered.forEach(month => {
        MonthsArray.push(month[0])
    });

    // declaring variable for array of number of cars sold
    const numberSold = []
    ordered.forEach(month => {
        numberSold.push(Math.floor(month[1]))
    });

    const backgroundColorArray = [
        "rgb(255,0,0,.7)",
        "rgb(255,128,0,.7)",
        "rgb(255,255,0,.7)",
        "rgb(128,255,0,.7)",
        "rgb(0,255,0,.7)",
        "rgb(0,255,128,.7)",
        "rgb(0,255,255,.7)",
        "rgb(0,128,255,.7)",
        "rgb(0,0,255,.7)",
        "rgb(128,0,255,.7)",
        "rgb(255,0,255,.7)",
        "rgb(255,0,128,.7)"
    ]

    const ctx = document.querySelector("#canvas3")
    //Line Chart display settings
    const myPieChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: "Pie Chart",
                lineTension: .2,
                data: numberSold,
                fill: false,
                borderColor: "rgba(0, 0, 0, .5)",
                pointBorderColor: backgroundColorArray,
                pointBackgroundColor: backgroundColorArray,
                borderDash: [5,10],
                pointBorderWidth: 2,
                pointRadius: 6,
            }],
            labels: MonthsArray,
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Month",
                        fontsize: 2,
                        padding: 4
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 10
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "# of Cars Sold",
                        fontsize: 2,
                        padding: 4
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
}