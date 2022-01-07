// JavaScript Document
Highcharts.chart('pieChart', {
	colors: ['#a440b8', '#6c40b8', '#0772de', '#00d96c', '#7bd422', '#f5cc00', '#f2a200', '#ff9500', '#ff9500', '#e04b00'],
	chart: {
        backgroundColor: '#f7f8fa',
		plotBackgroundColor: '#f7f8fa',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    //tooltip: {
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //},
	tooltip: {
            pointFormat: '<b>{point.percentage:.2f}%</b><br/>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            //dataLabels: {
                //enabled: false
            //},
            //showInLegend: false
			dataLabels: {
                enabled: true,
                format: '<b>{point.percentage:.2f} %</b>',
				style: { fontFamily: '\'Lato\', sans-serif', lineHeight: '14px', fontSize: '9px', textOutline: false },
                distance: -30,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2
                }
            }
        }
    },
    series: [{
        //name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Ecosystem',
            y: 40.00
        }, {
            name: 'Founders',
            y: 20.00
            //sliced: true,
            //selected: true
        }, {
            name: 'Core Team',
            y: 2.00
        }, {
			name: 'Contingency',
            y: 10.00
        }, {
			name: 'Exchange listing and MM',
            y: 18.00
        }, {
			name: 'Private sale',
            y: 10.00
        }]
    }]
});