# nodejs-todoapp

### I started learning nodejs and made a simple todoapp project to learn the basics.

## get todos.

```bash
   curl http://localhost:3000/todos
```

### output

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

## new todo.

```bash
   curl -X POST -H "Content-Type: application/json" \
    -d '{"title": "learn golang", "completed": false}' \
    http://localhost:3000/todo
```

### output

``` json
{
    "id": 3,
    "title": "learn golang",
    "completed": false
}
```

## update todo.

```bash
   curl -X PUT -H "Content-Type: application/json" \
    -d '{"title": "learn golang v2", "completed": false,"id":3}' \
    http://localhost:3000/todo
```

### output

``` json
{
    "id": 3,
    "title": "learn golang v2",
    "completed": false
}
```

## completed todo.

```bash
   curl http://localhost:3000/todo/completed/3
```

### output

``` json
{
    "id": 3,
    "title": "learn golang v2",
    "completed": true
}
```
