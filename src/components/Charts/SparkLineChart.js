import React from 'react';
import {Inject, SparklineComponent, SparklineTooltip} from "@syncfusion/ej2-react-charts";

const SparkLineChart = ({id, type, data, color, height, width, currentColor}) => {
    return (<SparklineComponent id={id} type={type} height={height} width={width} lineWidth={1} valueType="Numeric"
                                fill={color} border={{color: currentColor, width: 2}} dataSource={data} xName="x"
                                yName="y" tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {visible: true}
    }}>
        <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>);
};

export default SparkLineChart;

