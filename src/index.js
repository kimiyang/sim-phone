import React, { Component } from 'react';
import Button from 'antd/es/button';
import Menu from 'antd/es/menu';
import Dropdown from 'antd/es/dropdown';
import Icon from 'antd/es/icon';
import './index.css';

const supportedPhones = ['iPhone7', 'iPhone7Plus', 'iPhone5', 'iPhoneX'];

class PhoneSimulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: 'iPhone7',
    };
  }

  renderPhoneList = () => {
    const menu = (
      <Menu>
        {
          supportedPhones.map((phone, index) =>
            <Menu.Item key={`phone${index}`} onClick={() => {
              this.setState({phone});
            }}>
              {phone}
            </Menu.Item>
          )
        }
      </Menu>
    );
    const { phone } = this.state;
    return <Dropdown overlay={menu} trigger={['click']}>
      <Button className="ant-dropdown-link">
        {phone} <Icon type="down" />
      </Button>
    </Dropdown>
  }

  render() {
    const { phone } = this.state;
    const { iframeUrl, className } = this.props || {};

    return (
      <div className={`phoneSimulator ${className}`}>
        <div className="demoArea">
          <div className="viewer-container">
            <div className="phoneList">{this.renderPhoneList()}</div>
            <div className={phone}>
              <div
                className="component component-white"
              >
                {
                  iframeUrl ?
                  <iframe
                  id="child_frame"
                  title="react-visualizor-iframe"
                  width="100%"
                  height="100%"
                  src={iframeUrl}
                  style={{borderWidth: 0}}>
                  </iframe>
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneSimulator;
