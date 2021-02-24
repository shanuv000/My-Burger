import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
            },
            pinCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                },
                valid: false,
            },
            // City: 'Patna',
            Country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
            },
            deliveryMode: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Select Delivery Mode'},
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},

                    ]
                },
                value: '',

            },
        },


        loading: false,
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minlength) {
            isValid = value.length >= rules.minlength;
        }
        if (rules.maxlength) {
            isValid = value.length <= rules.maxlength;
        }
        return isValid;
    }
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true})
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,

        }

        axios.post('/orders.json', orders)
            .then(response => {
                    this.setState({loading: false})
                    this.props.history.push('/');
                }
            )


            .catch(error => this.setState({loading: false}));
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }

        let form = (<form action="" onSubmit={this.orderHandler}>
            {/*<Input elementType="..." elementConfig="..." value='...'/>*/}
            {
                formElementArray.map(formElement => (
                    <Input key={formElement.id}
                           elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))
            }

            <Button btnType='Success'>Order</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;