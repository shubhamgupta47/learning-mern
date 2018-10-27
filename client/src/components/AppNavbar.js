import React, { Component } from 'react';
import {    
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
    /**********This is one way of writing with 'this' binding as custom methods do not have 
                'this' available as it is there in  default methods like render or component lifecycle methods
                 like componentDidMount() etc. have. So we bind this.

                If we don't want to bind, we can use arrow function, then we don't even need constructor.
    ********** */
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     }
    //     this.toggle = this.toggle.bind(this);
    // }

    // toggle() {
    //     this.setState({
    //         isOpen: true
    //     });
    // };
    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"> Shopping List </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/shubhamgupta47/learning-mern"  target="_blank">
                                        Github
                                    </NavLink>                            
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>                
                </Navbar>
            </div>
        );        
    }

}

export default AppNavbar;
