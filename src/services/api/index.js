import { createAxiosFor } from "../axios";

export const getTableRunConfigQAM = () => {
  return createAxiosFor.get("/downstream_qams/running");
};

export const postSaveAsAPI = (filename) => {
  return createAxiosFor.post(`/downstream_config/copy?from_db=test_default.db&to_db=${filename}.db`);
};
export const makeDefaultAPI = () => {
  return createAxiosFor.post(`/downstream_config/startup/`);
};

export const getTableManageConfigQAM = (db_default_type) => {
  return createAxiosFor.get(`downstream_config?db_default_type=${db_default_type}`)
}

export const postNewDataBaseAPI = (name) => {
  return createAxiosFor.post(`/downstream_config/new?dbname=${name}.db`);
};

