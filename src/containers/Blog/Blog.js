import React, {Component} from 'react';
import * as firebase from "firebase";
import config from '../../firebase-config'
import Post from '../../components/Posts/Post/Post'
import NewPost from '../../components/NewPost/NewPost'

import {Row} from 'reactstrap';

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
        posts: []
    }

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
     }
  }

  componentDidMount() {
    let postsRef = firebase.database().ref('posts');
    let _this = this
    postsRef.on('value', function(snapshot) {
      console.log(Object.values(snapshot.val()));
  
      _this.setState({
        posts: Object.values(snapshot.val()),
        loading: false
        });
    });
  }

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something went terribly wrong!</p>
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return <Post
                title={post.title}
                location={post.location}
                author={post.author}
                content={post.content}
                category={post.category}/>;
        });
    }

    return (
      <div className="App">
          <h1>Welcome to the Craigslist/Etsy Clone!</h1>
          <div>
            <NewPost firebaseRef={firebase.database().ref('posts')}/>
          </div>
          <h3>Local Listings</h3> 
          <Row className="cards">
               {posts}
          </Row>
      </div>
    );
  }
  
}

export default Blog;
