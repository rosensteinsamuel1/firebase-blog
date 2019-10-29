import React from 'react';
import styles from './Post.module.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Col
  } from 'reactstrap';

const post = (props) => (
         <Col className = {"col-sm-4 d-flex align-items-stretch"}>
          <div className = {styles.cards} >
              {/* " sm="4"> */}
         <Card body>
            <CardBody > 
                <CardImg src= "https://images.craigslist.org/00t0t_1gFjaagzafS_600x450.jpg" alt="">
                </CardImg>
                <CardTitle className={styles.cardTitle}><b>{props.title}</b></CardTitle>
                <hr></hr>
                <CardText>{props.content}</CardText>
                <CardText>Location: {props.location}</CardText>
                <CardText>Author: {props.author}</CardText>
            </CardBody>
        </Card>
          </div>
         
        </Col>
)

export default post;