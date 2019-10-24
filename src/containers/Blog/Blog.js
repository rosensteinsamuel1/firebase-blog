import React, {Component} from 'react';
import * as firebase from "firebase";
import config from '../../firebase-config'
import Post from '../../components/Posts/Post/Post'

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
                location={post.location}/>;
        });
    }

    return (
      <div className="App">
          <h1>Welcome to the Craigslist/Etsy Clone!</h1>
          {posts}
      </div>
    );
  }
  
}

export default Blog;
