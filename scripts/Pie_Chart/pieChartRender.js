import { useSalesData } from "../data/DataProvider.js";


export const showPieChart = () => {
    const SalesData = useSalesData()
    const monthlyProfitsObject = {}

    //function to return dates as months
    const month_name = (dt) => {
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
          return mlist[dt.getMonth()];
        };

    // iterate each sale in the data
    SalesData.forEach(sale => {
        const month = month_name(new Date(sale.purchase_date))
        const profit = sale.gross_profit
        // if month not in object create a key:value pair of month:profit
        if(!monthlyProfitsObject.hasOwnProperty(month)) {
            monthlyProfitsObject[month] = profit
        // if month in object add new profit to existing month
        } else {
            monthlyProfitsObject[month] += profit
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

    // declaring variable for array of profits
    const profits = []
    ordered.forEach(month => {
        profits.push(Math.floor(month[1]))
    });

    //create an array of background colors
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

    // random color creator****

    // profits.forEach(number => {
    //     var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    //     backgroundColorArray.push(randomColor)
    // })

    const ctx = document.querySelector("#canvas2")
    //Pie Chart display settings
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                label: "Pie Chart",
                backgroundColor: backgroundColorArray,
                data: profits
            }],
            labels: MonthsArray,
        },
        // hide pie chart borders
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });
}
