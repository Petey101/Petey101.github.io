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
    dashboardSpending(state);
}

function dashboardSpending(state) {
    _generateBarChartData(state, 'spending');
}

function _appendPercentChange (id, percentChange) {
   $(id).text(percentChange);
}

function dashboardAreaChart (state, stateCSV = 'data/prison.csv', counter = 1, stateData1 = undefined, stateData2 = undefined) {
    var stateData1, stateName;
    if (counter == 2) {
        var stateData2 = []
    };
    if (counter == 3) {
        var stateData3 = []
    };
    $.get(stateCSV, function(csv) {
        var data = _csvToArray(csv);
        for (var i = 0; i < data.length; i++) {
            if (data[i][1] == state) {
                stateName = data[i][0];
               percentChange = data[i][data[i].length - 1];
                if (counter == 1) {
                    percentChange = data[i][data[i].length - 1];
                    stateData1 = _formatStateData(data[i]);
                    _appendPercentChange('#prison-population-change', 'A ' + percentChange + ' change in prison population.' );
                };
                if (counter == 2) {
                    percentChange = data[i][data[i].length - 1];
                    stateData2 = _formatStateData(data[i]);
                    _appendPercentChange('#parole-population-change', 'A ' + percentChange + ' change in parole population.');
                };
                if (counter == 3) {
                    percentChange = data[i][data[i].length - 1];
                    stateData3 = _formatStateData(data[i]);
                    _appendPercentChange('#probation-population-percent-change', 'A ' + percentChange + ' change in probation population.');
                };
            }
        }
        if (stateData2 == undefined ){ 
            dashboardAreaChart (state, stateCSV = 'data/parole.csv', counter = 2, stateData1, stateData2)
        }
        else if (stateData3 == undefined ){ 
            dashboardAreaChart (state, stateCSV = 'data/probation.csv', counter = 3, stateData1, stateData2)
        }
        else {
        _appendPageTitles(stateName);
        _createAreaChart(stateName, stateData1, stateData2, stateData3);
        }
    });
}

function _appendPageTitles (stateName) {
    $('#title').text(stateName + '\'s Correctional Populations between 2005 and 2015.');
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

function _createAreaChart (stateName, stateData1, stateData2, stateData3) {
    Highcharts.setOptions({lang: {noData: "No Data Available"}})
    var myChart = Highcharts.chart('crime-rate-chart', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Changes of  ' + stateName + '\'s prison, probation and parole population from 2005–2015'
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '20010', '2011', '2012', '2013', '2014', '2015']
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
            name: "Prison Population",
            data: stateData1,
            color: '#00008b',
            fillOpacity: 0.1
        },
        {
            name: "Parole Population",
            data: stateData2,
            color: '#0099ff',
            fillOpacity: 0.1
        },
        {
            name: "Probation Population",
            data: stateData3,
            color: '#66ccff',
            fillOpacity: 0.1
        },
        ],
    });
}

function _generateBarChartData (state, type) {
   var stateCSV = 'data/spending.csv';
    var stateData, stateName;
    $.get(stateCSV, function (csv) {
        var data = _csvToArray(csv);
        for (var i = 0; i < data.length; i++) {
            if (data[i][1] == state) {
                stateName = data[i][0];
                data[i].splice(0, 2);
                data = data[i].map(Number);
                stateData = data
            }
        }
        var chartId = type + '-chart';
        _createBarChart(stateName, stateData, chartId);
    });
}

function _createBarChart (stateName, stateData, chartId) {
    var myChart = Highcharts.chart(chartId, {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: [
                '#fdb813',
                '#f05a22'
            ],        
        title: {
            text: 'Correctional spending of  ' + stateName + '.'
        },
        xAxis: {
            categories: ['Prison (FY2015)', 'Probation/Parole (FY2017)']
        },
        legend: {
            enabled: false
        },
        yAxis: {
          labels: {
            formatter: function() {
              return this.value / 1000000 + 'M';
            }
          }
        },
        series: [{
            name: stateName,
            data: stateData
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
    data.splice(-1, 1);
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
