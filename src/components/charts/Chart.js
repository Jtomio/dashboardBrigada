let ctx = document.getElementsByClassName("line-chart");

//type, data e options

{
  /* <canvas className="line-chart"></canvas>; */
}

let Chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "PTE - 2021",
        data: [5, 10, 5, 14, 20, 15, 6, 14, 8, 12, 15, 5, 10],
        borderWidth: 6,
        boderColor: "rgba(77,166,253,0.85)",
        backgroundColor: "transparent",
      },
      {
        label: "PTE - 2022",
        data: [15, 40, 15, 64, 30, 45, 36, 24, 38, 22, 75, 35, 20],
        borderWidth: 6,
        boderColor: "rgba(0,16,153,0.85)",
        backgroundColor: "transparent",
      },
    ],
  },
});

export default Chart;
