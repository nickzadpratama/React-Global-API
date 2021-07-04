import React, {Component, Fragment} from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return(
            <Fragment>
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
            </Fragment>
        )
    }
}

export default YoutubeCompPage;