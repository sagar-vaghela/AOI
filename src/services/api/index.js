import { createAxiosFor } from "../axios";

  export const getTableRunConfigQAM = () => {
    return createAxiosFor.get('/downstream_qams/running')
  };
