import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

class Stacked extends React.PureComponent {
  render(){
  const {width, height, currentMode, currentColor} = this.props;

  return (
    <ChartComponent
    width={width}
    height={height}
    id='charts'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    background={ currentMode==='Light'? '#FFF': currentColor }
    chartArea={{border: {width: 0} }}
    tooltip={{enable: true}}
    legendSettings={{background: currentMode==='Light'? '#FFF': currentColor}}
    >
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  )
}
}

export default Stacked