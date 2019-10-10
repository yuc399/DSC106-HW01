// Reference: https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/line-basic/
var series = [
  {
      name:"men_enrolled",
      data:[1607,
        2031,
        1838,
        1893,
        1695,
        1858,
        1583,
        2328,
        2616,
        2538,
        2711,
        2669,
        2725,
        3220],
      color: '#0288D1'
    },
    {
      name:"women_enrolled",
      data:[2113,
        2558,
        2303,
        2399,
        2054,
        2089,
        1861,
        2245,
        2612,
        2383,
        2581,
        3077,
        2974,
        3484],
      color: '#F06292'
    }
  ]

// Configuration about the plot
var title = {
  text: "UCSD Fulltime Student Enrollment"
}

var xAxis = {
  title: {
    text: 'Year'
  },
  categories: [2005,2006,2007,2008,2009,2010,2011,2012,
  2013,2014,2015,2016,2017,2018]
}
var yAxis = {
  title: {
    text: "Number of Students"
  },
  plotLines:[{
    value: 0,
    width: 1,
    color: '#808080'
  }]
};

var legend = {
  layout: 'vertical',
  align: 'right',
  verticalAlign: 'middle',
  borderWidth: 0
};

// Data structure holding all configurations together
var json = {};

// Typing all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend; 

// Typing the data as series data
json.series = series;

var someVar = document.getElementById("chartPlaceHolder");
console.log(series);
Highcharts.chart(someVar,json)