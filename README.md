# Car Dealership Dashboard
This app is a project created in order to display a set of mock sales data for a small car dealership. The overall goal of the application was to increase my comfort level with data in JSON format and extract + visualize that data using ChartJS. This dashboard displays 3 graphs: a Bar Graph, Pie Chart, and Line Graph. I personally enjoyed sorting the data into digestable chunks so the user can view meaningful statistics for sales per employee, sales per month, and cars sold per month respectively.
## Running the App Locally

1. Clone repo to your machine
2. If you do not have json server installed you will need to install it using the command: 
``` bash
npm install -g json-server
```
3. In one terminal CD to api directory in car-dealership-dashboard and run JSON server to port 3000 using command: 
``` bash 
json-server -p 3000 -w data.json
```
4. In another terminal window CD to the car-dealership-dashboard directory and begin application using the command: 
``` bash 
serve
```
## Technologies 
* HTML
* CSS
* Javascript
* Chartjs

