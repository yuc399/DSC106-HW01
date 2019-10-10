// Reference: https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/pie-basic/
const men_sum = [1607,2031,1838, 1893,1695,1858,1583,2328,2616,2538,2711,2669,2725,3220].reduce((a,b) => a + b, 0)
const women_sum = [2113,2558,2303,2399,2054,2089,1861,2245,2612,2383,2581,3077,2974,3484].reduce((c,d) => c + d, 0)
var series = [
  {
      name:"enrolled",
      data:[["men_enrolled", men_sum],
            ["women_enrolled",women_sum]
      ]

    }
]

// Configuration about the plot
var chart = {
  plotBackgroundColor: null,
  plotBorderWidth: null,
  plotShadow: false,
  type: 'pie'
}
var title = {
  text: "UCSD Fulltime Student Enrollment (2005-2018)"
}

var plotOptions = {
  pie:{
    allowPointSelect: true,
    cursor: 'pointer',
    dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    },
    colors :['#0288D1','#F06292']
  }
};

// Data structure holding all configurations together
var pie_json = {};

// Typing all the configurations
pie_json.chart = chart;
pie_json.title = title;
pie_json.plotOptions = plotOptions;

// Typing the data as series data
pie_json.series = series;

var someVar = document.getElementById("piechartPlaceHolder");
console.log(series);
Highcharts.chart(someVar,pie_json)