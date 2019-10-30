import configuration from './../configuration'
import BuildUrl from 'build-url';

export default class newsApiService {
    constructor() {
        this.baseUrl = configuration.baseUrl;
        this.apiKey = configuration.apiKey;
    }

    async getNewsSources () {
        const requestUrl = BuildUrl(this.baseUrl, {
            path: 'sources',
            queryParams: {
                apiKey: this.apiKey
            }
        });
        const responseStream = await fetch(requestUrl);
        return await responseStream.json();
    }

    async getNewsFromSource (newsSource) {
        const requestUrl = BuildUrl(this.baseUrl, {
            path: 'top-headlines',
            queryParams: {
                sources: newsSource,
                pageSize: 10,
                page: 1,
                apiKey: this.apiKey
            }
        });
        const responseStream = await fetch(requestUrl);
        return await responseStream.json();
    }  
};
