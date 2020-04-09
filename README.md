# The Gremlin Returns  

Zounds! Gadzooks! Another gremlin has demolished this API. It sent many packages packing, it routed the routers (in the bad, destructive sense), and even deLETED THE DATABASE! Argh!

Our objectives at standup this week:
1. Restore the database using the migrations (they are still intact)
2. Reseed the database using the seeds (also provided)
3. Rebuild the server and routers that work with both db tables (users and wordlists)
4. Redeploy - Maybe get an introduction to postgres migration.

There is NO TIME to lose sirs, you're the men for the job. Hop to it!

## Deployment details

The gremlin has destroyed all deployments. Redeploy at your leisure.

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