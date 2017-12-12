import _ from 'lodash';
import React from 'react';
import IEcharts from 'react-echarts-v3/src/full.js';

// import IEcharts from 'react-echarts-v3/src/lite.js';
// import 'echarts/lib/chart/bar';

import './App.css';


class Demo01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      loading: false,
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

  onResize = (width, height) => {
    // const that = this;
    // const {
    // } = that.state;
    // const {
    // } = that.props;
    console.log(width, height);
  }

  doLoading = () => {
    const that = this;
    const {
      loading,
      option
    } = that.state;
    // const {
    // } = that.props;

    const data = [];
    for (let i = 0, min = 5, max = 99; i < 6; i++) {
      data.push(Math.floor(Math.random() * (max + 1 - min) + min));
    }

    const opts = _.cloneDeep(option);
    opts.series[0].data = data;

    const style = {
      width: Math.floor(Math.random() * (1024 + 1 - 400) + 400) + 'px',
      height: Math.floor(Math.random() * (768 + 1 - 200) + 200) + 'px'
    };

    that.setState({
      style,
      loading: !loading,
      option: opts
    });
  }

  render() {
    const that = this;
    const {
      style,
      loading,
      option
    } = that.state;
    // const {
    // } = that.props;
    return (
      <div className="echarts">
        <div>
          <button onClick={that.doLoading}>Random</button>
        </div>
        <div className="echart" style={style}>
          <IEcharts
            notMerge
            resizable
            loading={loading}
            option={option}
            onReady={that.onReady}
            onResize={that.onResize}
          />
        </div>
      </div>
    );
  }
}

export default Demo01;
