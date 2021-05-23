import request from '@/utility/request';
// import Resource from '@/api/resource';

// class ExampleApi extends Resource {
class ExampleApi {
  constructor() {
    this.uri = 'example-api';
    /** When is extended. */
    // super('production');
  }

  doRequest(data){
    return request({
      url: '/' + this.uri + '/do-request',
      /** For GET request params go under... well... 'params' */
      method: 'get',
      params: data,
      /** For POST request params go under 'data' */
    //   method: 'post',
    //   data: data,
    });
  }
}

export { ExampleApi as default };
