import newsApiService from './../services/newsApiService';

export default class newsApiServiceFactory {
    createService (httpMethod) {
        let handler = {
            get (target) {
                if (target.verb === 'GET'){
                    console.log('Correct http verb for this api')
                    return target;                    
                } else {
                    console.log('Incorrect http verv for this api')
                    return 'GET';
                }    
            }
        }

        let methodObject = { verb: httpMethod };

        let proxiedMethod = new Proxy(methodObject, handler)

        switch (proxiedMethod.verb) {
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
        return new newsApiService(httpMethod);
    }
};
