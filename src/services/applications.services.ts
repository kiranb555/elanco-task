import Applications from '../Components/types/applications.types';
import IndividualApp from '../Components/types/individualApplication.types';
import http from './http.common';

const getAllApplications = () => {
    return http.get<Applications>("/applications")
};

const getIndividualApplication = (id: string) => {
    return http.get<Array<IndividualApp>>(`/applications/${id}`)
};

export {
    getAllApplications,
    getIndividualApplication
};



