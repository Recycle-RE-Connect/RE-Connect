// 차트를 그럴 영역을 dom요소로 가져온다.
var chartArea = document.getElementById('myChart').getContext('2d');

let today = new Date(); 
let month = today.getMonth() + 1;
let date = today.getDate();

var yesterday1 = new Date(today.setDate(today.getDate() - 1));
var yesterday2 = new Date(today.setDate(today.getDate() - 1));
var yesterday3 = new Date(today.setDate(today.getDate() - 1));
var yesterday4 = new Date(today.setDate(today.getDate() - 1));
var yesterday5 = new Date(today.setDate(today.getDate() - 1));
var yesterday6 = new Date(today.setDate(today.getDate() - 1));

// console.log("yesterday : " + yesterday ) 

const monthDate = [`${month}.${date}`,`${month}.${yesterday1.getDate()}`,`${yesterday1.getMonth()}.${yesterday2.getDate()}`,`${yesterday1.getMonth()}.${yesterday3.getDate()}`,`${yesterday1.getMonth()}.${yesterday4.getDate()}`,`${yesterday1.getMonth()}.${yesterday5.getDate()}`,`${yesterday1.getMonth()}.${yesterday6.getDate()}`];
// 차트를 생성한다. 
var myChart = new Chart(chartArea, {
  type: 'bar',
  data: {
    labels: monthDate,
    datasets: [
      {
        label: '남성',
        data: [120, 134, 115, 126, 170, 192, 186],
        borderColor: 'rgba(64, 73, 255, 1)',
        backgroundColor: 'rgba(64, 73, 255, 0.2)', 
        borderRadius : "25px",
      },
      {
        label: '여성',
        data: [110, 122, 107, 112, 168, 179, 168],
        borderColor: 'rgba(252, 121, 242, 1)',
        backgroundColor: 'rgba(252, 121, 242, 0.2)', 
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
