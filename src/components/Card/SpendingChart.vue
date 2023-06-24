<template>
  <div class="w-full h-full flex flex-col justify-between px-2">
    <div class="text-white text-xl">
        <h1 class="font-light">Spending</h1>
    </div>
    <div>
        <BarChart :height="230" :chartData="chartConfig" :options="options" />
    </div>
  </div>
</template>

<script>
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
    components: {
        BarChart
    },data(){
        return {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
            chartData: [20, 12, 43, 21, 56, 21,75, 32, 41],
            options: {
                legend: {
                    labels: {
                        fontColor: "blue",
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                        title: {
                            fontColor: "blue",
                            color:'red'
                        }
                    },

                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white", 
                            font: {
                                size: 14 
                            },
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white", 
                            font: {
                                size: 14 
                            },
                        }
                    }
                }
            }
        }
    },
    computed: {
        chartConfig(){
            return {
                labels: [...this.labels],
                datasets: [
                    {
                        data: [...this.chartData],
                        backgroundColor: ['#FDF0CC'],
                        borderRadius: 8
                    }
                ]
            }
        }

    }

}
</script>

<style>

</style>