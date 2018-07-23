import React, { Component } from 'react';

class ZillowWidget extends Component {
  render() {
    return (
      <div id="zillow-lender-reputation-small-widget" style={{width: 160, height: 'auto', border: '0px none', padding: 0, margin: '0 auto', font: 'normal normal normal 10px verdana,arial,sans-serif', textTransform: 'none', textIndent: 0, lineHeight: 13, backgroundColor: '#ffffff', letterSpacing: 0, color: '#999999', overflow: 'hidden', textAlign: 'center'}}> <div style={{width: 158, height: 31, overflow: 'hidden', textAlign: 'center', backgroundColor: '#0074e4', border: '1px solid #0074e4', display: 'table-cell', verticalAlign: 'middle', boxSizing: 'content-box'}}> <div style={{color: '#ffffff', fontSize: 14, fontWeight: 'bold', margin: 3}}>Reviews on Zillow</div> </div> <div className="widget-iframe" style={{width: 158, height: 78, border: '1px solid #dddddd', borderTop: '0px none', overflow: 'hidden', boxSizing: 'content-box'}}> <iframe scrolling="no" src="https://www.zillow.com:443/widgets/reputation/Rating.htm?did=rw-widget-container&ezuid=X1-ZUz1bnc6620rgp_46au8&size=narrow&type=iframe&zmod=true" width={158} frameBorder={0} style={{display: 'block'}} height={78} /> </div> <div style={{width: 158, overflow: 'hidden', border: '1px solid #dddddd', borderWidth: '0px 1px 1px 1px', boxSizing: 'content-box', paddingBottom: 10}}> <div id="review" style={{padding: 10}}> <span style={{display: 'none'}}>322629</span> <div style={{textAlign: 'left'}}> <span style={{fontSize: 12, fontWeight: 'normal', margin: '0px 5px', color: '#333333'}}>"My husband and I cannot begin to tell you how much we appreciated the number of hours Sharon and Caron spent with us in person, and by phone, keeping ... <a rel="nofollow" style={{textDecoration: 'none', cursor: 'pointer', color: '#3366bb', fontSize: 12, fontWeight: 'normal'}} href="http://www.zillow.com/profile/Sharon-and-Caron-KW/Reviews/?review=322629" target="_blank"> more</a> "</span> </div> <div style={{marginTop: 5, textAlign: 'left'}}> <div> <img src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/images/rating-stars/rating-stars-500.png" style={{width: 57, height: 11, verticalAlign: 'text-bottom', border: '0px none'}} /><span style={{marginLeft: 5, fontSize: 10, fontWeight: 'normal', color: '#333333'}}>5.0/5.0</span> </div> <div style={{fontSize: 10, fontWeight: 'normal', color: '#999999'}}><span>by <span id="reviewer">user5486038</span></span></div> </div> </div> <div id="review" style={{padding: 10}}> <span style={{display: 'none'}}>572519</span> <div style={{textAlign: 'left'}}> <span style={{fontSize: 12, fontWeight: 'normal', margin: '0px 5px', color: '#333333'}}>"We recently located to Boca Raton from Minnesota, we were planning on renting but thanks to Caron, Sharon and their awesome team, we end up buying a ... <a rel="nofollow" style={{textDecoration: 'none', cursor: 'pointer', color: '#3366bb', fontSize: 12, fontWeight: 'normal'}} href="http://www.zillow.com/profile/Sharon-and-Caron-KW/Reviews/?review=572519" target="_blank"> more</a> "</span> </div> <div style={{marginTop: 5, textAlign: 'left'}}> <div> <img src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/images/rating-stars/rating-stars-500.png" style={{width: 57, height: 11, verticalAlign: 'text-bottom', border: '0px none'}} /><span style={{marginLeft: 5, fontSize: 10, fontWeight: 'normal', color: '#333333'}}>5.0/5.0</span> </div> <div style={{fontSize: 10, fontWeight: 'normal', color: '#999999'}}><span>by <span id="reviewer">alketraz</span></span></div> </div> </div> </div> <div style={{width: 138, overflow: 'hidden', border: '1px solid #dddddd', borderWidth: '0px 1px 1px', backgroundColor: '#fcfcfc', boxSizing: 'content-box', padding: 10}}> <span id="widgetFooterLink"> <a href="https://www.zillow.com/boca-raton-fl/" target="_blank" rel="nofollow"> <img width="118px;" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/logos/Zillowlogo_150x40.gif" /> </a> </span> </div> </div>
    );
  }
}

export default ZillowWidget;