import React from 'react';
import {Collapse} from 'antd';
import './App.css';

const App = () => (
  <Collapse>
    <Collapse.Panel header="testheader">
      testcontent
    </Collapse.Panel>
  </Collapse>
);

export default App;
