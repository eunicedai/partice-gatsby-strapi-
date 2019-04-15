import React from 'react'
import { Link, graphql } from 'gatsby'
import axios from 'axios'


class signup extends React.Component{
	constructor(props){
        super(props);

        this.state = {
            u_id: "",
            u_pwd: ""
        };
    }

    onChange(field, e){
		switch(field){
			case "u_id":
                this.setState({u_id: e.target.value});
                console.warn("item",e.target.value)
				break;
			case "u_pwd":
                this.setState({u_pwd: e.target.value});
                console.warn("item",e.target.value)
				break;
			default:
		}
    }

    async addUser(){
        axios.get('http://localhost:1337/testusers', {
            params:{
                u_id: this.state.u_id
            }
        })
        .then((response) => {
            if(response.data.length == 0){
                axios.post('http://localhost:1337/testusers', {
                    u_id: this.state.u_id,
                    u_pwd: this.state.u_pwd
                })
                .then(function (response) {
                    alert('success!')
                })
                .catch(function (error) {
                    console.log(error);
                });
            }else{
                alert('The account is exist.')
            }  
        })
    }   
    
    render(){
        return(
            <div >
                <h1>Sign up</h1>
                <p>Welcome</p>
                <input type = "text" placeholder="Enter username" value={this.state.u_id} onChange={(e) => {this.onChange("u_id", e)}}/><br/>
                <input type = "password" placeholder="Enter password" value={this.state.u_pwd} onChange={(e) => {this.onChange('u_pwd', e)}}/><br/>
                <button onClick={() => this.addUser()}>ADD</button>
                <Link to="/">Go back to the homepage</Link>
            </div>
        )
    }
}
export default signup

