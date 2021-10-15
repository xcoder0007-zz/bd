import React from 'react';
import './App.css';
import { Layout,Button  } from 'antd';

import { PlusOutlined ,SettingFilled,SyncOutlined} from '@ant-design/icons';


// Header 
import HeaderComponent from './components/layout/header'


// Footer 
import FooterComponent from './components/layout/footer'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
    <Layout>
      <Header>
      <HeaderComponent />
      </Header>
      <div className="switcher">
    <span>Exchange</span>
    <span className="active">Liquidity</span>
    </div>
    <div>
    <div className="group">
  <div className="overlap-grouppoppins-bold-white-10-4px">
    <div className="overlap-group1"><div className="liquidity active"><span>Liquidity</span></div></div>
    <div className="swap">Swap</div>
  </div>
</div>
      

      </div>
<Content>
    <div className="liquidity">
      <div className="liq-head">
      <h1>Your Liquidity</h1><br />
          <span>Remove liquidity to receivetokens back.</span>
          <div className="icon-head-group">
          
            </div>
        </div>

        <div className="liq-content">
        Connect to a wallet to viewyour liquidity.
        </div>

      <div className="liq-foot">
      <Button  icon={<PlusOutlined />}  size={"large"} className="connect-wallet" shape="round" type="primary" size="2">
         Add Liquidity
         </Button>
        </div>
        </div>

</Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </Layout>
  </>
  );
}

export default App;
