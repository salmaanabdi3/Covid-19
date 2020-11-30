// show Chart
const xLabel=[]
const yLabel=[]
showChart()
async function showChart(){
await getData()
const ctx = document.getElementById('OurChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xLabel,
        datasets: [{
            label: 'Covid-19 Data',
            data: yLabel,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)', 
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
// fetching Data 
getData()
async function getData() {
    const api= "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
    const response = await fetch(api);
    const datas = await response.json();
    datas.forEach(data => {
        const {country, infected} =data;
       xLabel.push(country);
       yLabel.push(infected);
    });
}