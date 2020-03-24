import { getSalesData } from "./data/DataProvider.js"
import { showBarChart } from "./Bar_Chart/BarChartRender.js"
import { showPieChart } from "./Pie_Chart/pieChartRender.js"
import { showLineChart } from "./Line_Chart/LineChartRender.js"

getSalesData()
    .then(showBarChart)
    .then(showPieChart)
    .then(showLineChart)
