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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Chart.css';
import data from './mkdata.json';

const Chart: Function = (): React$Element<any> => (
  <div className={s.root}>
    <div className={s.container}>
      <LineChart width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          hide
          dataKey="d"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="v" />
        <Tooltip />
        <Legend />
        {data.mktData.map((serie: Object): Reac$Element<any> => (
          <Line
            dot={false}
            dataKey="v"
            data={serie.timeSeries.entries}
            name={serie.instrumentId}
            key={serie.instrumentId}
          />
        ))}
      </LineChart>
    </div>
  </div>
);

export default withStyles(s)(Chart);
