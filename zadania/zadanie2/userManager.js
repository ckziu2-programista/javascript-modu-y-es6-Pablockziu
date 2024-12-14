// addUser(users, user) – dodaje użytkownika (obiekt { id, name }) do listy,
// removeUser(users, id) – usuwa użytkownika o podanym id,
// findUser(users, id) – zwraca użytkownika o podanym id.


export function addUser(users, user) {
    users.push(user)
    
}
export function removeUser(users, id) {
    users.splice(id,1)
    
}
export function findUser(users, id) {
    console.log(users[id]) 
}
