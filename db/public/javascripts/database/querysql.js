var select_userinfo = function (params) {
  let table = params.table
  let where_Sql = params.where_Sql
  return 'SELECT * FROM ' + table + ' where ' + where_Sql
}

var insert_userinfo = function (params) {
  return 'INSERT INTO userinfo ( id, username, `password`) VALUES( ' + params.id + ', ' + params.username + ',' + params.password + ' )'
}

var delete_userinfo = function (params) {
  return 'DELETE from  userinfo WHERE username = " ' + params.username + '"'
}
module.exports = {
  select_userinfo, insert_userinfo, delete_userinfo
}