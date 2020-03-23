import { getSalesData } from "./data/DataProvider.js"
import { showBarChart } from "./Bar_Chart/BarChartRender.js"
import { showPieChart } from "./Pie_Chart/pieChartRender.js"

getSalesData().then(showBarChart)
getSalesData().then(showPieChart)