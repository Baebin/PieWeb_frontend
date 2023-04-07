import React, { PureComponent } from 'react'
import '../css/bootstrap.min.css';

import { Nav, Navbar, Container, NavDropdown, NavLink } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/modules/user';

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const is_login = useSelector(state => state.user.is_login);
    console.log(is_login);

    const logout = () => {
        dispatch(actionCreators.logoutAPI(navigate));
    };
    React.useEffect(() => {
        dispatch(actionCreators.loginCheckAPI());
    }, []);
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Piebin Test Server
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        onClick={() => { navigate('/'); }}>
                        Home
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => { navigate('/board'); }}>
                        Board
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => { navigate('/tester'); }}>
                        Tester
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => { navigate('/tester/post'); }}>
                        PostTester
                    </Nav.Link>
                    {
                    is_login?
                    (<Nav>
                        <Nav.Link
                            onClick={() => { navigate('/write'); }}>
                            Write
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => { navigate('/load'); }}>
                            Load
                        </Nav.Link>
                    </Nav>)
                    : null
                    }
                </Nav>
                {
                    is_login?
                    (<Navbar.Collapse className="justify-content-end">
                        <NavDropdown className="navItemWhite" drop='down-centered' menuVariant='white'>
                            <NavDropdown.Item>
                                마이페이지
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={ logout }>
                                로그아웃
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>)
                    :
                    (<Nav>
                        <Nav.Link
                            className="navItemWhite"
                            onClick={() => { navigate('/signin'); }}>
                            로그인
                        </Nav.Link>
                        <Nav.Link
                            className="navItemWhite"
                            onClick={() => { navigate('/signup'); }}>
                            회원가입
                        </Nav.Link>
                    </Nav>)
                }
            </Container>
        </Navbar>
    );
}

export default Header;