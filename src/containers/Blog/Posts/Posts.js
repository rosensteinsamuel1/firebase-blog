import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Post from '../../../components/Post/Post'
import styles from './Posts.module.css'
import * as firebase from "firebase";
import config from '../../../firebase-config'

class Posts extends Component {

  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
   }

    this.state = {
      posts: []
    }
  
  }
 
componentDidMount() {
  let postsRef = firebase.database().ref('posts');
  let _this = this;
  postsRef.on('value', function(snapshot) {
    console.log(Object.values(snapshot.val()));
    _this.setState({
      posts: Object.values(snapshot.val())
      });
  });
}

postSelectedHandler = (id) => {
  this.setState({selectedPostId: id});
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
                />;
                // onClick={this.postSelectedHandler()}
        });
    }

    return (
          <Row className={styles.cards}>
               {posts}
          </Row>
    );
  }
}

export default Posts;