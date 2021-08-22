const admin = 'admin@mondorobot.com'

export const checkAuthority = (email) => {
  console.log(admin + ' ' + email)
  return admin === email 
}