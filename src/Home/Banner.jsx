import 'rc-banner-anim/assets/index.css';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import { Button } from 'antd';
import { banner } from './data';
const { Element } = BannerAnim;
const { BgElement } = Element;
// import { BaiduMap } from 'react-baidu-map';
// import BMap from 'BMap'
import Page5 from './Page5';
import Page6 from './Page6';
import Page3 from './Page3';
// import   "echarts";
console.log('1111',window.BMAP)
console.log('9999',window)
class Banner extends React.PureComponent {
  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };
  componentDidMount(){
    
    // let map = new window.BMap.Map('mapContainer');
    
    // console.log('map',map)

    // map.centerAndZoom(new window.BMap.Point(116.404,39.915),11);
    // map.addControl(new window.BMap.MapTypeControl());
    // map.setCurrent('北京');
    // map.enableScrollWheelZoom(true);
  }
  render() {
    
    const { isMobile } = this.props;
    const bannerChildren = banner.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag === 'button' ? 'div' : child.tag || 'p';
        const childrenToRender = child.tag === 'button' ?
          <Button><a href={child.link} target="_blank">{child.children}</a></Button> :
          child.children;
        return React.createElement(tag, {
          key: ii.toString(),
          className: child.className,
          style: child.style || {},
        }, childrenToRender);
      });
      if(item.aaa){
        return (
          <Element key={i.toString()}>
            <BgElement
              key="bg"
              className="banner-bg"
              style={{ backgroundImage: `url(${isMobile ? item.imgMobile : item.img})` }}
            />
            <QueueAnim
              key="text"
              className={item.className}
              ease={['easeOutCubic', 'easeInQuad']}
              type={item.queueAnim || 'bottom'}
            >
              {/* {children} */}
              {/* <Page5></Page5> */}
              {/* <Page3></Page3> */}
              <Page6></Page6>
            </QueueAnim>
           
          </Element >); 
      }else{
        return (
          <Element key={i.toString()}>
            <BgElement
              key="bg"
              className="banner-bg"
              style={{ backgroundImage: `url(${isMobile ? item.imgMobile : item.img})` }}
            />
            <QueueAnim
              key="text"
              className={item.className}
              ease={['easeOutCubic', 'easeInQuad']}
              type={item.queueAnim || 'bottom'}
            >
              {/* {children} */}
              {/* <Page5></Page5> */}
              <Page3></Page3>
            </QueueAnim>
           
          </Element >); 
      }
     
    });
    return (
      <div className="banner page-wrapper" >
        <div className="page">
          {/* <div className="logo" /> */}
          <div style={{color:'white',textAlign:'center',lineHeight:"100px",fontSize:'20px'}}>天津滨海新区社区孵化</div>
          <div id="mapContainer"></div>
          
          {/* <BaiduMap id="location" ref="location" style={{height: 300}}
          onSelect={this.onSelect} /> */}
          <BannerAnim type="across" duration={550} ease="easeInOutQuint">
            {bannerChildren}
           
          </BannerAnim>
        
        </div>
      </div>
    );
  }
}

export default Banner;
