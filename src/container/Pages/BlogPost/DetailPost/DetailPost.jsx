import axios from 'axios';
import React, {Component} from 'react';
import './DetailPost.css';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount() {
        // TODO lakukan ntk mendapatkan cara memperoleh id dsb
        console.log(this.props);

        let id = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            let post = res.data;
            this.setState({
                post : {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;