/**
 *  The container that contains the main part of landing page
 * This excludes the nav bar and footer
 */

import React from 'react';
import Featured from './featured';
import BreakLine from '../common/break';
import Header from '../common/header';

const Main = () => (
  <div>
    <Header />
    <Featured />
    <BreakLine />
    <BreakLine />
  </div>
);

export default Main;
