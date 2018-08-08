import React, { Component } from 'react';
import Chart from 'chart.js';
import Listings from './Listings'


class Home extends Component {
  constructor() {
    super();
  }

componentDidMount() {
    
  console.log('loaded');
  var ctx10 = document.getElementById("myChart");
          new Chart(ctx10, {
      type: 'line',
       data:  {
      labels: ["August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"],
      datasets: [
          {
              label: "Monthly Active Users",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(210,107,71,0)",
              borderColor: "rgba(210,107,71,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(210,107,71,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 0,
              borderWidth: 6,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(210,107,71,1)",
              pointHoverBorderColor: "rgba(210,107,71,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: [10, 12, 16, 7, 34, 45, 65, 65, 75, 88, 90],
              spanGaps: false,
          },
          
      ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend:{
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
                                callback: function(label, index, labels) {
                                    return '';
                                }, maxTicksLimit: 6
                            },
            scaleLabel: {
              display: false
            },
            gridLines: {
              display: false,
              drawTicks: false
            }
          }],
          yAxes: [{
            ticks: {
                callback: function(label, index, labels) {
                    return '';
                }
                            },
            scaleLabel: {
              display: false
            },
            gridLines: {
              display: false,
              drawTicks: false
            }
          }]
        }

        

      }

      });

  }


