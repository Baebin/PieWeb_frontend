import React, { PureComponent } from 'react';
import axios from 'axios';

class Tester extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("/api/tester")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                });
            }).catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                Main
                <br/>
                Message: {this.state.message}
            </div>
        )
    }
}

export default Tester;