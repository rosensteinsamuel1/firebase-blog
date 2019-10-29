import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

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
            <li> <NavLink to="/"
                exact
                activeClassName={styles.MyActive}
                activeStyle={{
                  color: '#FA923F',
                  textDecoration: 'underline'
                }}>Home</NavLink></li>
            <li> <NavLink to={{
              pathname: '/new-post'
            }}>New Post</NavLink></li>
            <li></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts}/>
        <Route path="/new-post" component={NewPost} />
        <Route path ="/:id" exact component={FullPost} />
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
