// 차트를 그럴 영역을 dom요소로 가져온다.
var chartArea = document.getElementById('myChart').getContext('2d');

let today = new Date(); 
let month = today.getMonth() + 1;
let date = today.getDate();

const monthDate = [`${month}.${date}`,`${month}.${date-1}`,`${month}.${date-2}`,`${month}.${date-3}`,`${month}.${date-4}`,`${month}.${date-5}`,`${month}.${date-6 }`];

// 차트를 생성한다. 
var myChart = new Chart(chartArea, {
  type: 'bar',
  data: {
    labels: monthDate,
    datasets: [
      {
        label: '남성',
        data: [201, 145, 94, 178, 192, 89, 116],
        borderColor: 'rgba(99, 161, 255, 1)',
        backgroundColor: 'rgba(99, 161, 255, 0.2)',
        borderRadius : "25px",
      },
      {
        label: '여성',
        data: [112, 82, 74, 91, 172, 84, 69],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
