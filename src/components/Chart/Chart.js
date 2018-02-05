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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Chart.css';
// import mkdata from './mkdata.json';

const Chart: Function = (): React$Element<any> => (
  <div className={s.root}>
    <div className={s.container}>
      ChART COMPONENT Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Ab alias, accusamus praesentium cumque obcaecati unde tempora, excepturi
      autem dolores quas quidem neque fugit, libero tenetur ducimus expedita eos
      deserunt delectus.
    </div>
  </div>
);

export default withStyles(s)(Chart);
