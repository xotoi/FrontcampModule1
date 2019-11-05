import newsApiService from "../services/newsApiService";

export default class tracebleService {
    constructor(httpMethod) {
        const service = new newsApiService(httpMethod);
        this.service = service;
    }

    traceMethodCalls(service) {
        let handler = {
            get(target, propKey) {
                const origMethod = target[propKey];

                return function (...args) {
                    let result = origMethod.apply(target, args);
                    console.log(`${propKey + JSON.stringify(args)} was called`);
                    return result;
                };
            }
        };
        return new Proxy(service, handler);
    }

    getNewsApiService(){
        return this.traceMethodCalls(this.service);
    }
};
