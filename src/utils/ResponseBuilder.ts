/*
* A custom response builder used to handle the response, filter out the result and render to the views
*
* @param success - Set to true if the API response is StatusCode is 200, and set to false if an error 
* @param data - Send the data returned from the API response
* @param statusCode - Send the status code of the API 
*/
export const buildResponse = (success: boolean, data: any, statusCode: number ) => {
    return { success: success, data: data, statusCode};
};