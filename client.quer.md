## get profile
query profile{
  user{
    email
    username
    password
    _id
    movie{
      desc
      title
      image
    }
  }
}

HTTP HEADERS
{
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFjMWMyZjFjNjUyNzJlYTY1NmIzYzgiLCJpYXQiOjE2NjI3OTMyMzh9.twiaBmrB8uVOKmO7Bjcf7t_EYvvTHC2H_xzUKGgcgRE"
}

## signup

mutation register($data: IRegister!){
  signup(input: $data){
    email
    password
    username
  }
}

QUERY VARIABLE
{
  "data": {
    "email": "this1@gmail.com",
    "username": "this",
    "password": "wowthis102"
  }
}

## signin 
mutation createLogin($ne: ILogin!){
  signin(input: $ne){
    token
  }
}

QUERY VARIABLE
{
  "ne": {
    "email": "this1@gmail.com",
    "password": "wowthis102"
  }
}

## change password 
mutation chan($abc: IChangePassword!) {
  changepassword(input: $abc){
    message
  }
}

QUERY VARIABLE
{
  "abc": {
    "email": "this1@gmail.com",
    "oldpassword":"wowthis102"
    "newpassword": "sj"
  }
}

HTTP HEADERS
{
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFjMWMyZjFjNjUyNzJlYTY1NmIzYzgiLCJpYXQiOjE2NjI3OTEyNjR9.g7z0S9ydtmasjPRTtkOARNQhTEkQ322d4-3TXWDXnjw"
}

## create movie
mutation crea($new:IMovie!){
  createMovie(input: $new){
    title
    desc
    image
    by
  }
}

QUERY VARIABLE
{
  "new":{
   "title": "jjjji",
    "desc": "gajj",
    "image": "a"
  }
}

HTTP HEADERS
{
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFjMWMyZjFjNjUyNzJlYTY1NmIzYzgiLCJpYXQiOjE2NjI3OTMyMzh9.twiaBmrB8uVOKmO7Bjcf7t_EYvvTHC2H_xzUKGgcgRE"
}