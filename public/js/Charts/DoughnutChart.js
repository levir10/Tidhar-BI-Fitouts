function createDoughnutChart(Name, Title, input){
    
    var _this = this;
    // var toolTips = [];
    // input[1].map(p=>toolTips.push(numberWithCommas(p)+"₪"));

    var data = {
        datasets: [{   
        data: input[1],
        backgroundColor: DashBoardColors.background.slice(0, input[1].length),
        borderColor: DashBoardColors.background.slice(0, input[1].length),
        borderWidth: 1,
        }],   // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: input[0]
    };

    // const hoverLable = {
    //     id:'hoverLabel',
    //     beforeDraw(chart,args,options){
    //         const {ctx,chartArea:{top,right,bottom,left,width,height}}=chart;
    //         ctx.save();
    //         ctx.font = 'bolder 60px Arial';
    //         ctx.textAlign='center';
    //         ctx.fillStyle = 'blue';
    //         ctx.fillText('97%',width/2,height/2);
    //     }

    // };

    var ctx = document.getElementById(Name);
    var myDoughnutChart = new Chart(ctx, {
        backgroundColor: "transparent",
        type: 'doughnut',
        data: data,
        options: {
            cutoutPercentage: 70,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                    
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    display: false
                }]
            },
            title: {
                display: true,
                text: Title,
                wrap: true,
                maxWidth: 25,
            },
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    text: "Hello World",
                    fontColor: "black",
                    fontSize: 15,
                    
                  },
                  position: "bottom"
            },
            
            'onClick': function (evt, items) {
                if( myDoughnutChart.config.type=='doughnut'){
                    myDoughnutChart.config.type = 'polarArea';
                    myDoughnutChart.update();
                }else{
                    myDoughnutChart.config.type = 'doughnut';
                    myDoughnutChart.update();
                }
             
                
            }
        },
        // plugins:[hoverLable]
    });
// added it today (13/11/22)
    Chart.pluginService.register({
       beforeDraw: function(chart) {
            if(chart.chart.config.type=="doughnut" && chart.canvas.id=="position01"){
            
            chart.clear();
            var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
            
            // ctx.restore();
            var fontSize = (height / 250).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            
            var sum = 0;
            input[1].map(p=>sum+=p);
            var ductCostText = "Material Cost:" ;//was like that:  textX = Math.round((width - ctx.measureText(text).width) / 2),
            var costText = numberWithCommas(sum) + "₪";
            
            textX = 0;// Xcoordinate for the text
            textY = height / 2-120;// the Y coordinant of the cost header
            textY2 = height / 2-80;// the  Y coordinant of the cost text 

            ctx.fillText(ductCostText, textX, textY);
            ctx.fillText(costText, textX, textY2);
           
            
            }else if(chart.chart.config.type=="doughnut" && chart.canvas.id=="position02"){
                chart.clear();
                var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
                
               
                var fontSize = (height / 350).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                
                var ratio = input[1][0]/input[1][1];
                ratio==undefined?ratio=0.000:0;
                
                var ratioText = "יחס ריצוף לשטח:" ;//was like that:  textX = Math.round((width - ctx.measureText(text).width) / 2),
                var ratioNumberText =ratio.toFixed(2);
                
                textX = width/2.5;// Xcoordinate for the text
                textX2 = width/2.2;// Xcoordinate for the text
                textY = height/2.5;// the Y coordinant of the cost header
                textY2 =height/2;// the  Y coordinant of the cost text 

                ctx.fillText(ratioText, textX, textY);
                ctx.fillText(ratioNumberText, textX2, textY2);
            }
     
        }
      });
      // formatting function : format as a price
      function numberWithCommas(x) {
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 

   
    // added it today (13/11/22)

}

