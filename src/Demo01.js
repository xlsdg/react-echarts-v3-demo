import React from 'react';
import IEcharts from 'react-echarts-v3';


import './App.css';


class Demo01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    };
  }

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  onReady = (instance, echarts) => {
    // const that = this;
    // const {
    // } = that.state;
    // const {
    // } = that.props;
    console.log(instance, echarts);
  }

  render() {
    const that = this;
    const {
      option
    } = that.state;
    // const {
    // } = that.props;

    return (
      <div className="echarts">
        <IEcharts
          option={option}
          onReady={that.onReady}
        />
      </div>
    );
  }
}

export default Demo01;
