import React, { useEffect, useState } from 'react'
import { getAllApplications } from '../../services/applications.services';
import { Card, CardBody, CardTitle, Col, Container, Row, Spinner } from 'reactstrap';
import './style.scss';
import { Link } from 'react-router-dom';
import Heading from '../../Components/heading/Heading';
import SearchBar from '../../Components/searchBar';

const Applications = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [applicationsList, setApplicationsList] = useState<string[]>([]); 
  const [clonedList, setClonedList] = useState<string[]>([]);
  const [searchValue, SetSearchValue] = useState<string>("");
  useEffect(() => { 
    retriveApplicaions();
  }, [])
  const retriveApplicaions = () => {
    setLoader(true)
    getAllApplications().then((res: any) => {
      const { data } = res;
      setApplicationsList(data);
      setClonedList(data);
    }).finally(() => {
      setLoader(false)
    })
  }

  const filterData = (value: string) => {
    SetSearchValue(value);
    setClonedList(applicationsList.filter(app => app.toLowerCase().includes(value.toLowerCase())));
  }
  return (
    <Container>
      <Heading title="Elanco Applications" /> 
      {
        clonedList?.length ? <SearchBar value={searchValue} onChangeHandler={(value) => filterData(value) } /> : null
      }
      {
        loader ? <Spinner className='m-3' /> :
          <Row className='my-3'>
            {
              clonedList.map((appName) => (
                <Col
                  sm="4"
                  xs="12"
                  className='mt-2'
                >
                  <Card>
                    <CardBody>
                      <CardTitle className='cursor-pointer'>
                        <Link to={`/applications/${appName}`} className="card-link">
                          {appName}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Col>)
              )
            }
          </Row>
        }
    </Container>
  )
}

export default Applications