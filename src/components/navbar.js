import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    Button,
    InputGroup,
    Input,
    InputGroupAddon
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <Navbar color='dark' expand='md' className='navbar'>
                <NavbarBrand style={{ color: 'white' }}>My Flickr</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem style={{display: 'flex',marginRight: '20px', alignItems: 'center'}}>
                            <Link to='/' style={{color:'white', textDecoration: 'none'}}>Explorer</Link>
                        </NavItem>
                        <NavItem>
                            <InputGroup>
                                <Input placeholder='Enter tag name' onChange={this.handleChange}/>
                                <InputGroupAddon addonType='append'>
                                    <Button color="secondary" onClick={()=>this.props.onClick(this.state.value)}>
                                        <Link to={`/searchTag/${this.state.value}`}
                                        style={{color:'white', textDecoration: 'none'}}
                                        >Search Tag</Link>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;