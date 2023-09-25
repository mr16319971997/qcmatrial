//chart agg2
new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
    labels: [4.75,9.5,12.5,19,25,37.5],
    datasets: [{
      data: [5,15,40,85,100,100], 
      label: "upper",
      borderColor: "red",
      fill: false
    },
    {
      data: [],
      label: "sample",
      borderColor: "green",
      fill: false
    },
    
    {
      data: [0,0,10,40,90,100],
      label: "lower",
      borderColor: "dodgerblue",
      fill: false
    }
    ]
    },
    options: {
    title: {
    display: true,
    text: ' منحنى تدرج سن 2' 
    }
    }
    });

//chart agg1

new Chart(document.getElementById("line-chart1"), {
 type: 'line',
 data: {
 labels: [2.36,4.75,9.5,12.5,19],
 datasets: [{
   data: [5,15,70,100,100],
   label: "upper",
   borderColor: "red",
   fill: false
 },
 {
   data: [],
   label: "sample",
   borderColor: "green",
   fill: false
 },
 
 {
   data: [0,0,40,90,100],
   label: "lower",
   borderColor: "dodgerblue",
   fill: false
 }
 ]
 },
 options: {
 title: {
 display: true,
 text: ' منحنى تدرج سن 1' 
 },
 }
 });
//chart0
document.getElementById("line-chart0");
 new Chart(document.getElementById("line-chart0"), {
  type: 'line',
  data: {
  labels: [0.150,0.300,0.600,1.18,2.36,4.75,9.5],
  datasets: [{
    data: [10,30,60,85,100,100,100],
    label: "upper",
    borderColor: "red",
    fill: false
  },
  {
    data: [],
    label: "sample",
    borderColor: "green",
    fill: false
  },
  
  {
    data: [2,5,25,50,80,95,100],
    label: "lower",
    borderColor: "dodgerblue",
    fill: false
  }
  ]
  },
  options: {
  title: {
  display: true,
  text: ' منحنى تدرج الرمل' 
  }
  }
  });
//chart proctor
const my = new Chart(document.getElementById("line-chartpro"), {
  type: "scatter",
  data: {
    datasets: [
      {
        data: [
          {
            x: parseFloat(moisturecont[0].innerHTML),
            y: parseFloat(dryunitwt[0].innerHTML),
          },
          {
            x: parseFloat(moisturecont[1].innerHTML),
            y: parseFloat(dryunitwt[1].innerHTML),
          },
          {
            x: parseFloat(moisturecont[2].innerHTML),
            y: parseFloat(dryunitwt[2].innerHTML),
          },
          {
            x: parseFloat(moisturecont[3].innerHTML),
            y: parseFloat(dryunitwt[3].innerHTML),
          },
          {
            x: parseFloat(moisturecont[4].innerHTML),
            y: parseFloat(dryunitwt[4].innerHTML),
          },
        ],
        label: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options:{
    legend:{
      display:false
    },
    scales:{
      yAxes:[{
        scaleLabel:{
          display:true,
          labelString:'الكثافة الجافة',
          fontColor:'green',
          fontSize:12,
        }
      }],
      xAxes:[{
        scaleLabel:{
          display:true,
          labelString:'محتوى الرطوبة',
          fontColor:'green',
          fontSize:12,

        }
      }]
    }
   
  }
});

 