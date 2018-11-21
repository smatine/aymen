import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class EccStorageList extends Component {

  constructor(props) {
    super(props);
    this.state = {eccStorages: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch(`/eccs/${this.props.match.params.id}/eccStorages`)
      .then(response => response.json())
      .then(data => this.setState({eccStorages: data, isLoading: false}));
  }

  async remove(accId, id) {
    await fetch(`/eccs/${accId}/eccStorages/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updateEccStorage = [...this.state.eccStorages].filter(i => i.id !== id);
      this.setState({eccStorages: updateEccStorage});
    });
  }

  render() {
    const {eccStorages, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const eccStorageList = eccStorages.map(eccStorage => {
      
      const link = "/eccs/" + eccStorage.ecc.id; 
      const deleteOnTermination= (eccStorage.deleteOnTermination)? 'Yes': 'No';
      

      return <tr key={eccStorage.id}>
        <td style={{whiteSpace: 'nowrap'}}>{eccStorage.id}</td>


        <td>{eccStorage.volumeType}</td>
        <td>{eccStorage.device}</td>
        <td>{eccStorage.snapshot}</td>
        <td>{eccStorage.size}</td>
        <td>{eccStorage.volume}</td>
        <td>{eccStorage.iops}</td>
        <td>{eccStorage.throughput}</td>
        <td>{deleteOnTermination}</td>
        <td>{eccStorage.encrypted}</td>

        <td><a href={link}>{eccStorage.ecc.id}</a></td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/ecc/" + eccStorage.ecc.id  + "/eccStorages/" + eccStorage.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(eccStorage.ecc.id, eccStorage.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    const add = `/ecc/${this.props.match.params.id}/eccStorages/new`;
    const ecc = `/eccs`;

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="primary" tag={Link} to={ecc}>Ec2</Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="success" tag={Link} to={add}>Add Ec2 Storage</Button>
          </div>
          
          <h3>Ec2 Storage</h3>
          <Table className="mt-4">
            <thead>
            <tr>
            
                    
              <th width="5%">Id</th>
              <th width="5%">Volume Type</th>
              <th width="5%">Device</th>
              <th width="5%">Snapshot</th>
              <th width="5%">Size</th>
              <th width="5%">Volume</th>
              <th width="5%">Iops</th>
              <th width="5%">Throughput</th>
              <th width="5%">DeleteOnTermination</th>
              <th width="5%">Encrypted</th>

              <th width="5%">Ecc</th> 
              <th width="5%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {eccStorageList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default EccStorageList;