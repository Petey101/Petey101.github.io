$(document).ready(function() {
    _init('CA')
});
function _init(defaultState) {
    if (defaultState) { _generateDashboards(defaultState); }

    $('select').change(function(){
        var stateAbbrev = this.value;
        _generateDashboards(stateAbbrev);
    });
}

function _generateDashboards (state) {
    dashboardAreaChart(state);
    appendStateDescription(state);
    dashboardPrisonReconviction(state);
    dashboardRapeRate(state);
    dashboardRobberyRate(state);
    dashboardAssaultRate(state);
    dashboardProbationIncarceration(state);
    // dashboardPopAreaBarCharts(state);
}

// function dashboardPopAreaBarCharts (state) {
//     var rawCSV = 'data/prison-rearrest.csv';
//     var stateData = [];
//     $.get(rawCSV, function (csv) {
//         var data = _csvToArray(csv);
//         for (var i = 0; i < data.length; i++) {
//             if (data[i][1] == state) {
//                 stateData.push(data[i]);
//             }
//         }
//         _generateMetroBarChart(state, stateData[0]);
//         _generateMicroBarChart(state, stateData[1]);
//         _generateNonMetroBarChart(state, stateData[2]);
//     });
// }

function dashboardPrisonReconviction(state) {
    _generateLineChartData(state, 'Prison Reconviction', 'prison-reconviction');
}

function dashboardRapeRate (state) {
    _generateLineChartData (state, 'Prison Reincarceration', 'prison-reincarceration');
}

function dashboardRobberyRate (state)  {
    _generateLineChartData (state, 'Probation Rearrest', 'probation-rearrest');
}

function dashboardAssaultRate (state)  {
    _generateLineChartData (state, 'Probation Reconviction', 'probation-reconviction');
}
function dashboardProbationIncarceration (state)  {
    _generateLineChartData (state, 'Probation Incarceration', 'probation-incarceration');
}


//function _appendPercentChange (id, percentChange) {
 //   $(id).text(percentChange);
//}

// Area chart
function dashboardAreaChart (state) {
    var stateCSV = 'data/prison-rearrest.csv';
    var stateData, stateName;
    $.get(stateCSV, function(csv) {
        var data = _csvToArray(csv);
        for (var i = 0; i < data.length; i++) {
            if (data[i][1] == state) {
                stateName = data[i][0];
//                percentChange = data[i][data[i].length - 1];
                // increaseOrDecline = parseFloat(data[i][data[i].length - 1]) > 0 ? 'increased' : 'declined';
                stateData = _formatStateData(data[i]);
            }
        }
//        _appendPercentChange('#crime-rate-chart-percent-change', percentChange);
        _appendPageTitles(stateName);
        _createAreaChart(stateName, stateData);
    });
}

function _appendPageTitles (stateName) {
    $('#title').text(stateName + '\'s recidivism rates between 2004 and 2013.');
    $('#prison-title').text('Percent Change in ' + stateName + '\'s prison recidivism, 2004–2013')
    $('#probation-title').text('Percent Change in ' + stateName + '\'s probation recidivism, 2004–2013');
}

function appendStateDescription (state) {
    var content = $('#state-description');
    var lormIpsum = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur';
    switch (state) {
      case 'AL':
        content.text(lormIpsum + state)
        break;
      case 'AK':
        content.text(lormIpsum + state)
        break;
      case 'AZ':
        content.text(lormIpsum + state)
        break;
      case 'AR':
        content.text(lormIpsum + state)
        break;
      case 'CA':
        content.text(lormIpsum + state)
        break;
      case 'CO':
        content.text(lormIpsum + state)
        break;
      case 'CT':
        content.text(lormIpsum + state)
        break;
      case 'DE':
        content.text(lormIpsum + state)
        break;
      case 'FL':
        content.text(lormIpsum + state)
        break;
      case 'GA':
        content.text(lormIpsum + state)
        break;
      case 'HI':
        content.text(lormIpsum + state)
        break;
      case 'ID':
        content.text(lormIpsum + state)
        break;
      case 'IL':
        content.text(lormIpsum + state)
        break;
      case 'IN':
        content.text(lormIpsum + state)
        break;
      case 'IA':
        content.text(lormIpsum + state)
        break;
      case 'KS':
        content.text(lormIpsum + state)
        break;
      case 'KY':
        content.text(lormIpsum + state)
        break;
      case 'LA':
        content.text(lormIpsum + state)
        break;
      case 'ME':
        content.text(lormIpsum + state)
        break;
      case 'MD':
        content.text(lormIpsum + state)
        break;
      case 'MA':
        content.text(lormIpsum + state)
        break;
      case 'MI':
        content.text(lormIpsum + state)
        break;
      case 'MN':
        content.text(lormIpsum + state)
        break;
      case 'MS':
        content.text(lormIpsum + state)
        break;
      case 'MO':
        content.text(lormIpsum + state)
        break;
      case 'MT':
        content.text(lormIpsum + state)
        break;
      case 'NE':
        content.text(lormIpsum + state)
        break;
      case 'NV':
        content.text(lormIpsum + state)
        break;
      case 'NH':
        content.text(lormIpsum + state)
        break;
      case 'NJ':
        content.text(lormIpsum + state)
        break;
      case 'NM':
        content.text(lormIpsum + state)
        break;
      case 'NY':
        content.text(lormIpsum + state)
        break;
      case 'NC':
        content.text(lormIpsum + state)
        break;
      case 'ND':
        content.text(lormIpsum + state)
        break;
      case 'OH':
        content.text(lormIpsum + state)
        break;
      case 'OK':
        content.text(lormIpsum + state)
        break;
      case 'OR':
        content.text(lormIpsum + state)
        break;
      case 'PA':
        content.text(lormIpsum + state)
        break;
      case 'RI':
        content.text(lormIpsum + state)
        break;
      case 'SC':
        content.text(lormIpsum + state)
        break;
      case 'SD':
        content.text(lormIpsum + state)
        break;
      case 'TN':
        content.text(lormIpsum + state)
        break;
      case 'TX':
        content.text(lormIpsum + state)
        break;
      case 'UT':
        content.text(lormIpsum + state)
        break;
      case 'VT':
        content.text(lormIpsum + state)
        break;
      case 'VA':
        content.text(lormIpsum + state)
        break;
      case 'WA':
        content.text(lormIpsum + state)
        break;
      case 'WV':
        content.text(lormIpsum + state)
        break;
      case 'WI':
        content.text(lormIpsum + state)
        break;
      case 'WY':
        content.text(lormIpsum + state)
        break;
    }
}
// end area chart

