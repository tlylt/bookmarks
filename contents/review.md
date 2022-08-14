<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

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
