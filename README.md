# Backend for PT11 word-find app

This currently supports authentication endpoints and a database for users to add their own lists of words.

## Deployment details

Api and postgres db hosted via heroku. API base url: https://wordlist-backend.herokuapp.com/

### Endpoint info:

The POST/PUT endpoints at `/users` will expect objects with the following format:

`
    username: "yourusername"
    password: "yourpassword"
`

Usernames must be unique.


The POST/PUT endpoints at `/wordlists` expect objects with the following format:

`
{
    user_id: 1 (this NUMBER references an existing user's id) - This will be taken from the request auth token
    wordlist: "string,of,comma,separated,words"
    title: "descriptive title for wordlist"
}
`

PUT and DELETE operations should be restricted to only the user's own puzzles.

The POST/PUT/DELETE endpoints at `/users` will likely not be used and should be restricted from general users. GET is available for user profiles. 
