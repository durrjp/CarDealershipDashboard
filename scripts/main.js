import { getSalesData } from "./Bar_Chart/barDataProvider.js"
import { showBarChart } from "./Bar_Chart/BarChartRender.js"

getSalesData().then(showBarChart)