render() {


return (
  <div id="page">
      <section className="home section-1">
        

          <div className="logo-container">
            <div className="logo">
            </div> 
            </div>

            <div className="ticker">
            <div className="ticker-wrapper">
              <div className="avatar">
                <div className="avatar-image"></div>
              </div>
              <ul class="sitedescription">
                <li>
                  <p>A digital product design & development studio by Bryce Thompson in Austin, Texas. <a href="">Learn More</a></p>
                </li>
              </ul>
            
          </div>

          </div>

          <div className="featured">
            <div className="selections">
              <h6>Cases</h6>
              <ul className="selections-cases">
                <li><a href="">Atlassian</a></li>
                <li><a href="">Valera Health</a></li>
                <li><a href="">Code My Views</a></li>
                <li><a href="">Alter G</a></li>
                <li><a href="">Heyl Williams</a></li>
                <li><a href="">Grace Hill</a></li>
              </ul>

              

            </div>

            <div className="stats-container">
              <h1>Cognitive Behavioral Therapy</h1>
              <h2>with Valera Health</h2>
              <div className="graph-container">
                <canvas id="myChart" width="400" height="400"></canvas>
                <div className="chart-bg"></div>
              </div>

              <div className="quants">
                <div className="quants-1">
                  <h5>Project<br />Duration</h5>
                  <span class="num">10</span><span>mo</span>
                </div>
                <div className="quants-2">
                  <h5>Userbase<br />Size</h5>
                  <span class="num">1.2</span><span>m</span>
                </div>
                <div className="quants-3">
                    <h5>Activity<br />Increase</h5>
                    <span class="num">212</span><span>%</span>
                </div>

              </div>

            </div>

            <div className="focus-container">
           

              <div className="right">
                <div className="focus-rotator-container">

                  <ul className="focus-list-1">
                  
                    <div className="interior">
                      <li>
                        
                        <h5 class="icon strategy">Strategy</h5>
                      </li>
                       <li>
                        
                        <h5 class="icon healthcare">Healthcare</h5>
                      </li>
                       <li>
                        
                        <h5 class="icon marketingexp">Marketing Experience</h5>
                      </li>
                    </div>

                    <div className="interior">
                       <li>
                        
                        <h5 class="icon wordpress">Wordpress</h5>
                      </li>
                       <li>
                        
                        <h5 class="icon saas">SaaS</h5>
                      </li>
                       <li>
                        
                        <h5 class="icon userresearch">User Research</h5>
                      </li>
                    </div>

                  </ul>

                </div>
              </div>


            </div>

          </div>

        


        
          <div className="featured-image-container">
            <div className="featured-description-container">
              <div className="featured-description">
                <p>In 2017, Foundry worked onsite with Atlassian Community to increase community engagement by getting answers to their questions, fast.<a className="button-cta" href="">Read Case</a></p>
                

              </div>

              <div className="pagination-container">
                <div className="pagination-left">
                  
                </div>

                <div className="pagination-right">
                
                </div>

              </div>

            </div>
            <div id="video-container">
                <video loop  autoPlay muted>
                    <source src="https://r3---sn-q4fl6nss.c.drive.google.com/videoplayback?id=9144a0eb767970c2&itag=22&source=webdrive&requiressl=yes&pl=18&sc=yes&ttl=transient&ei=CmlfW5-iKImQuAW-v6e4Ag&susc=dr&driveid=1wvqlJvUfCkSyA2pznu5jZV14pIiKCN18&app=texmex&mime=video/mp4&lmt=1532979426375126&ip=24.55.27.245&ipbits=0&expire=1532993866&cp=QVNIVEpfUlhUR1hOOjBxQm5xYy03Wkd1&sparams=app,cp,driveid,ei,expire,id,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,requiressl,sc,source,susc,ttl&signature=52067E1F5C9886001B5D50AFF517390D07764A3B.61121A6C7BB4ADDCC1CC902C5C500E97DD4E9352&key=cms1&cpn=4bzIMeaciKj1V9Hf&c=WEB_EMBEDDED_PLAYER&cver=20180726&redirect_counter=1&cm2rm=sn-q4fel77s&fexp=23751407&req_id=12e381a94629a3ee&cms_redirect=yes&mm=34&mn=sn-q4fl6nss&ms=ltu&mt=1532979397&mv=m" type="video/mp4" />
                    <source src="https://r6---sn-q4fl6nly.c.drive.google.com/videoplayback?id=7957a6bd65398ea8&itag=22&source=webdrive&requiressl=yes&mm=30&mn=sn-q4fl6nly&ms=nxu&mv=m&pl=18&sc=yes&ttl=transient&ei=q3hfW-i3FNKguAWftI3oBA&susc=dr&driveid=1wlXpiBhkgcDqDT6KZyAv0_u18G3ZreQj&app=texmex&mime=video/mp4&lmt=1532979050374532&mt=1532983401&ip=24.55.27.245&ipbits=0&expire=1532997867&cp=QVNIVEpfVlhUSFhOOjBxQnJxYy03Wkd1&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ttl,ei,susc,driveid,app,mime,lmt,cp&signature=515304D7AFC70249E3CB0BABDE42BCC3BDDAFAD8908453BC7FA9C42C992584C6.2C8A1644E9F7956814845E34DD5C95760A94B905B5AF262D651CC190000957CF&key=us0&cpn=sLnM9nFruQs6sPzx&c=WEB_EMBEDDED_PLAYER&cver=20180726" type="video/mp4" />
                    <source src="https://ak7.picdn.net/shutterstock/videos/31674517/preview/stock-footage-the-human-brain-plexus-with-numbers-beautiful-background-the-concept-of-science-medicine-and.webm" type="video/mp4" />
                    {/*<source src="https://ak1.picdn.net/shutterstock/videos/16962211/preview/stock-footage-beautiful-suburbs-with-stunning-houses-and-landscaped-yards-early-morning-aerial-view.webm" type="video/mp4" />*/}
                      
                </video>
              </div>

              <div className="vertical-rule"></div>
          </div>


        

          <div className="grid-base">
            <div className="grid-1"></div>
            <div className="grid-2"></div>
             <div className="grid-3"></div>
          </div>


      </section>

      <section className="home section-2">

          <div className="process-module ready">
           
            <div className="process-module-container box-shadow">

              <ul><li>
                <h1>Kickoff</h1>
                <div className="left-col"></div>

                <div className="right-col"></div>    
              </li></ul>
              
            </div>

          </div>

      </section>
    </div>
    )
  }


}




export default Home



