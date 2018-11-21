import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Row, Col, Alert } from 'reactstrap';


class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Row>
            <Col>
                <Row>
                  <Col>
                    
                  </Col>
                </Row>
                <Row>
                  <Col>
                  
                  </Col>
                </Row>
            </Col>

            <Col>

            </Col>

            <Col>

            </Col>

            <Col>

            </Col>
          </Row>

          <Row>
            <Col>
            <Button color="link"><Link to="/annuaires">Manage Annuaire stage</Link></Button>
            </Col>
            <Col>
            
            </Col>
            <Col>
            
            </Col>
            <Col>
        
            </Col>
          </Row>


          <Row>
            <Col>
            <Button  color="link"><Link to="/regions">Manage Region</Link></Button>
            
            </Col>
            <Col>
            <Button color="link"><Link to="/vpcmanage">Manage Cidr</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/trigrammes">Manage Trigramme</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/products">Manage Products</Link></Button>
            </Col>
          </Row>
          
          <Row>
            <Col>
            <Button color="link"><Link to="/accounts">Manage Accounts</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/vpcs">Manage Vpcs</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/subnets">Manage Subnets</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/subnetGroups">Manage Subnet Group</Link></Button>
            </Col>
          </Row>
          
          <Row>
            <Col>
            <Button color="link"><Link to="/storages">Manage S3</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/ssms">Manage SSM</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/cognitos">Manage Cognito</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/dynamoDbs">Manage DynamoDb</Link></Button>
            </Col>
          </Row>

          <Row>
            <Col>
            <Button color="link"><Link to="/Rdss">Manage Rds</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/efss">Manage Efs</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/elasticSearchs">Manage Elastic Search</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/elasticCaches">Manage Elastic Cache</Link></Button>
            </Col>
          </Row>
        
          <Row>
            <Col>
            <Button color="link"><Link to="/nacls">Manage Nacl</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/sgs">Manage Security Group</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/routetables">Manage Route Table</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/peerings">Manage Peering</Link></Button>
            </Col>
          </Row>
      
          <Row>
            <Col>
            <Button color="link"><Link to="/targetgroups">Manage Target Group</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/lbs">Manage LoadBalancer</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/instancetypes">Manage Instance Type</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/eccs">Manage Ec2</Link></Button>
            </Col>
          </Row>

          <Row>
            <Col>
            <Button color="link"><Link to="/launchconfigurations">Manage Launch Configuration</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/autoscalinggroups">Manage Auto scaling Group</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/policys">Manage Policy</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/endpoints">Manage EndPoint</Link></Button>
            </Col>
          </Row>

          <Row>
            <Col>
            <Button color="link"><Link to="/roles">Manage Role</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/groups">Manage Group</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/users">Manage User</Link></Button>
            </Col>
            <Col>
            <Button color="link"><Link to="/dhcps">Manage Dhcp Options Sets</Link></Button>
            </Col>
          </Row>

            <Row>
            <Col>
            <Button color="link"><Link to="/kmss">Manage Kms</Link></Button>
            </Col>
            <Col>
            
            </Col>
            <Col>
            
            </Col>
            <Col>
           
            </Col>
          </Row>


        </Container>
      </div>
    );
  }
}

export default Home;