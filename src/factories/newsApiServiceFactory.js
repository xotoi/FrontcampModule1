import tracebleService from './../interceptors/tracebleService';

export default class newsApiServiceFactory {
    createService (httpMethod) {
        switch (httpMethod) {
            case 'POST':
                return this.getService('POST');
            case 'PUT':
                return this.getService('PUT');
            case 'GET':
                return this.getService('GET');
  
            default: return this.getService('GET');
        }
    }

    getService(httpMethod){
        const tracer = new tracebleService(httpMethod);
        return tracer.getNewsApiService();
    }
};
