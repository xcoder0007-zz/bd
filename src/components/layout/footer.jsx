import React from 'react';

import { Row, Col,Tooltip } from 'antd';

import logo from './../../img/logo.png'
import doggy from './../../img/footer-doggy.png'

const data = [
  {
    title: 'ABOUT',
  },
  {
    title: 'HELP',
  },
  {
    title: 'DEVELOPERS',
  },

];



const FooterComponent = () => (
    <div>
        <div className="doggy">
        <Tooltip color="#003B59" visible={true} placement="topLeft" title="Need help ? ">
        <img src={doggy}/>
        </Tooltip>
        </div>
  <Row className="FooterComponent">
  <Col xs={24} xl={6}>
  <img src={logo} />
    </Col>
    <Col xs={24} xl={6}>
    ABOUT
    </Col>
    <Col xs={24} xl={6}>
    HELP
    </Col>
    <Col xs={24} xl={6}>
    DEVELOPERS
    </Col>
    <span>CONTACTBLOGCOMMUNITYCAKE TOKENONLINE STORESUPPORTTROUBLESHOOTINGGUIDESGITHUBTROUBLESHOOTINGBUGGITHUBTROUBLESHOOTINGBUG BOUNTYAUDITSCAREERS</span>

  </Row>

    </div>
);


export default FooterComponent;
