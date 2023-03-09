import jwt_decode from 'jwt-decode'

export const registration = async (firstName, lastName, email, password, mailing) => {
  const response = await fetch('https://api.storerestapi.com/auth/register',
    {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        mailing
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

  const responseJSON = await response.json()

  localStorage.setItem('token', responseJSON.data.access_token)

  return jwt_decode(responseJSON.data.access_token)
}

export const login = async (email, password) => {
  const response = await fetch('https://api.storerestapi.com/auth/login',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

  const responseJSON = await response.json()

  localStorage.setItem('token', responseJSON.data.access_token)

  return jwt_decode(responseJSON.data.access_token)
}

export const check = async () => {
  let tokenExist = false

  if (localStorage.token) {
    tokenExist = true
  } else {
    tokenExist = false
  }

  return tokenExist
}