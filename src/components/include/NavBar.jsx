import React from 'react';
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../logo.svg';

export default function(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30px"
                            height="30px"
                            className="d-inline-block align-top"
                            />{' '}
                    ToYou</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="ALL" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">의류</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">악세사리</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">전자기기</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">뭐적징</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#product">PRODUCT</Nav.Link>
                    <Nav.Link href="#best">BEST</Nav.Link>
                    <Nav.Link href="#sale">SALE</Nav.Link>


                    </Nav>
                    <Nav>
                    <Nav.Link href="#mypage">마이페이지</Nav.Link>
                    <Nav.Link eventKey={2} href="#basket">
                        장바구니
                    </Nav.Link>
                    <Nav.Link href="#login">로그인</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}