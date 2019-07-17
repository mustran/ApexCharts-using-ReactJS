import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
    state = {
        options: {
            chart: {
                background: "#f4f6f8"
            },
            xaxis: {
                categories: [
                    "JavaScript",
                    "HTML/CSS",
                    "SQL",
                    "Python",
                    "Java",
                    "Bash/Shell/PowerShell",
                    "C#",
                    "PHP",
                    "C++",
                    "TypeScript",
                    "C",
                    "Ruby",
                    "Go",
                    "Assembly",
                    "Switft",
                    "Kotlin",
                    "R",
                    "VBA",
                    "Objective-C",
                    "Scala",
                    "Rust",
                    "Dart",
                    "Elixir",
                    "Clojure",
                    "WebAssembly"
                ]
            },
            dataLabels: {
                enabled: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            title: {
                text: "Most Popular Technologies of 2019 by StackOverflow",
                align: "center",
                margin: 20,
                offsetY: 20,
                style: {
                    fontSize: "20px"
                }
            }
        },
        series: [
            {
                name: "Most Popular Technologies 2019",
                data: [
                    67.8,
                    63.5,
                    54.4,
                    41.7,
                    41.1,
                    36.6,
                    31.0,
                    26.4,
                    23.5,
                    21.2,
                    20.6,
                    8.4,
                    8.2,
                    6.7,
                    6.6,
                    6.4,
                    5.8,
                    5.5,
                    4.8,
                    3.8,
                    3.2,
                    1.9,
                    1.4,
                    1.4,
                    1.2
                ]
            }
        ]
    };

    toggleHandler = () => {
        this.setState((prevState) => ({
            options: {
                ...prevState.options, 
                plotOptions: {
                    ...prevState.options.plotOptions,
                    bar:{
                        horizontal: !prevState.options.plotOptions.bar.horizontal
                    }
                }
            }
        }))
        console.log(this.state.options.plotOptions.bar.horizontal);
    };

    render() {
        return (
            <React.Fragment>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="100%"
                />
                <button onClick={this.toggleHandler}>Toggle axis</button>
            </React.Fragment>
        );
    }
}

export default PopChart;
