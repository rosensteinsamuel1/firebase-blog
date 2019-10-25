import React from 'react';
import styles from './Post.module.css';
import {
    Card, CardText, CardBody,
    CardTitle, Row, Col
  } from 'reactstrap';

const post = (props) => (
     
         <Col sm="4">
         <Card body>
            <CardBody>
                <CardTitle>Title: {props.title}</CardTitle>
                <CardText>Content: {props.content}</CardText>
                <CardText>Location: {props.location}</CardText>
                <CardText>Author: {props.author}</CardText>
            </CardBody>
        </Card>
         </Col>
)

export default post;