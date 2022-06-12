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

## References

- https://www.sohamkamani.com/golang/arrays-vs-slices/
- https://www.infoq.com/presentations/go-patterns/
