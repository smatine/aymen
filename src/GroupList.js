import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class GroupList extends Component {

  constructor(props) {
    super(props);
    this.state = {groups: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch(`/groups`)
      .then(response => response.json())
      .then(data => this.setState({groups: data, isLoading: false}));
  }

  async remove(accId, id) {
    await fetch(`/accounts/${accId}/groups/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updateGroup = [...this.state.groups].filter(i => i.id !== id);
      this.setState({groups: updateGroup});
    });
  }

  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = groups.map(group => {
      
    const link = "/accounts/" + group.account.id; 

    let policies='';    
    if(group.policys && group.policys.length){
        group.policys.map(t => {  
          policies = policies + t.id + ":" + t.name  + "| ";
      });
    }  

    let users='';    
    if(group.users && group.users.length){
        group.users.map(t => {  
          users = users + t.id + ":" + t.name  + "| ";
      });
    }  

    let isUsed = false;
    if(users !== '') isUsed = true;

      return <tr key={group.id}>
        <td style={{whiteSpace: 'nowrap'}}>{group.id}</td> 
        <td>{group.name}</td>
        <td><a href={link}>{group.account.numAccount}</a></td>
        <td>{policies}</td>
        <td>{users}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(group.account.id, group.id)} disabled={isUsed}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>

    });

    const add = `/groups/new`;
  

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to={add}>Add Group</Button>
          </div>
          
          <h3>Group</h3>
          <Table className="mt-4">
            <thead>
            <tr>
      
              <th width="5%">Id</th> 
              <th width="5%">Name</th>
              <th width="5%">Account</th>
              <th width="5%">Policies</th>
              <th width="5%">Users</th>
              
			        <th width="5%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {groupList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
  
}

export default GroupList;