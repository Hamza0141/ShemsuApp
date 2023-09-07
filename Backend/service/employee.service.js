const pool = require("../config/dbconfig");
const bcrypt = require("bcrypt");


async function checkEmployeeExist(email){

    const query = "SELECT * FROM employee WHERE employee_email = ? ";
    const [rows] = await pool.query(query, [email]);
    console.log(rows);
    if (rows.length > 0) {
      return true;
    }
    return false;
   
  

}


async function adder(data) {
  console.log(data);
  
   const employeprofile = {};
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.employee_password, salt);
    console.log(salt);
    const query =
      "INSERT INTO employee (employee_first_name,employee_last_name, employee_email, employee_password_hashed) VALUES (?, ?, ?,?)";
    const [row] = await pool.query(query, [
      data.employee_first_name,
      data.employee_last_name,
      data.employee_email,
      hashedPassword,
    ]);

    console.log(row);
      

    if (row.affectedRows !== 1) {
      return false;
    }

    const employee_id = row.insertId;
    console.log("Employee ID:", employee_id);

  const employeprofile = {
    employee_id: employee_id,
  };

    return employeprofile;
  } catch (err) {
    console.log(err);
    return false;
  }
  // return employeprofile;
}

async function getemployeByEmail(email) {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM employee WHERE employee_email = ?`,
      [email]
    );
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  checkEmployeeExist,
  adder,
  getemployeByEmail,
};
