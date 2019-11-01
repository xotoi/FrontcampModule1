import configuration from './../configuration'
import BuildUrl from 'build-url';

export default class newsApiService {
    constructor(httpMethod) {
        this.baseUrl = configuration.baseUrl;
        this.apiKey = configuration.apiKey;
        this.httpMethod = httpMethod;
    }

    async getNewsSources () {
        const requestUrl = BuildUrl(this.baseUrl, {
            method: this.httpMethod,
            path: 'sources',
            queryParams: {
                apiKey: this.apiKey
            }
        });

        return await this.handleRequest(requestUrl);
    }

    async getNewsFromSource (newsSource) {
        const requestUrl = BuildUrl(this.baseUrl, {
            method: this.httpMethod,
            path: 'top-headlines',
            queryParams: {
                sources: newsSource,
                pageSize: 10,
                page: 1,
                apiKey: this.apiKey
            }
        });

        return await this.handleRequest(requestUrl);
    }

    async handleRequest(requestUrl) {
        let responseStream;
        try {
            responseStream = await fetch(requestUrl);
        } catch (err) {
            await this.handlerError(err);
        }

        return await this.handleResponse(responseStream); 
    };

    async handlerError(err) {
        const errorHandler = await import('./../handlers/errorHandler');
        errorHandler.default(err);
    }

    async handleResponse(reponse) {
        return await reponse.json();
    }
};