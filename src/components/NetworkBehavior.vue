<template>
    <div class="flex flex-col gap-2">
        <el-card shadow="never">
            <h3>DNS 查询结果</h3>
            <el-table :data="dnsData" border style="width: 100%">
                <el-table-column prop="request" label="请求域名" width="180">
                </el-table-column>
                <el-table-column prop="type" label="记录类型" width="120">
                </el-table-column>
                <el-table-column label="答案">
                    <template v-slot="scope">
                        <el-table :data="scope.row.answers" border style="width: 100%">
                            <el-table-column prop="data" label="数据">
                            </el-table-column>
                            <el-table-column prop="location" label="位置">
                            </el-table-column>
                            <el-table-column prop="asn" label="ASN">
                            </el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <el-card shadow="never">
            <h3>HTTP 请求</h3>
            <el-table :data="httpData" border style="width: 100%">
                <el-table-column prop="url" label="请求 URL">
                </el-table-column>
                <el-table-column prop="method" label="请求方法">
                </el-table-column>
                <el-table-column prop="status" label="状态码">
                </el-table-column>
            </el-table>
        </el-card>

        <el-card shadow="never">
            <h3>网络会话</h3>
            <el-table :data="sessionData" border style="width: 100%">
                <el-table-column prop="ip" label="IP 地址" width="180">
                </el-table-column>
                <el-table-column prop="port" label="端口" width="100">
                </el-table-column>
                <el-table-column prop="scheme" label="协议" width="100">
                </el-table-column>
                <el-table-column prop="location" label="位置">
                </el-table-column>
                <el-table-column prop="asn" label="ASN">
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { ScatterChart } from 'echarts/charts';
import { GeoComponent } from 'echarts/components';
import { ElTable, ElTableColumn, ElPopover, ElButton } from 'element-plus';
import VChart from 'vue-echarts';

use([CanvasRenderer, ScatterChart, GeoComponent]);

export default defineComponent({
    components: {
        VChart,
        ElTable,
        ElTableColumn,
        ElPopover,
        ElButton,
    },
    data() {
        return {
            dnsData: [],
            sessionData: [],
            mapOptions: {},
        };
    },
    props: {
        networkData: {
            type: Object,
            required: true,
        },
    },
    mounted() {

        this.dnsData = this.networkData.dns.data;
        this.sessionData = this.networkData.session.data;
        this.generateMapOptions();
    },
    methods: {
        generateMapOptions() {
            this.mapOptions = {
                geo: {
                    map: 'world',
                    roam: true,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: 'IP Geolocation',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.sessionData.map(session => ({
                            name: session.ip,
                            value: [
                                parseFloat(session.longitude),
                                parseFloat(session.latitude),
                                1 // Size or importance value
                            ],
                            label: {
                                formatter: session.ip + ' (' + session.location + ')'
                            }
                        })),
                        symbolSize: 10,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true,
                                formatter: '{b}',
                                position: 'right'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    }
                ]
            };
        }
    }
});
</script>

<style scoped>
.el-card {
    margin-bottom: 20px;
}
</style>