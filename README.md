# API Project: Timestamp Microservice for FCC

Welcome, you've arrived the home of a simple timestamping API, created as a FreeCodeCamp API & Microservices challenge.

### Timestamp API:

The timestamping API responds to HTML GET methods, and is accessible. via the following endpoint:
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp`

The API accepts a date string as a parameter, and returns both UNIX time as well as a UTC string for the parameters provided.

### Example Usage:

An ISO-8601 format string should be provided to return a valid date.  This means the date format should be provided in YYYY MM DD format as shown:
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/1982-08-12`

The above example returns JSON containing both UNIX time and a UTC string for the given date:
`{"unix":397958400000,"utc":"Thu, 12 Aug 1982 00:00:00 GMT"}`

Different escaped date seperators can be provided also:
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/1982%2F08%2F12`
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/1982%3A08%3A12`

If you need a time, it can be declared in according to ISO 8601 standards for example:
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/2020-05-29T22%3a23%3a33`
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/2020-05-29%2022%3a23%3a33`

We also accept UNIX time as a parameter, returning the same date response:
`https://pf-timestamp-service.ts.r.appspot.com/api/timestamp/1590755013000`

###Invalid date strings

Only EPOCH or ISO 8601 formatted date strings are acceptible to this API.  Should an incorrectly formatted value be presented, an invalid date response will be returned:
`{ "error":"Invalid Date"}`