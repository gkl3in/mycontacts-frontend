import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    let body;

    await delay(500);
    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(body?.error || `${response.status} - ${response.statusText}`);
  }
}

export default HttpClient;