// Bar chart functions
// function _generateMetroBarChart (state, data) {
//     var id = 'metro';
//     var name = 'Metropolitan Areas';
//     var subtitle = '(population of 50,000+)'
// //    var percentChange = data[data.length - 1];
// //    _appendPercentChange('#' + id + '-percent-change', percentChange);
//     var cutData = _cutBarChartData(data);
//     _createBarChart(cutData, id, name, subtitle);
// }

// function _generateMicroBarChart (state, data) {
//     var id = 'micro';
//     var name = 'Micropolitan Areas';
//     var subtitle = '(population of 10,000–49,999)';
// //    var percentChange = data[data.length - 1];
//  //   _appendPercentChange('#' + id + '-percent-change', percentChange);
//     var cutData = _cutBarChartData(data);
//     _createBarChart(cutData, id, name, subtitle);
// }

// function _generateNonMetroBarChart (state, data) {
//     var id = 'non-metro';
//     var name = 'Non-Metropolitan Areas';
//     var subtitle = '(population of fewer than 10,000)';
// //    var percentChange = data[data.length - 1];
// //    _appendPercentChange('#' + id + '-percent-change', percentChange);
//     var cutData = _cutBarChartData(data);
//     _createBarChart(cutData, id, name, subtitle);
// }

// function _cutBarChartData (data) {
//     var cutData = [];
//     cutData.push(Number(data.slice(4, 5)[0]));
//     cutData.push(Number(data.slice(6, 7)[0]));
//     return cutData;
// }

// function _createBarChart (data, id, name, subtitle) {
//     var myChart = Highcharts.chart(id, {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: name
//         },
//         subtitle: {
//             text: subtitle
//         },
//         xAxis: {
//             categories: ['', ''],
//             labels: {
//                 enabled: false
//             }
//         },
//         yAxis: {
//             title: {
//                 text: ''
//             },
//             labels: {
//                 enabled: false
//             }
//         },
//         legend: {
//             enabled: false
//         },
//         colors: [
//             '#E76946',
//             '#FBB731'
//         ],
//         plotOptions: {
//                series: {
//                    pointPadding: 0,
//                    groupPadding: 0,
//                    colorByPoint: true
//                }
//            },
//         series: [{
//             data: data
//         }]
//     });
// }
// end bar chart

// Line chart functions
function _createAreaChart (stateName, stateData) {
    Highcharts.setOptions({lang: {noData: "No Data Available"}})
    var myChart = Highcharts.chart('prison-rearrest-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Prison Rearrest'
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: stateName,
            data: stateData,
            color: '#f05a22',
        }],
    });
}

function _generateLineChartData (state, title, type) {
   // var stateCSV = 'data/' + type + '-rate.csv';
   var stateCSV = 'data/' + type + '.csv';
    var stateData, stateName;
    $.get(stateCSV, function (csv) {
        var data = _csvToArray(csv);
        for (var i = 0; i < data.length; i++) {
            if (data[i][1] == state) {
                stateName = data[i][0];
//                percentChange = data[i][data[i].length - 1];
                stateData = _formatStateData(data[i]);
            }
        }
        debugger;
        var chartId = type + '-chart';
//        _appendPercentChange('#' + type + '-percent-change', percentChange);
        _createLineChart(stateName, stateData, title, chartId);
    });
}

function _createLineChart (stateName, stateData, title, chartId) {
    var myChart = Highcharts.chart(chartId, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ''
            },
             min: 0
        },
        series: [{
            name: stateName,
            data: stateData,
            color: '#f05a22',
        }]
    });
}

function _csvToArray (csv) {
    rows  = csv.split("\n");
    return rows.map(function (row) {
        return row.split(",");
    });
};

function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) {
        return false;
    }
    while (i--) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function _formatStateData (data) {
    data.splice(0, 2);
    // data.splice(-1, 1);
    data = data.map(Number);
    for (var i = 0; i < data.length; i++) {
            if (data[i] == 0) {
               data[i] = "Data not available"
            }
        }
    if (arraysIdentical(data, ["Data not available", "Data not available", "Data not available", "Data not available", "Data not available", "Data not available", "Data not available", "Data not available", "Data not available", "Data not available"])){
        data = []
    }

    return data;
}
// end line chart functions