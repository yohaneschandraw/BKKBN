var canvas = document.getElementById("barChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "#0F274B";
Chart.defaults.global.defaultFontSize = 11;

// Data with datasets options
var data = {
    labels: [
        "Wed\n01/07",
        "Thu\n02/07",
        "Fri\n03/07",
        "Sat\n04/07",
        "Sun\n05/07",
        "Mon\n06/07",
        "Tue\n07/07"
    ],
    datasets: [
        {
            label: "Member",
            fill: true,
            backgroundColor: [
                "#FFB508",
                "#FFB508",
                "#FFB508",
                "#FFB508",
                "#FFB508",
                "#FFB508",
                "#FFB508"
            ],
            data: [50, 60, 34, 79, 88, 124, 150]
        },
        {
            label: "Guest",
            fill: true,
            backgroundColor: [
                "#0F274B",
                "#0F274B",
                "#0F274B",
                "#0F274B",
                "#0F274B",
                "#0F274B",
                "#0F274B"
            ],
            data: [44, 37, 59, 102, 100, 143, 88]
        }
    ]
};

// Notice how nested the beginAtZero is
var options = {
    title: {
        display: true,
        text: "Charts",
        position: "bottom"
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};

// added custom plugin to wrap label to new line when \n escape sequence appear
var labelWrap = [
    {
        beforeInit: function (chart) {
            chart.data.labels.forEach(function (e, i, a) {
                if (/\n/.test(e)) {
                    a[i] = e.split(/\n/);
                }
            });
        }
    }
];

// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
    plugins: labelWrap
});
