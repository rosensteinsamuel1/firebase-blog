import React, {Component} from 'react';
import * as firebase from "firebase";

import {Route} from 'react-router-dom'
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'

import styles from './Blog.module.css'

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
        posts: []
    }

    // Initialize Firebase
  
  }

  render() {

    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
            <li>
              <a href="/">Home</a>
              </li>
              <li>
              <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts}/>
          {/* <h1>Welcome to the Craigslist/Etsy Clone!</h1>
          <div>
            <NewPost firebaseRef={firebase.database().ref('posts')}/>
          </div>
          <Posts firebaseRef={firebase.database().ref('posts')} /> */}
      </div>
    );
  }
  
}

export default Blog;
