const node_environment = process.env.NODE_ENV;

export const server_url =
  node_environment === "development"
    ? "http://localhost:8080/api/v1"
    : "https://job-portal-server-b7p7.onrender.com/api/v1";
