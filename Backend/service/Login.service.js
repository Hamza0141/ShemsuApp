const pool = require("../config/dbconfig");
const bcrypt = require("bcrypt");
const checkEmail = require("../service/employee.service")
async function access (data){
    try{
      let returnData = {}; // Object to be returned
      const employeExist = await checkEmail.getemployeByEmail(
        data.employee_email
      );
      if (employeExist.length === 0) {
        returnData = {
          status: "fail",
          message: "Employee does not exist",
        };
        return returnData;
      }
      const passwordMatches = await bcrypt.compare(
        data.employee_password,
        employeExist[0].employee_password_hashed
      );
      if (!passwordMatches) {
        returnData = {
          status: "fail",
          message: "Incorrect password",
        };
        return returnData;
      }
      returnData = {
        status: "success",
        data: employeExist[0],
      };
      return returnData;
    }catch(error){
      console.log(error);

    }
}
module.exports = {
  access
};
