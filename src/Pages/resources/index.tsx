import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row, Spinner } from 'reactstrap';
import '../applications/style.scss';
import { Link } from 'react-router-dom';
import Heading from '../../Components/heading/Heading';
import SearchBar from '../../Components/searchBar';
import { getAllResources } from '../../services/resources.services';

const Resources = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [resourcesList, setResourcesList] = useState<string[]>([]); 
  const [clonedList, setClonedList] = useState<string[]>([]);
  const [searchValue, SetSearchValue] = useState<string>("");
  useEffect(() => { 
    retriveApplicaions();
  }, [])
  const retriveApplicaions = () => {
    setLoader(true)
    getAllResources().then((res: any) => {
      const { data } = res;
      setResourcesList(data);
      setClonedList(data);
    }).finally(() => {
      setLoader(false)
    })
  }

  const filterData = (value: string) => {
    SetSearchValue(value);
    setClonedList(resourcesList.filter(app => app.toLowerCase().includes(value.toLowerCase())));
  }
  return (
    <Container>
      <Heading title="Elanco Resources" /> 
      {
        clonedList?.length ? <SearchBar value={searchValue} onChangeHandler={(value) => filterData(value) } /> : null
      }
      {
        loader ? <Spinner className='m-3' /> :
          <Row className='my-3'>
            {
              clonedList.map((resourceName) => (
                <Col
                  sm="4"
                  xs="12"
                  className='mt-2'
                >
                  <Card>
                    <CardBody>
                      <CardTitle className='cursor-pointer'>
                        <Link to={`/resources/${resourceName}`} className="card-link">
                          {resourceName}
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

export default Resources