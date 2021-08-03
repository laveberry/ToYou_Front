import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Header} from "../include/Header";
import Footer from "../include/Footer";
import applePink from "./applePink.png"
import iphone from "./iphone.png"

export default function(){
    return (
        <Container>
        <Row>
            <Col>
                <Header></Header>
            </Col>
        </Row>

        <Row>
            <Col>
                <img src={iphone} width="100%" height="300px" />
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
            구분1
            </Col>
            <Col xs={6} md={4}>
            구분2
            </Col>
            <Col xs={6} md={4}>
            구분3
            </Col>
        </Row>
        <Row>
            <Col>
                컴포넌트 변경될 부분
            </Col>
        </Row>


        <Row>
            <Col><Footer></Footer></Col>
        </Row>
        </Container>
    );
}