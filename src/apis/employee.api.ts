import Api from "./api";

export const getEmployeesAPI = () =>
  Api.request({
    method: "get",
    action: `https://dummy.restapiexample.com/api/v1/employees`
  });
