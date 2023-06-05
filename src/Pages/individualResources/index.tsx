import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Heading from '../../Components/heading/Heading';
import { getIndividualResources } from '../../services/resources.services';
import IndividualResourcesTypes from '../../Components/types/individualResources.types';
import CustomTable from '../../Components/customTable';

const IndividualResources = () => {
    const { resourceName } = useParams();
    const [loader, setLoader] = useState<boolean>(false);
    const [resourceData, setResourceData] = useState<IndividualResourcesTypes[]>([]);
    useEffect(() => {
        retriveIndividualAppData();
    },[])
    
    const retriveIndividualAppData = () => {
        if (!resourceName) return [];
        setLoader(true);
        getIndividualResources(resourceName).then(res => {
            setResourceData(res.data)
        }).finally(() => {
            setLoader(false)
        })
    }
  return (
      <div>
          <Heading title={resourceName ? resourceName : ''} />
          {loader
            ? <Spinner className='mt-3' />
            : <CustomTable data={ resourceData } />
          }
      </div>
  )
}

export default IndividualResources