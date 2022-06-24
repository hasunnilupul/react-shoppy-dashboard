import React from 'react';
import {
    AccumulationChartComponent,
    AccumulationDataLabel,
    AccumulationLegend,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationTooltip,
    Inject,
    PieSeries
} from "@syncfusion/ej2-react-charts";

import {useStateContext} from '../../contexts/ContextProvider';

const PieChart = ({id, data, legendVisibility, height}) => {
    const {currentMode} = useStateContext();

    return (
        <AccumulationChartComponent
            id="pie-chart"
            legendSettings={{visibility: legendVisibility, background: 'white'}}
            height={height}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            tooltip={{enable: true}}>
            <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Sale"
                    dataSource={data}
                    xName="x"
                    yName="y"
                    innerRadius="40%"
                    startAngle={0}
                    endAngle={360}
                    radius="70%"
                    explode
                    explodeOffset="10%"
                    explodeIndex={2}
                    dataLabel={{
                        visible: true,
                        name: 'text',
                        position: 'Inside',
                        font: {
                            fontWeight: '600',
                            color: '#fff',
                        },
                    }}/>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
};

export default PieChart;

