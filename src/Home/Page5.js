/**
 * 柱状图
 */
import React ,{Component} from 'react';
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
class Bar extends Component{
    constructor(props){
        super(props)
        this.state = {
            sales:[5, 20, 36, 10, 10, 20],
            stores:[15, 120, 36, 110, 110, 20]
        }
    }
    /**
     * 柱状图的配置对象
     */
    getOption = (sales,stores) =>{
        return {
            // 图表主标题
        title: {
            // 文本
            text: '北京',
            // 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            top: 25, 
            // 值: 'left', 'center', 'right' 同上
            left: 'center',
            // 文本样式
            textStyle: {
              // 字体大小
              fontSize: 25,
              // 字体粗细
              fontWeight: 650,
              // 字体颜色
              color: '#fff'
            }
          },
          // 提示框组件
          tooltip: {
            // 触发类型, 数据项图形触发
            trigger: 'item', 
            // 使用函数模板，传入的数据值 ——> value: number | Array
            formatter: function (val) {
              return val.data.name + '<br>人口数量: ' + val.data.value + '万'
            }
          },
          // 视觉映射组件
          visualMap: {
            // continuous 类型为连续型
            type: 'continuous', 
            show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
            // 指定 visualMapContinuous 组件的允许的最小/大值 min/max 必须用户指定
            min: 0,  
            // min,max 形成了视觉映射的定义域
            max: 400, 
            // 文本样式
            textStyle: {
              // 字体大小
              fontSize: 15,
              // 字体颜色
              color: '#fff'
            },
            // 拖拽时，是否实时更新
            realtime: false, 
            // 是否显示拖拽用的手柄
            calculable: true, 
            // 定义在选中范围中的视觉元素
            inRange: {
              // 图元的颜色
              color: ['#9fb5ea', '#e6ac53', '#74e2ca', '#85daef', '#9feaa5', '#5475f5'] 
            }
          },
          series: [
            {
                // 类型
              type: 'map', 
              // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
              map: '北京',
              // 地图类型
              mapType: 'province',
              // 是否开启鼠标缩放和平移漫游 默认不开启 
              // 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
              roam: false,
              // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
              top: 70, 
              // 图形上的文本标签
              label: {
                show: false // 是否显示对应地名
              },
              // 地图区域的多边形 图形样式
              itemStyle: {
                   // 地图区域的颜色 如果设置了visualMap, 这个属性将不起作用
                areaColor: '#7B68EE', 
                // 描边线宽 为 0 时无描边
                borderWidth: 0.5, 
                // 图形的描边颜色 支持的颜色格式同 color
                borderColor: '#000', 
                // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                borderType: 'solid' 
              },
              // 高亮状态
              emphasis: {
                // 文本标签
                label: {
                  // 是否显示标签
                  show: true, 
                  // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                  color: '#fff'
                },
                // 图形样式
                itemStyle: {
                  // 地图区域的颜色
                  areaColor: '#FF6347' 
                }
              },
              // 地图系列中的数据内容数组，数组项可以为单个数值
              data: [
                { name: '延庆区', value: 31.4, lng: 115.981186, lat: 40.462706 },
                { name: '怀柔区', value: 38.4, lng: 116.63853, lat: 40.322563 },
                { name: '密云区', value: 47.9, lng: 116.849551, lat: 40.382999 },
                { name: '昌平区', value: 196.3, lng: 116.237832, lat: 40.226854 },
                { name: '顺义区', value: 102, lng: 116.663242, lat: 40.1362 },
                { name: '平谷区', value: 42.3, lng: 117.128025, lat: 40.147115 },
                { name: '门头沟区', value: 30.8, lng: 116.108179, lat: 39.94648 },
                { name: '海淀区', value: 369.4, lng: 116.304872, lat: 39.96553 },
                { name: '石景山区', value: 65.2, lng: 116.229612, lat: 39.912017 },
                { name: '西城区', value: 129.8, lng: 116.372397, lat: 39.918561 },
                { name: '东城区', value: 90.5, lng: 116.42272, lat: 39.934579 },
                { name: '朝阳区', value: 395.5, lng: 116.449767, lat: 39.927254 },
                { name: '通州区', value: 137.8, lng: 116.662928, lat: 39.917001 },
                { name: '大兴区', value: 156.2, lng: 116.348053, lat: 39.732833 },
                { name: '房山区', value: 104.6, lng: 116.149892, lat: 39.755039 },
                { name: '丰台区', value: 232.4, lng: 116.293105, lat: 39.865042 }
              ]
            }
          ]
  
        };
    }
    render(){
        const {sales,stores} = this.state;
        return(
            <div>
                <Card>
                    <ReactEcharts option={this.getOption(sales,stores)} style={{height:'550px'}}/>
                </Card>
            </div>
        )
    }
}
export default Bar;