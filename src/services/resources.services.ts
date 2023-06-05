import IndividualResources from '../Components/types/individualResources.types';
import Resources from '../Components/types/resources.types';
import http from './http.common';

const getAllResources = () => {
    return http.get<Resources>("/resources")
};

const getIndividualResources = (id: string) => {
    return http.get<Array<IndividualResources>>(`/resources/${id}`)
};

export {
    getAllResources,
    getIndividualResources
};



