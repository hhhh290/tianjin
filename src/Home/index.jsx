import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
// import Page5 from './Page5';
import Footer from './Footer';
import './static/style';


let isMobile = false;

enquireScreen((b) => {
  isMobile = b;
});

console.log('333',window.BMap)
class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        // <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
         <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        // <Page1 key="page1" isMobile={this.state.isMobile} />,
        // <Page2 key="page2" isMobile={this.state.isMobile} />,
        // <Page3 key="page3" isMobile={this.state.isMobile} />,
        // <Page4 key="page4" />,
        // <Page5 key="page5" />,
        <Footer key="footer" />,
        <DocumentTitle title="天津滨海新区社区孵化" key="title" />,
      ]
    );
  }
}
export default Home;
