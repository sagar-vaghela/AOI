import { POST_CONFIG_QAM_TABLE_ADD_RANGE } from "../lib/constants";
import { addRangeConfiguration } from "../services/api";

const addRangeConfigurationSucceded = () => ({
    type: POST_CONFIG_QAM_TABLE_ADD_RANGE
});


export const addRangeQAMConfiguration = (dbname, db_default_type, payload) => {
    return async dispatch => {

        await addRangeConfiguration(dbname, db_default_type, payload).then(function (response) {
            dispatch(addRangeConfigurationSucceded(response));
        })
            .catch(function (error) {
                console.log("addRangeConfigurationSucceded error");

            });
    };
}
