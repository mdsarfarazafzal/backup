interface ApiClientConfig {
    baseUrl: string;
    getToken: () => string | null;
    onUnauthorized?: () => void;
}
export default class ApiClient {
    private config;
    constructor(config: ApiClientConfig);
    request<T>(endpoint: string, options?: RequestInit): Promise<T>;
    get<T>(endpoint: string): Promise<T>;
    post<T>(endpoint: string, body: any): Promise<T>;
}
export {};
//# sourceMappingURL=index.d.ts.map