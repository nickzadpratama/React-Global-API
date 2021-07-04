// library
import React, {Component, Fragment, createContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//  pages
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../Pages/Hooks/Hooks';
import GlobalProvider from '../../context/context';

// style
import './Home.css';

class Home extends Component {

    render() {
        return (
            <Router>
                {/* <div>
                    <p>YouTube Component</p>
                    <hr />
                    <YoutubeComp 
                        time="7.12" 
                        title="Tutorial React"
                        desc="2x ditonton"/>
                    <YoutubeComp 
                        time="8.12" 
                        title="Tutorial Codeigniter"
                        desc="5x ditonton"/>
                    <YoutubeComp 
                        time="5.04" 
                        title="Tutorial JS"
                        desc="10x ditonton"/>
                    <YoutubeComp 
                        time="4.50" 
                        title="Tutorial PHP"
                        desc="1x ditonton"/>
                    <YoutubeComp />
                    <p>Counter</p>
                    <hr />
                    <Product />
                    
                    <p>LifeCycle Component</p>
                    <hr />
                    <LifeCycleComp />

                    <p>Blog Post</p>
                    <hr />
                    <BlogPost />
                </div> */}

                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);