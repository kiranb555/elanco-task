import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import CustomTable from '../../Components/customTable';
import Heading from '../../Components/heading/Heading';
import IndividualApp from '../../Components/types/individualApplication.types';
import { getIndividualApplication } from '../../services/applications.services';

const MyApp = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState<boolean>(false);
    const [appData, setAppData] = useState<IndividualApp[]>([]);
    useEffect(() => {
        retriveIndividualAppData();
    },[])
    
    const retriveIndividualAppData = () => {
        if (!id) return [];
        setLoader(true);
        getIndividualApplication(id).then(res => {
            setAppData(res.data)
        }).finally(() => {
            setLoader(false)
        })
    }
  return (
      <div>
          <Heading title={id ? id : ''} />
          {loader ? <Spinner className='mt-3'/> :
              <CustomTable data={appData} />
          }
      </div>
  )
}

export default MyApp