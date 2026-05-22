// Instância Axios Personalizada com Cabeçalhos Personalizados
const axios = require('axios')

const axiosInstanceCustomHeaders = (
  baseURL,
  token,
  customHeaders = {}
) => {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      ...customHeaders, // Merge with custom headers
    },
  });

  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
};

// Usage Example
const customBaseUrl = "https://api.example.com";
const customToken = "your_access_token";
const customHeaders = {
  "X-Custom-Header": "custom-value",
};

const customAxiosCustomHeaders = axiosInstanceCustomHeaders(customBaseUrl, customToken, customHeaders);

customAxiosCustomHeaders.get("/data")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });