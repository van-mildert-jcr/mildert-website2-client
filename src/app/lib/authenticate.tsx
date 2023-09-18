import databaseFile from "../test/user.json"

type UserDatabase = { usernames: string[], data: UserData[] }
type UserData = {
  password: string,
  token: string,
  tokenbirth: number,
  perms: string[]
}

const database = databaseFile as UserDatabase;

export function AuthenticateCookie(username: string, token: string) {
  return database.usernames.includes(username) && token === database.data[database.usernames.indexOf(username)].token && Date.now() - database.data[database.usernames.indexOf(username)].tokenbirth < 1000000;
}

export function LoginUser(username: string, password: string) {
  if (!(database.usernames.includes(username))) return { status: false, data: "User does not exist" }
  if (password !== database.data[database.usernames.indexOf(username)].password) return { status: false, data: "Password incorrect" }
  let token = "token" + Date.now()
  database.data[database.usernames.indexOf(username)].token = token
  database.data[database.usernames.indexOf(username)].tokenbirth = Date.now()
  return { status: true, data: token }
}

export function LogoutUser(username: string) {
  if (!(database.usernames.includes(username))) return false
  database.data[database.usernames.indexOf(username)].token = ""
  database.data[database.usernames.indexOf(username)].tokenbirth = 0
  return true
}

export function CheckPerm(username: string, token: string, perm: string) {
  if (!AuthenticateCookie(username, token) && perm in database.data[database.usernames.indexOf(username)].perms) return false
  return true
}
