import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import uniqid from 'uniqid';

//trying to transform this into functional component that works

const CompanySearchResults = () => {
  // state = {
  //     jobs: []
  // }

  // componentDidMount() {
  //     this.getJobs()
  // }

  // baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name='

  // getJobs = async () => {
  //     const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
  //     const {jobs} = await response.json()

  //     this.setState({ jobs })
  // }

  return (
    <Container>
      <Row>
        <Col>
          {this.state.jobs.map((jobData) => (
            <Job key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
