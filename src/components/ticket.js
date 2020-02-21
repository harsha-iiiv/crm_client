import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Icon, Input, message, Button } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const { TextArea } = Input;

const axios = require('axios');

const { Column, ColumnGroup } = Table;

class Ticket extends Component {
   state = {
       data : {},
       hasError: false,
       formData: 'We will you reply back within 2 business days'
   }
    componentDidMount() {
        const fetchData = async () => {
                  const result = await axios.get(
                    `http://localhost:5000/tickets${this.props.match.url}`,
                  );
                  this.setState({
                      data : result.data,
                      hasError: true
                  })
                  
                };
                fetchData();
                console.log()
    }

    onChange = e => this.setState({formData: e.target.value });
    
    success = () => {
        message.success('Ticket is closed successfully');
      };

    handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json"
            } 
          };
         this.success()
          const body = JSON.stringify({ msg: this.state.formData });
        
         const result = await axios.post(
            `http://localhost:5000/tickets${this.props.match.url}/comment`, body, config
          );
            console.log('Received values of form: ', this.state.formData );
          }
       

    render(){

        if(!this.state.hasError)
        return (
            <h2>Please wait</h2>
        )
      else{  

   return (


       <div>
           <Layout>
           <Header>Header</Header>
           <Content>
   <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item >
          
        <TextArea
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Your Comment"
              name="password"
              value={this.state.formData}
              onChange={e => this.onChange(e)}
              rows={4} 
             
            />
          
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Comment
          </Button>
        </Form.Item>
      </Form>
       </Content>
       <Footer>Footer</Footer>
 
      </Layout>
       </div>
   )
      }
    }
}

export default Ticket;
