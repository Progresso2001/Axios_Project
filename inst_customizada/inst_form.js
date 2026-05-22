// Instância Axios Personalizada para Tipo de Conteúdo "application/x-www-form-urlencoded"

const axios = require('axios')

const axiosInstanceFormUrlEncoded = (
  baseURL,
  token,
  contentType = "application/x-www-form-urlencoded"
) => {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
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
const formBaseUrl = "https://api.example.com/form";
const formToken = "your_access_token";

const customAxiosFormUrlEncoded = axiosInstanceFormUrlEncoded(formBaseUrl, formToken);

customAxiosFormUrlEncoded.post("/submit", { data: formData })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });