import React, { Component } from 'react';



import Listings from './Listings'


class Home extends Component {
  constructor() {
    super();
  }

componentDidMount() {
    
  console.log('loaded');

  }
render() {


return (
  <div id="page">
      <section className="home section-1">
        

          
            <div className="logo"></div> 

            <div className="ticker">
            <div className="ticker-wrapper">
              <div className="avatar">
                <div className="avatar-image"></div>
              </div>
              <ul>
                <li>
                  <p>A digital product design & development studio by Bryce Thompson in Austin, Texas.<a href="">Learn More</a></p>
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
              <h1>Get Users Talking</h1>
              <div className="graph-container">
                {
                /*
                Insert graph here
                */
                }
              </div>

            </div>

            <div className="focus-container">
              <div className="left">
                <h6>Focus Areas</h6>
              </div>

              <div className="right">
                <div className="focus-rotator-container">
                  <ul className="focus-list-1">
                    <div className="interior">
                      <li>
                        <span className="icon strategy"></span>
                        <h5>Strategy</h5>
                      </li>
                       <li>
                        <span className="icon healthcare"></span>
                        <h5>Healthcare</h5>
                      </li>
                       <li>
                        <span className="icon marketingexp"></span>
                        <h5>Marketing Experience</h5>
                      </li>
                    </div>

                    <div className="interior">
                       <li>
                        <span className="icon wordpress"></span>
                        <h5>Wordpress</h5>
                      </li>
                       <li>
                        <span className="icon saas"></span>
                        <h5>SaaS</h5>
                      </li>
                       <li>
                        <span className="icon userresearch"></span>
                        <h5>User Research</h5>
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

          </div>


        

          <div className="grid-base">
            <div className="grid-1"></div>
          </div>


      </section>

      <section className="home section-2">

      </section>
    </div>
    )
  }
}


export default Home


