# nodejs-todoapp

### I started learning nodejs and made a simple todoapp project to learn the basics.

### get todos.

```bash
   curl http://localhost:3000/todos
```

#### output

``` json
[
  {
    "id": 1,
    "title": "learn nodejs and express",
    "completed": true
  },
  {
    "id": 2,
    "title": "learn golang and gorm",
    "completed": true
  }
]
```

### new todo.

```bash
   curl -X POST -H "Content-Type: application/json" \
    -d '{"title": "learn golang", "completed": false}' \
    http://localhost:3000/todo
```

#### output

``` json
{
    "id": 3,
    "title": "learn golang",
    "completed": false
}
```

### update todo.

```bash
   curl -X PUT -H "Content-Type: application/json" \
    -d '{"title": "learn golang v2", "completed": false,"id":3}' \
    http://localhost:3000/todo
```

#### output

``` json
{
    "id": 3,
    "title": "learn golang v2",
    "completed": false
}
```

### completed todo.

```bash
   curl http://localhost:3000/todo/completed/3
```

#### output

``` json
{
    "id": 3,
    "title": "learn golang v2",
    "completed": true
}
```

#### we performed the todo operations on arrays, I wanted to use myql to perform user actions and for this I used the mysql library in javascript.

### mysql config

``` javascript
const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'newdb',
});

module.exports = pool;
```

### get users.

```bash
   curl http://localhost:3000/users
```

#### output

``` json
[
  {
    "id": 7,
    "name": "khanjer",
    "surname": "cry",
    "email": null,
    "created_at": "2022-05-02T19:51:25.457Z",
    "updated_at": null,
    "deleted_at": null,
    "phone": "5551755445",
    "description": null
  },
  {
    "id": 8,
    "name": "baran can",
    "surname": "atbas",
    "email": null,
    "created_at": "2022-05-02T19:51:25.457Z",
    "updated_at": "2022-05-02T20:05:51.995Z",
    "deleted_at": "2022-05-02T20:38:42.298Z",
    "phone": "5551755445",
    "description": null
  }
]
```

### get user.

```bash
   curl http://localhost:3000/user/8
```

#### output

``` json
[
  {
    "id": 8,
    "name": "baran can",
    "surname": "atbas",
    "email": null,
    "created_at": "2022-05-02T19:51:25.457Z",
    "updated_at": "2022-05-02T20:05:51.995Z",
    "deleted_at": "2022-05-02T20:38:42.298Z",
    "phone": "5551755445",
    "description": null
  }
]
```

#### You can review and use the add, delete, update routes.

### Redis implemnte

<img src="https://user-images.githubusercontent.com/64152397/166497566-49fba564-197f-4b3e-b058-2570cc0fd0c6.png" width="50%" />

#### then we call connect function in app.js

#### use case

<img src="https://user-images.githubusercontent.com/64152397/166499740-472aded3-4e36-47ee-a40b-f3bb6836dc30.png" width="50%" />

