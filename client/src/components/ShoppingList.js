import React, {Component} from 'react';  /* eslint-disable */
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'; /* eslint-disable */
import {CSSTransition, TransitionGroup} from 'react-transition-group';  /* eslint-disable */
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {
                id: uuid(),
                name: 'Eggs'
            }, {
                id: uuid(),
                name: 'Milk'
            }, {
                id: uuid(),
                name: 'Bread'
            }, {
                id: uuid(),
                name: 'Butter'
            }
        ]
    };

    render() {
        const {items} = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter the name of the item');
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name}]
                            }))
                        }
                    }}
                >
                    Add Items
                </Button>
                <br></br>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState( state => ({
                                                items: state.items.filter( item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;