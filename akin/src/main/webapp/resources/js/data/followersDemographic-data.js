Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
//Education Datas
var barData = {
        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
            {
                label: "Secundaria",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80]
            },
            {
                label: "Preparatoria",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40]
            },
            {
                label: "Universidad",
                fillColor: "rgba(234,171,237,0.7)",
                strokeColor: "rgba(216,111,221,0.7)",
                highlightFill: "rgba(191,59,198,0.75)",
                highlightStroke: "rgba(191,59,198,1)",
                data: [35, 68, 60]
            }
        ]
    };

//end education data



//Occupation Datas
var barOccupationData = {
      labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
      datasets: [
          {
              label: "Profesionista",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [20, 34, 12]
          },
          {
              label: "Obrero",
              fillColor: "rgba(26,179,148,0.5)",
              strokeColor: "rgba(26,179,148,0.8)",
              highlightFill: "rgba(26,179,148,0.75)",
              highlightStroke: "rgba(26,179,148,1)",
              data: [23, 35, 22]
          },
          {
              label: "Ama de Casa",
              fillColor: "rgba(234,171,237,0.7)",
              strokeColor: "rgba(216,111,221,0.7)",
              highlightFill: "rgba(191,59,198,0.75)",
              highlightStroke: "rgba(191,59,198,1)",
              data: [35, 22, 11]
          }
      ]
  };

//end occupation data


//Civil Status Datas
var barCivilStatusData = {
      labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
      datasets: [
          {
              label: "Soltero",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [45, 36, 34]
          },
          {
              label: "Casado",
              fillColor: "rgba(26,179,148,0.5)",
              strokeColor: "rgba(26,179,148,0.8)",
              highlightFill: "rgba(26,179,148,0.75)",
              highlightStroke: "rgba(26,179,148,1)",
              data: [56,34, 34]
          },
          {
              label: "Otro",
              fillColor: "rgba(234,171,237,0.7)",
              strokeColor: "rgba(216,111,221,0.7)",
              highlightFill: "rgba(191,59,198,0.75)",
              highlightStroke: "rgba(191,59,198,1)",
              data: [34, 23, 34]
          }
      ]
  };

//end civil status data


//Religion Preference Datas
var barReligionData = {
      labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
      datasets: [
          {
              label: "Cristiano",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [23, 16, 26]
          },
          {
              label: "Catolico",
              fillColor: "rgba(26,179,148,0.5)",
              strokeColor: "rgba(26,179,148,0.8)",
              highlightFill: "rgba(26,179,148,0.75)",
              highlightStroke: "rgba(26,179,148,1)",
              data: [12, 26, 23]
          },
          {
              label: "Otro",
              fillColor: "rgba(234,171,237,0.7)",
              strokeColor: "rgba(216,111,221,0.7)",
              highlightFill: "rgba(191,59,198,0.75)",
              highlightStroke: "rgba(191,59,198,1)",
              data: [34, 22, 24]
          }
      ]
  };

//end Religion Preference data



//Politics Preferences Datas
var barPoliticsData = {
      labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
      datasets: [
          {
              label: "PAN",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [55, 59, 32]
          },
          {
              label: "PRD",
              fillColor: "rgba(26,179,148,0.5)",
              strokeColor: "rgba(26,179,148,0.8)",
              highlightFill: "rgba(26,179,148,0.75)",
              highlightStroke: "rgba(26,179,148,1)",
              data: [34, 23, 19]
          },
          {
              label: "PRI",
              fillColor: "rgba(234,171,237,0.7)",
              strokeColor: "rgba(216,111,221,0.7)",
              highlightFill: "rgba(191,59,198,0.75)",
              highlightStroke: "rgba(191,59,198,1)",
              data: [24, 23, 12]
          }
      ]
  };

//end Politics Preferences data

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 25,
        barDatasetSpacing: 5,
        responsive: true,
        multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
    }


    var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);

    
    var ctxOccupation = document.getElementById("barOccupation").getContext("2d");
    var occupationChart = new Chart(ctxOccupation).Bar(barOccupationData, barOptions);
    
    
    var ctxCivilStatus = document.getElementById("barCivilStatus").getContext("2d");
    var civilStatusChart = new Chart(ctxCivilStatus).Bar(barCivilStatusData, barOptions);
    
    
    var ctxReligion = document.getElementById("barReligion").getContext("2d");
    var ReligionChart = new Chart(ctxReligion).Bar(barReligionData, barOptions);
    
    
    var ctxPolitics = document.getElementById("barPolitics").getContext("2d");
    var politicsChart = new Chart(ctxPolitics).Bar(barPoliticsData, barOptions);