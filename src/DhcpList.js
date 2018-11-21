import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class DhcpList extends Component {

  constructor(props) {
    super(props);
    this.state = {dhcps: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    
    fetch(`/dhcps`)
      .then(response => response.json())
      .then(data => this.setState({dhcps: data, isLoading: false}));
  }

  async remove(accId, id) {
    await fetch(`/vpcs/${accId}/dhcps/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updateDhcp = [...this.state.dhcps].filter(i => i.id !== id);
      this.setState({dhcps: updateDhcp});
    });
  }

  render() {
    const {dhcps, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const dhcpList = dhcps.map(dhcp => {
      
      const link = "/vpcs/" + dhcp.vpc.id; 
      const linkAccount = "/accounts/" + dhcp.account.id;

      return <tr key={dhcp.id}>
        <td style={{whiteSpace: 'nowrap'}}>{dhcp.id}</td>


        <td>{dhcp.name}</td>
        <td><a href={linkAccount}>{dhcp.account.numAccount}</a></td>

        <td>{dhcp.domainName}</td>
        <td>{dhcp.domainNameServers}</td>
        <td>{dhcp.ntpServers}</td>
        <td>{dhcp.netBiosNameServers}</td>
        <td>{dhcp.netBiosNodeType}</td>
        

        <td><a href={link}>{dhcp.vpc.name}</a></td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="secondary" tag={Link} to={"/dhcp/" + dhcp.id + "/tags" }>Tags</Button>&nbsp;&nbsp;
            <Button size="sm" color="primary" tag={Link} to={"/dhcps/" + dhcp.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(dhcp.vpc.id, dhcp.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    const add = `/dhcps/new`;
    //const trig = `/trigrammes`;

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to={add}>Add Dhcp Options Sets</Button>
          </div>
          
          <h3>Dhcp Options Sets</h3>
          <Table className="mt-4">
            <thead>
            <tr>
            
              <th width="5%">Id</th>
              <th width="5%">Name</th>
              <th width="5%">Account</th>
              

              <th width="5%">Domain Name</th>
              <th width="5%">Domain Name Servers</th>
              <th width="5%">NTP Servers</th>
              <th width="5%">NetBios Name Servers</th>
              <th width="5%">NetBios Node Type</th>
            


              <th width="5%">Vpc</th> 
              <th width="5%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {dhcpList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default DhcpList;