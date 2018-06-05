import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => 
  <td>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average: {Math.round(props.data.reduce((a,b) => a + b, 0) / props.data.length)}{props.units}</div>
  </td>
 
export default Chart;