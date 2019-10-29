import React, { Component } from 'react';

import styles from './FullPost.module.css';
import * as firebase from 'firebase';
import config from '../../../firebase-config'

class FullPost extends Component {

    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
    }

    state = {
        loadedPost: null,
    }

    // Fetch data whenever new props are received
    componentDidMount() {
        let _this = this;
        console.log(this.props.match.params.id)
        let key = this.props.match.params.id;
        var ref = firebase.database().ref("posts/" + key);
        // Test for the existence of certain keys within a DataSnapshot
        ref.once("value")
        .then(function(snapshot) {
            _this.setState({loadedPost: snapshot.val()});
            console.log(snapshot.val())
        });
        // if (this.props.id) {
        //     // Only call setState if a new post was loaded. Otherwise, the componentDidUpdate 
        //     // method will have an infinite loop because it setState calls componentDidUpdate
        //     if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        //         axios.get('/posts/' + this.props.id)
        //             .then(response => {
        //             this.setState({loadedPost: response.data});
        //         });
        //     }
        // }
    }

    deletePostHandler = (id) => {
        // axios.delete('/posts/' + this.props.id)
        //             .then(response => {
        //             console.log(response);
        //         });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>LOADING</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>LOADING!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.location}</p>
                    <p>{this.state.loadedPost.category}</p>
                    <p>{this.state.loadedPost.author}</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;