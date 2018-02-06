/**
 * @flow
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { withHandlers, compose, withState } from 'recompose';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Chart.css';
import data from './mkdata.json';

type ChartProps = {
  sliderChangeHandler: Function,
  sliderValue: number, // eslint-disable-line react/no-unused-prop-types
  setSliderValue: Function, // eslint-disable-line react/no-unused-prop-types
};

const COLORS: Array<string> = [
  '#84A5EE',
  '#8585D9',
  '#D3EB50',
  '#ABDB69',
  '#8BC79C',
  '#94CFE2',
];

const Chart: Function = ({
  sliderValue,
  sliderChangeHandler,
}: ChartProps): React$Element<any> => (
  <div className={s.root}>
    <input onChange={sliderChangeHandler} value={sliderValue} type="range" />
    <span className={s.factor}>factor: {sliderValue}</span>
    <div className={s.container}>
      <div className={s.banner}>
        <LineChart width={600} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            interval={450}
            dataKey="d"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="v" />
          <Tooltip />
          <Legend />
          {data.mktData.map((serie: Object, i: number): Rect$Element<any> => (
            <Line
              dot={false}
              dataKey="v"
              data={
                sliderValue !== 1
                  ? serie.timeSeries.entries.map((entry: Object): Object => ({
                      d: entry.d,
                      v: entry.v * sliderValue,
                    }))
                  : serie.timeSeries.entries
              }
              name={serie.instrumentId}
              key={serie.instrumentId}
              stroke={COLORS[i]}
            />
          ))}
        </LineChart>
      </div>
    </div>
  </div>
);

const extendWithHandlers: Function = withHandlers({
  sliderChangeHandler: (props: ChartProps): Function => (
    event: SyntheticEvent,
  ): void => props.setSliderValue(parseInt(event.target.value, 10)),
});

export default withStyles(s)(
  compose(withState('sliderValue', 'setSliderValue', 1), extendWithHandlers)(
    Chart,
  ),
);
