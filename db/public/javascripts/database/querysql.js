var select_userinfo = function (params) {
    return "SELECT * FROM userinfo where username  = '" + params.username + "'"
 }
 var insert_userinfo = function (params) {
   return "INSERT INTO userinfo set ?"
}
 module.exports = {
   select_userinfo,insert_userinfo
  }