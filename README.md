# fabrica-online-back
projeto desenvolvido durante semana high tech

## Backend API REST: Express.js
[Host](https://fabricaonline.herokuapp.com)

### GET

[List all users](https://fabricaonline.herokuapp.com/users): `/users`

[List all bills](https://fabricaonline.herokuapp.com/bills): `/bills`

### POST

##### Create new user: `/users`

JSON:
```
name: String required
username: String required
password: String required
email: String required
active: Boolean required
```

Example:
```
{
  "name": "Douglas",
  "username": "drouga",
  "password": "drouga123",
  "email": "drouga@email.com",
  "active": true
}
```

##### Create new bill: `/bills`

JSON:
```
description: String required
type: String Enum[Income, Expense] required
value: Number required
date: Date required
observation: String
```

Example:
```
{
  "description": "freela",
  "type": "Income",
  "value": 250,
  "date": "2020/09/27",
  "observation": ""
}
```

### PUT

##### Edit a user: `/users`

JSON:
```
id: String required
name: String required
username: String required
password: String required
email: String required
active: Boolean required
```

Example:
```
{
  "id": "4531",
  "name": "Douglas",
  "username": "drouga",
  "password": "drouga123",
  "email": "drouga@email.com",
  "active": true
}
```

##### Edit a bill: `/bills`

JSON:
```
id: String required
description: String required
type: String Enum[Income, Expense] required
value: Number required
date: Date required
observation: String
```

Example:
```
{
  "id": "4863189",
  "description": "freela",
  "type": "Income",
  "value": 250,
  "date": "2020/09/25T00:00:00.000Z",
  "observation": ""
}
```

### DELETE

##### Delete a bill: `/bills`

JSON:
```
id: String required
```

Example:
```
{
  "id": "4863189",
}
```
