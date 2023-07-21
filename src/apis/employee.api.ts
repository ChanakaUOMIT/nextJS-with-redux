import Api from "./api";

export const getEmployeesAPI = () =>
  Api.request({
    method: "get",
    action: `https://stagingapi.testmyapp.store/v1/service-providers-web/location-filter-options?county=`
  });
