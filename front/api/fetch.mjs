export default class OFetch {
  baseUrl = "http://localhost:3000";

  defaultOptions(customOptions, body) {
    const options = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': this.baseUrl,
      },
      body: JSON.stringify(body),
      ...customOptions,
    };

    if (!body) delete options.body;
    return options;
  }

  async get(url, options) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      ...this.defaultOptions(options),
    });
    return response.json();
  }

  async post(url, body = {}, options) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body,
      ...this.defaultOptions(options),
    });
    return response.json();
  }

  async delete(url, options) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      ...this.defaultOptions(options),
    });
    return response.json();
  }

  async patch(url, body = {}, options) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PATCH",
      body,
      ...this.defaultOptions(options),
    });
    return response.json();
  }
}
