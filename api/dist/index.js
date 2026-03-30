export default class ApiClient {
    config;
    constructor(config) {
        this.config = config;
    }
    async request(endpoint, options = {}) {
        const token = this.config.getToken();
        const headers = {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        };
        const res = await fetch(`${this.config.baseUrl}${endpoint}`, {
            ...options,
            headers,
        });
        if (res.status === 401 && this.config.onUnauthorized) {
            this.config.onUnauthorized();
            throw new Error("Unauthorized");
        }
        if (!res.ok) {
            const err = await res.json().catch(() => ({ message: "Request failed" }));
            throw new Error(err.message || `HTTP ${res.status}`);
        }
        return res.json();
    }
    get(endpoint) {
        return this.request(endpoint);
    }
    post(endpoint, body) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    }
}
//# sourceMappingURL=index.js.map