import React, { useState, useEffect } from 'react';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const axios = require('axios');

const { Column, ColumnGroup } = Table;
function Tickets() {
    var alldata=[]
    var listItems
    const [hasError, setErrors] = useState(false);

    // const initialValue = [
    //     { ticketNO: '123', status: 'open', subject: 'Isuue',}];
    
    const [data, setData] = useState({});
   
      useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:5000/tickets',
          );
          setData(result.data);
          setErrors(true);
        };
        fetchData();
        
      }, []);
    
      
    
 
   
     if (!hasError) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div >
        <Table dataSource={data}>
    
     <Column title="Ticket#" dataIndex="_id" key="_id" />
      <Column title="Status" dataIndex="status" key="_id" />
    
    <Column title="Subject" dataIndex="subject" key="_id" />
    <Column title="Customer email" dataIndex="from" key="_id" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <Link to={`/${record._id}`}>Show details</Link>
         
        </span>
      )}
    />
    
  </Table>
       
      </div>
      )
    }
   
}

export default Tickets;
