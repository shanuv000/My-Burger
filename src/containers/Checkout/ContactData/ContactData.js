import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../../axios-orders";

class ContactData extends Component {
    state = {
        name: '',
        email: '',

        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true})
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            currentTime: this.state.currentDateTime,
            customer: {
                name: 'American Sinha',
                address: {
                    street: 'Kumhrar',
                    pinCode: 800006,
                    City: 'Patna',
                    Country: 'India'
                },
                email: 'shanuvatika@gmail.com'
            }, deliveryPartner: 'eKart',
            deliveryMode: 'Fast'
        }

        axios.post('/orders.json', orders)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => this.setState({loading: false, purchasing: false}));
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data</h4>
                <form action="">
                    <input className={classes.Input} type="text" name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type="email" name='email' placeholder='Your email'/>
                    <input className={classes.Input} type="text" name='street' placeholder='Your Street'/>
                    <input className={classes.Input} type="text" name='postal' placeholder='Your Postal Code'/>
                    <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        )
    }

}

export default ContactData;