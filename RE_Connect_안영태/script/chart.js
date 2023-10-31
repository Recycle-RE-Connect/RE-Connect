// 차트를 그럴 영역을 dom요소로 가져온다.
var chartArea = document.getElementById('myChart').getContext('2d');

let today = new Date(); 
let month = today.getMonth() + 1;
let date = today.getDate();

const monthDate = [`${month}월`,`${month-1}월`,`${month-2}월`,`${month-3}월`];

// 차트를 생성한다. 
var myChart = new Chart(chartArea, {
  type: 'bar',
  data: {
    labels: monthDate,
    datasets: [
      {
        label: '매칭횟수',
        data: [20, 34, 15, 26],
        borderColor: 'rgba(160, 194, 172, 1)',
        backgroundColor: 'rgba(160, 194, 172, 0.2)', 
        borderRadius : "25px",
      },
    ]
  },
  options: {
    // ⑪축에 관한 설정(Object)
    scales: {
      // ⑫y축에 대한 설정(Object)
      y: {
        // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
        beginAtZero: true
      }
    }
  }
});
