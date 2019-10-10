// Reference: https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/column-stacked/
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
var chart = {
  type: 'column'
}
var title = {
  text: "UCSD Fulltime Student Enrollment"
}

var xAxis = {
  title: {
    text: 'Year'
  },
  categories: ['2005','2006','2007','2008','2009','2010','2011','2012',
  '2013','2014','2015','2016','2017','2018']
}
var yAxis = {
  min: 0,
  title: {
    text: "Number of Students"
  },
  stackLabels: {
    enabled: true,
    style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
    }
  }
};
var legend = {
  align: 'right',
  x: -30,
  verticalAlign: 'top',
  y: 25,
  floating: true,
  borderColor: '#CCC',
  borderWidth: 1,
  shadow: false
};

var plotOptions = {
  column:{
    stacking:'normal',
    dataLabels: {
      enabled: true
    }
  }
};

// Data structure holding all configurations together
var bar_json = {};

// Typing all the configurations
bar_json.chart = chart;
bar_json.title = title;
bar_json.xAxis = xAxis;
bar_json.yAxis = yAxis;
bar_json.legend = legend; 
bar_json.plotOptions = plotOptions;

// Typing the data as series data
bar_json.series = series;

var someVar = document.getElementById("barchartPlaceHolder");
console.log(series);
Highcharts.chart(someVar,bar_json)