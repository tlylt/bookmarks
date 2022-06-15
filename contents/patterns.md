<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

# Motivation

Here is a list of patterns!

## Definitions

### DDD

> Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain

## Repository Pattern

Idea: Have a layer between a business domain and a datastore

Create an interface to define datastore handling logic. This way the domain service logic will not depend on a specific datastore implementation, but on the interface.

Below are the Steps.

### Create a repository interface in the service layer

- The service knows **what** need to be done with the datastore, it may not need to know **how**. The repository interface therefore specifies the operations required by the service.
- The service domain struct will contain a reference to the repository interface, which is passed in from the constructor. This is setup to facilitate dependency injection. During testing, a mock implementation of the repository interface can be used instead.
- The service domain struct can also wrap the calls to the repository interface operations, perhaps for error handling purposes.
- It can be housed in a folder named by the service, e.g. `service/task.go`.

```go
// The interface to be implemented by the actual datastore
type TaskRepository interface {
    Create()
    Find()
    Update()
}

// Domain struct
type Task struct {
    repo TaskRepository
}

func NewTask(repo TaskRepository) *Task {
    return &Task{repo: repo}
}

// Illustrations of the wrapping methods on the domain struct
func (t *Task) Create(ctx context.Context, id string) {
    t.repo.Create(ctx, id)
}

func (t *Task) Find(ctx context.Context, id string) {
    t.repo.Find(ctx, id)
}

func (t *Task) Update(ctx context.Context, id string) {
    t.repo.Update(ctx, id)
}
```

### Implement the repository interface in the datastore layer

- The implementation here will involve the actual datastore operations.
- It can be housed in a folder named by the datastore, e.g. `mongoDB/mongo.go`.

```go
type MongoDBRepository struct {
    url string
}

func NewMongoDBRepository(url string) *MongoDBRepository {
    return &MongoDBRepository{url: url}
}

func (m *MongoDBRepository) Update(ctx context.Context, id string) {
    // Update the datastore via some sql query
}

func (m *MongoDBRepository) Find(ctx context.Context, id string) {
    // Find the datastore via some sql query
}

func (m *MongoDBRepository) Create(ctx context.Context, id string) {
    // Create the datastore via some sql query
}
```

### Invoking the service

- The use of `repo` can be swapped out by a mock implementation for testing purposes.

```go
repo := mongoDB.NewMongoDBRepository("db url")
taskService := service.NewTask(repo)
task, err := taskService.Create(context.Background(), "1")
if err != nil {
    panic(err)
}
```

### References

- https://mariocarrion.com/2021/04/04/golang-microservices-repository-pattern.html

## Orchestrator Pattern

Idea: Call multiple services of a similar signature in a concise way

This should be quite clear by looking at the following example.

- Abstract out the service logic into a type
- Create a collection of the services
- Invoke the services within a loop, therefore allowing a standard pre & post processing to be done for each service.
- Concurrently invoking the services is also possible.

### Before

```go
func main() {
    // Here comes the duplication
    v1, err1 := Service1(context.Background())
    if err1 != nil {
        panic(err1)
    }
    
    v2, err2 := Service2(context.Background())
    if err2 != nil {
        panic(err1)
    }
    
    v3, err3 := Service3(context.Background())
    if err3 != nil {
        panic(err1)
    }
}

func Service1(ctx context.Context) (int64, error) {
    time.Sleep(100 * time.Millisecond)
    return 1, nil
}

func Service2(ctx context.Context) (int64, error) {
    time.Sleep(200 * time.Millisecond)
    return 2, nil
}

func Service3(ctx context.Context) (int64, error) {
    time.Sleep(300 * time.Millisecond)
    return 3, nil
}
```

### After

```go
// Abstract the signature of the services
type Service func(ctx context.Context) (int64, error)
func main() {
    services := []Service{Service1, Service2, Service3}

    for _, service := range services {
        v, err := service(context.Background())
        if err != nil {
            panic(err)
        }
        fmt.Println(v)
    }
}

func Service1(ctx context.Context) (int64, error) {
    time.Sleep(100 * time.Millisecond)
    return 1, nil
}

func Service2(ctx context.Context) (int64, error) {
    time.Sleep(200 * time.Millisecond)
    return 2, nil
}

func Service3(ctx context.Context) (int64, error) {
    time.Sleep(300 * time.Millisecond)
    return 3, nil
}
```

### References

- https://youtu.be/jPVz1Y4_2k4

## Anti-Corruption Layer Pattern

Idea: an isolation layer created to consume values from other system,
acting as a translation layer in both directions

### Create an anticorruption package

```go
package anticorruption

// import the two packages

func Kelvin(counutry string) float64 {
    // Call the Kelvin package here
    return kelvin.Calculate(country) - 273.15
}

func Fahrenheit(country string) float64 {
    // Call the Fahrenheit package here
    return (5.0/9.0) * (fahrenheit.New(country).Value() -32)
}

```

Call the package in the service layer with a consistent signature.

```go
func main() {
    kelvin := anticorruption.Kelvin("US")
    fahrenheit := anticorruption.Fahrenheit("US")
}
```
