<template>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例

export default {
    data() {},
    mounted() {
        var myChart = echarts.init(document.getElementById('main'))
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }
            ]
        }
        myChart.setOption(option)
    }
}
</script>