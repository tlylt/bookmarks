<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

# Motivation

Here's my notes on the Go programming language!

## Pass by Value

Value Type <br> (use a pointer if needs to modify) | Reference Type <br> (can be modified directly)
---------------------------------------------------|---------------
int                                                | slice
float                                              | map
string                                             | channel
bool                                               | pointer
struct                                             | function

## Array vs Slice

Array                            | Slide
---------------------------------|--------------------------------
the length is part of the type   | dynamically sized
use a pointer if needs to modify | can be passed in directly
use if size is known             | use if need to modify
`arr := [4]int{3, 2, 5, 4}`      | `arr := make([]int, 0, 5)` <br> `// This creates a slice with length 0 and capacity 5` <br> recommended to specify capacity if known

## Type Assertion vs Type Conversion

Assertion is used when you know that a loose type can be used as a specified type (to access the methods on that type)

```go
var text interface{} = "hello world"
textStr, ok := text.(string) // not ok if text is not a string
```

Conversion is used when two types are actually equivalent behind the scenes (e.g. simple int and float64, or a struct that contains the same attributes)

```go
type Mac struct {
    CPU string
    RAM string
}

type Windows struct {
    CPU string
    RAM string
}

func main() {
    mac := Mac{CPU: "i7", RAM: "16GB"}
    windows := Windows(mac)
}
```

## Naming things

### Goals

- Consistent (easy to guess)
- Short (easy to type)
- Accurate (easy to understand)

### Guidelines

- Use MixedCase
- Acronyms should be in all caps (serveHTTP and not serveHttp)
- Short local variable
- Avoid redundant names given their context


#### Map

- `v, ok := m[k]`

#### Parameters

- When the types are descriptive, they should be short
- When the types are ambiguous, they should be longer

#### Return Values

- exported functions use named return values for documentaion


#### Receivers

- Short and consistent

#### Exported Package-level Names

- Qualified by the package names (they will always be referenced with the package, so don't repeat yourself)

#### Errors

- In the form of `FooError`

#### Packages

- Avoid `util`, `common`
- Should describe what the package exports and not what it contains

## Go Routines

There is the main routine and any new go routines that are created. When the go routine experiences a blocking call, it "calls out" to other go routines (or the main routine) to execute while it waits.

Main routine is treated slightly differently from child go routines.

- main routine controls when the program exits, even if there are ongoing child routines

### Channel

Communication between go routines is done through channels. Channel is typed and can be used to send and receive values.

```go
c := make(chan string)

for _, link := range links {
    go checkLink(link, c)
}

for l := range c {
    go checkLink(l, c)
}

// function literal +
// l will be the address of the outer loop due to closure
// but l is reused in the loop
for l := range c {
    go func() {
        time.Sleep(time.Second * 1)
        checkLink(l, c)
    }()
}

for l := range c {
    go func(l string) {
        time.Sleep(time.Second * 1)
        checkLink(l, c)
    }(l)
}
```

### Concurrency is not parallelism

Concurrency - execute multiple tasks at the same time (kind of, if there's more than one core), if one task is blocking, other tasks will be executed. At any one point in time, only one task is executing (for one core).

Parallelism - execute multiple tasks at the same time.

## References

- https://www.sohamkamani.com/golang/arrays-vs-slices/
- https://www.infoq.com/presentations/go-patterns/
- [What's in a name?](https://talks.golang.org/2014/names.slide#1)
