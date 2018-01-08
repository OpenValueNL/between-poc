import React, { Component } from 'react';
import logo from './logo-jobcatcher.svg';
import logoY from './30888.png';
import './App.css';
import Block from './components/Block';

class App extends Component {
  render() {
    return (
        <div id="wrap">
        <header>
        <div>

                <nav id="menu">
                    <div className="container">
                        <div className="row">
                          <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </div>
                </nav>
            </div>
            <div id="fat-header" className="home" ng-controller="homeController" ng-init="init(1115, 'nl-NL')">
            <div className="background"></div>
   
            <div className="container">
                <div className="row">
                    <div className="figure">
                        <h2>Jobcatcher. The fresh job marketplace</h2>
                        <p>Vang jouw vacature hier</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </header>


        <section id="vacancies">
          <div className="container">

              <div className="row">
                  <Block></Block>
                  
                  {/* <ol>

                      <li className="col-xs-12 col-md-6" ng-repeat="request in requests">
                          <article>
                          <img src={logoY} className="App-logo" alt="logo" />
                                <h1>Iets</h1>
                              <ul>
                                  <li><i className="fa fa-map-marker"></i> <span ></span></li>
                                  <li><i className="fa fa-graduation-cap"></i> <span ></span></li>
                                  <li><i className="fa fa-clock-o"></i> <span ></span><span></span></li>
                                  <li><i className="fa fa-calendar"></i> <bs-date-text format="DD-MM-YYYY" ng-model="request.PublishDate"></bs-date-text></li>
                                  <li ><i className="fa fa-money"></i> <span></span><span ></span></li>
                                  <li><i className="fa fa-users"></i> <span></span></li>
                              </ul>
      
                          </article>
                      </li>
                  </ol> */}

                  <div className="more col-xs-12">
                      <p>Niet de vacature gevonden waarnaar je zocht ?</p>
                      <a  className="btn btn-default" translate="page.home.header.allrequests"></a>
                  </div>
              </div>
          </div>
      </section>
      </div>


    );
  }
}

export default App;
