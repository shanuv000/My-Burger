import React, {Component} from 'react';

class ContactData extends Component {
    state = {
        name: '',
        email: '',

        address: {
            street: '',
            postalCode: '',
        }
    }

    render() {
        return (
            <div>
                <h4>Enter Your Data</h4>
                <form action="">
                    <input type="text" name='name' placeholder='Your Name'/>
                    <input type="email" name='email' placeholder='Your email'/>
                    <input type="text" name='street' placeholder='Your Street'/>
                    <input type="text" name='postal' placeholder='Your Postal Code'/>
                </form>
            </div>
        )
    }

}

export default ContactData;