import { createAxiosFor } from "../axios";

  export const getTableRunConfigQAM = () => {
    return createAxiosFor.get('/downstream_qams/running')
  };

  export const getRCQAMUpdateTableRow = (ch_id, payload) => {
    return createAxiosFor.post(`/downstream_qams_single/running/update?ch_id=${ch_id}`, payload)
  };

  export const getRCQAMAddTableRow = (payload) => {
    return createAxiosFor.post(`/downstream_qams_single/running/create`, payload)
  };

  export const getRCQAMDeleteTableRow = (ch_id) => {
    return createAxiosFor.post(`/downstream_qams_single/running/delete?ch_id=${ch_id}`)
  };