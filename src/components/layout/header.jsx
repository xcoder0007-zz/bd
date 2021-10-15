import React from 'react';

import { Button } from 'antd';
import { SettingFilled  } from '@ant-design/icons';


import logo from './../../img/logo.png'

const HeaderComponent = () => (
    <div>
    <div>
        <img
         src={logo} />
         <h1 className="BH1">BabyDoge</h1>
         <span className="earn">Trade Earn Win	NFT	</span>
         <span className="balance">$22.445	</span>
         <Button className="connect-wallet" shape="round" type="primary" size="2">
         CONNECT WALLET
         </Button>
         <SettingFilled  className="settings" />
       
   
    </div>

    </div>
);


export default HeaderComponent;
