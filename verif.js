let day = new Date().getDate();
let hours = new Date().getHours();

console.log(hours);

function verif1(req, res, next) {
  if (day > 0 && day < 6 && hours > 8 && hours < 17) next();
  else
    res.send(
      `<h1> Welcome Service Closed Now... Service open from 8am  to 17pm / Monday to Friday</h1>`
    );
}
module.exports = verif1;