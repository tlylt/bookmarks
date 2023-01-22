<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

# My Code Review Companion

## Software Red Flags

Shallow Module
- the interface for a class or method isn't much simpler than its implementation

Information Leakage
- a design decision is reflected in multiple modules

Temporal Decomposition
- the code structure is based on the order in which operations are executed, not on information hiding

Overexposure
- an API forces callers to be aware of rarely used features in order to use commonly used features

Pass-Through method
- a method does almost nothing except pass its arguments to another method with a similiar signature

Repetition
- a nontrivial piece of code is repeated over and over

Special-General Mixture
- special-purpose code is not cleanly separated from general-purpose code

Conjoined Methods
- two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other

Comment Repeats Code
- all of the information in a comment is immediately obvious from the code next the comment

Implementation Documentation Contaminates Interface
- an interface comment describes implementation details not needed by users of the thing being documented

Vague Name
- the name of a variable or method is so imprecise that it doesn't convey much useful information

Hard to Pick Name
- it is difficult to come up with a precise and intuitive name for an entity

Hard to Describe
- in order to be complete, the documentation for a variable or method must be long

Nonobvious Code
- the behavior or meaning of a piece of code cannot be understood easily

Source:
- philosophy of software design by John Ousterhout

## What To Say
### Case 1: If it’s a clear bug

“Hey, thanks for writing the code to do X! I had a question about the implementation. It seems like it’s using Y to get Z. I may be missing something, but what I would expect is that we would use Z to get Y. Otherwise if you look at minimal example E, I think the current logic would return “true”, whereas we’d want it to return “false”. What do you think?”

### Case 2: The code technically works, but you want it to look nicer

Here you need to be more diplomatic, and operate under the assumption that they see something in the code that you don’t. You should also be fairly selective about what you point out, so that any refactoring the author does is worth the time they spend on it.

“Hey, I see you have this code to do X. Do you know if that’s faster/more efficient/more privacy-safe than <much simpler solution>? I checked on Google but I can’t find anything.”

They’ll either say “Yes, it’s better and here’s why!”

Or they’ll say “Very cool, I actually didn’t know about <much simpler solution> but that sounds like a big readability win, thanks for telling me!”

### Case 3: You have comments on the high-level approach

“Hey, great job with this work! I was thinking, maybe we could get even more gains if we tried idea X. What do you think?”

“Hey, thanks for this awesome work! Alice is working on this other project that will deprecate this file. Should we put this code in the other file instead?”

- [Source](https://qr.ae/pv5lEN)
