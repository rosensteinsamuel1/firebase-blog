import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Post from '../../../components/Post/Post'
import styles from './Posts.module.css'
import * as firebase from "firebase";
import config from '../../../firebase-config';
import {Link} from 'react-router-dom';

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
  console.log(this.props)
  let postsRef = firebase.database().ref('posts');
  let _this = this;
  postsRef.on('value', function(snapshot) {
    console.log(Object.values(snapshot.val()));
    let values = Object.values(snapshot.val());
    let keys = Object.keys(snapshot.val());
    values.map( (obj, i) => (
      values[i].key = keys[i]
    ))
    console.log(values)
    _this.setState({
      posts: values
      });
  });
}

postSelectedHandler = (key) => {
  this.setState({selectedPostId: key});
}

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something went terribly wrong!</p>
    if (!this.state.error) {
        posts = this.state.posts.map( (post,i) => {
            return <Link to={'/' + post.key} id= {post.key}>
            <Post
                title={post.title}
                location={post.location}
                author={post.author}
                content={post.content}
                clicked={() => this.postSelectedHandler(post.id)}
                />;
            </Link>
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