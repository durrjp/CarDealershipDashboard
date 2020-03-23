
let salesData = []

export const getSalesData = () => {
   
   return fetch("http://localhost:3000/sales")
        .then(response => response.json())
        .then(parsedData => {
            salesData = parsedData.slice()
            }
        )
}
export const useSalesData = () => salesData
