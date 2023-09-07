const loginService = require("../service/Login.service");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

async function signin  (req,res) {
    try{
const data = req.body;
const response = await loginService.access(data);
if (response.status === "fail") {
  res.status(403).json({
    status: response.status,
    message: response.message,
  });
  console.log(response.message);
}

const paylod = {
  employee_id: response.data.employee_id,
  employee_email: response.data.employee_email,
  employee_first_name: response.data.employee_first_name,
};

const token = jwt.sign(paylod, jwtSecret, { expiresIn: "24h" });
console.log(token);
const sendBack = {
  employee_token: token,
};
res.status(200).json({
  status: "success",
  message: "Employee logged in successfully",
  data: sendBack,
});

    }catch(err){
        console.log(err);
    }
    
};

module.exports = {
  signin
};