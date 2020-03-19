import { useSalesData } from "./barDataProvider.js";


export const showBarChart = () => {
    const target = document.querySelector("#canvas")
    const myBarChart = new Chart(target, {
        type: 'bar',
        data: {
            labels: salesPeople,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 20, 30, 40, 50, 60, 70]
            }]
        },
        options: {}
    });
}
const SalesData = useSalesData()
const salesPeople = (SalesData)


