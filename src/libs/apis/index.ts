import axios from "axios";

export const getUsers = async () => {
  const response = await axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .catch(err => console.log(err));
  console.log("response", response);

  return response;
};
