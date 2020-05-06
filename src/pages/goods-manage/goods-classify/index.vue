<template>
    <div id="myChart" :style="{width: '900px', height: '400px'}"></div>
</template>

<script>
var echarts = require('echarts')
export default {
    //   name: 'hello',
    data() {
        return {
            //   msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.drawLine()
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '产品分类',
                    left: 'center'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: [
                        '产品1',
                        '产品2',
                        '产品3',
                        '产品4',
                        '产品5',
                        '产品6',
                        '产品7',
                        '产品8'
                    ]
                },
                toolbox: {
                    //show: true,
                    feature: {
                        //mark: {show: true},
                        //dataView: {show: true, readOnly: false},
                        // magicType: {
                        //     //show: true,
                        //     type: ['pie', 'funnel']
                        // },
                        // restore: {show: true},
                        // saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['45%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: false
                        }
                        // emphasis: {
                        //     // label: {
                        //     //     show: false
                        //     // }
                        // },
                        // data: [
                        //     {value: 10, name: '产品1'},
                        //     {value: 5, name: '产品2'},
                        //     {value: 15, name: '产品3'},
                        //     {value: 25, name: '产品4'},
                        //     {value: 20, name: '产品5'},
                        //     {value: 35, name: '产品6'},
                        //     {value: 30, name: '产品7'},
                        //     {value: 40, name: '产品8'}
                        // ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        left: 'center',
                        data: [
                            { value: 10, name: '产品1' },
                            { value: 5, name: '产品2' },
                            { value: 15, name: '产品3' },
                            { value: 25, name: '产品4' },
                            { value: 20, name: '产品5' },
                            { value: 35, name: '产品6' },
                            { value: 30, name: '产品7' },
                            { value: 40, name: '产品8' }
                        ]
                    }
                ]
            })
        }
    }
}
</script>

<style scoped >
</style>
