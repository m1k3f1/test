/**
 * 
 */

 $(document).ready(function() {
	

            var data2 = [
                [gd(2012, 1, 1), 1], [gd(2012, 1, 2), 16], [gd(2012, 1, 3), 14], [gd(2012, 1, 4), 18],
                [gd(2012, 1, 5), 11], [gd(2012, 1, 6), 17], [gd(2012, 1, 7), 15], [gd(2012, 1, 8), 14],
                [gd(2012, 1, 9), 17], [gd(2012, 1, 10), 18], [gd(2012, 1, 11), 19], [gd(2012, 1, 12), 16],
                [gd(2012, 1, 13), 14], [gd(2012, 1, 14), 15], [gd(2012, 1, 15), 21], [gd(2012, 1, 16), 18],
                [gd(2012, 1, 17), 28], [gd(2012, 1, 18), 21], [gd(2012, 1, 19), 21], [gd(2012, 1, 20), 16],
                [gd(2012, 1, 21), 16], [gd(2012, 1, 22), 18], [gd(2012, 1, 23), 21], [gd(2012, 1, 24), 23],
                [gd(2012, 1, 25), 17], [gd(2012, 1, 26), 19], [gd(2012, 1, 27), 19], [gd(2012, 1, 28), 18],
                [gd(2012, 1, 29), 15], [gd(2012, 1, 30), 18], [gd(2012, 1, 31), 35]
            ];

            var data3 = [
                         [gd(2012, 1, 1), 2], [gd(2012, 1, 2), 6], [gd(2012, 1, 3), 4], [gd(2012, 1, 4), 8],
                         [gd(2012, 1, 5), 9], [gd(2012, 1, 6), 7], [gd(2012, 1, 7), 5], [gd(2012, 1, 8), 4],
                         [gd(2012, 1, 9), 7], [gd(2012, 1, 10), 8], [gd(2012, 1, 11), 9], [gd(2012, 1, 12), 6],
                         [gd(2012, 1, 13), 4], [gd(2012, 1, 14), 5], [gd(2012, 1, 15), 11], [gd(2012, 1, 16), 8],
                         [gd(2012, 1, 17), 8], [gd(2012, 1, 18), 11], [gd(2012, 1, 19), 11], [gd(2012, 1, 20), 6],
                         [gd(2012, 1, 21), 6], [gd(2012, 1, 22), 8], [gd(2012, 1, 23), 11], [gd(2012, 1, 24), 13],
                         [gd(2012, 1, 25), 7], [gd(2012, 1, 26), 9], [gd(2012, 1, 27), 9], [gd(2012, 1, 28), 8],
                         [gd(2012, 1, 29), 5], [gd(2012, 1, 30), 8], [gd(2012, 1, 31), 25]
                     ];
            var data4 = [
                         [gd(2012, 1, 1), 3], [gd(2012, 1, 2), 3], [gd(2012, 1, 3), 2], [gd(2012, 1, 4), 8],
                         [gd(2012, 1, 5), 6], [gd(2012, 1, 6), 4], [gd(2012, 1, 7), 3], [gd(2012, 1, 8), 2],
                         [gd(2012, 1, 9), 4], [gd(2012, 1, 10), 4], [gd(2012, 1, 11), 5], [gd(2012, 1, 12), 3],
                         [gd(2012, 1, 13), 2], [gd(2012, 1, 14), 2], [gd(2012, 1, 15), 6], [gd(2012, 1, 16), 4],
                         [gd(2012, 1, 17), 4], [gd(2012, 1, 18), 8], [gd(2012, 1, 19), 6], [gd(2012, 1, 20), 3],
                         [gd(2012, 1, 21), 3], [gd(2012, 1, 22), 4], [gd(2012, 1, 23), 6], [gd(2012, 1, 24), 7],
                         [gd(2012, 1, 25), 4], [gd(2012, 1, 26), 5], [gd(2012, 1, 27), 5], [gd(2012, 1, 28), 4],
                         [gd(2012, 1, 29), 3], [gd(2012, 1, 30), 4], [gd(2012, 1, 31), 8]
                     ];

            var dataset = [
                {
                    label: "Ricardo Anaya Cortés",
                    data: data2,
                    yaxis: 2,
                    color: "#B9B9BA",
                    lines: {
                        lineWidth:1,
                            show: true,
                            fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.2
                            }]
                        }
                    },
                    splines: {
                        show: false,
                        tension: 0.6,
                        lineWidth: 1,
                        fill: 0.1
                    },
                },
                {
                    label: "Margarita Zavala",
                    data: data3,
                    yaxis: 2,
                    color: "#4AE683",
                    lines: {
                        lineWidth:1,
                            show: true,
                            fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.2
                            }]
                        }
                    },
                    splines: {
                        show: false,
                        tension: 0.6,
                        lineWidth: 1,
                        fill: 0.1
                    },
                },
                {
                    label: "Rafael Moreno Valle",
                    data: data4,
                    yaxis: 2,
                    color: "#BD63C1",
                    lines: {
                        lineWidth:1,
                            show: true,
                            fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.2
                            }]
                        }
                    },
                    splines: {
                        show: false,
                        tension: 0.6,
                        lineWidth: 1,
                        fill: 0.1
                    },
                }
            ];


            var options = {
                xaxis: {
                    mode: "time",
                    tickSize: [3, "day"],
                    tickLength: 0,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 10,
                    color: "#838383"
                },
                yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#838383",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#838383",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
                ],
                legend: {
                    noColumns: 1,
                    labelBoxBorderColor: "#000000",
                    position: "nw"
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0,
                    color: '#838383'
                }
            };

            function gd(year, month, day) {
                return new Date(year, month - 1, day).getTime();
            }

            var previousPoint = null, previousLabel = null;

            $.plot($("#flot-dashboard-chart"), dataset, options);

            var mapData = {
                "US": 298,
                "SA": 200,
                "DE": 220,
                "FR": 540,
                "CN": 120,
                "AU": 760,
                "BR": 550,
                "IN": 200,
                "GB": 120,
            };

            $('#world-map').vectorMap({
                map: 'world_mill_en',
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 0.9,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    }
                },

                series: {
                    regions: [{
                        values: mapData,
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
                },
            });
        });
 
