
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/bookmarks/index.html","title":"Home"}},[_v("Bookmarks")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/tlylt/bookmarks","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("All Things Tech Related")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/productivity.html"}},[_v("Productivity ⌚️")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/patterns.html"}},[_v("Patterns 💻")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/golang.html"}},[_v("Golang")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/python.html"}},[_v("Python")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interview.html"}},[_v("Interview Questions")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interviewing.html"}},[_v("Interview Notes")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/review.html"}},[_v("Code Review")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/conversational.html"}},[_v("Conversational Agent")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/research.html"}},[_v("Research Notes")])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('p',[_v("Shallow Module")]),_v(" "),_m(2),_v(" "),_c('p',[_v("Information Leakage")]),_v(" "),_m(3),_v(" "),_c('p',[_v("Temporal Decomposition")]),_v(" "),_m(4),_v(" "),_c('p',[_v("Overexposure")]),_v(" "),_m(5),_v(" "),_c('p',[_v("Pass-Through method")]),_v(" "),_m(6),_v(" "),_c('p',[_v("Repetition")]),_v(" "),_m(7),_v(" "),_c('p',[_v("Special-General Mixture")]),_v(" "),_m(8),_v(" "),_c('p',[_v("Conjoined Methods")]),_v(" "),_m(9),_v(" "),_c('p',[_v("Comment Repeats Code")]),_v(" "),_m(10),_v(" "),_c('p',[_v("Implementation Documentation Contaminates Interface")]),_v(" "),_m(11),_v(" "),_c('p',[_v("Vague Name")]),_v(" "),_m(12),_v(" "),_c('p',[_v("Hard to Pick Name")]),_v(" "),_m(13),_v(" "),_c('p',[_v("Hard to Describe")]),_v(" "),_m(14),_v(" "),_c('p',[_v("Nonobvious Code")]),_v(" "),_m(15),_v(" "),_c('p',[_v("Source:")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("“Hey, thanks for writing the code to do X! I had a question about the implementation. It seems like it’s using Y to get Z. I may be missing something, but what I would expect is that we would use Z to get Y. Otherwise if you look at minimal example E, I think the current logic would return “true”, whereas we’d want it to return “false”. What do you think?”")]),_v(" "),_m(19),_v(" "),_c('p',[_v("Here you need to be more diplomatic, and operate under the assumption that they see something in the code that you don’t. You should also be fairly selective about what you point out, so that any refactoring the author does is worth the time they spend on it.")]),_v(" "),_c('p',[_v("“Hey, I see you have this code to do X. Do you know if that’s faster/more efficient/more privacy-safe than "),_c('much',{attrs:{"simpler":"","solution":""}},[_v("? I checked on Google but I can’t find anything.”")])],1),_v(" "),_c('p',[_v("They’ll either say “Yes, it’s better and here’s why!”")]),_v(" "),_c('p',[_v("Or they’ll say “Very cool, I actually didn’t know about "),_c('much',{attrs:{"simpler":"","solution":""}},[_v(" but that sounds like a big readability win, thanks for telling me!”")])],1),_v(" "),_m(20),_v(" "),_c('p',[_v("“Hey, great job with this work! I was thinking, maybe we could get even more gains if we tried idea X. What do you think?”")]),_v(" "),_c('p',[_v("“Hey, thanks for this awesome work! Alice is working on this other project that will deprecate this file. Should we put this code in the other file instead?”")]),_v(" "),_m(21)]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#my-code-review-companion"}},[_v("My Code Review Companion‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#software-red-flags"}},[_v("Software Red Flags‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#what-to-say"}},[_v("What To Say‎")])])])],1)])],1),_v(" "),_m(22)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"my-code-review-companion"}},[_v("My Code Review Companion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-code-review-companion","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"software-red-flags"}},[_v("Software Red Flags"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#software-red-flags","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("the interface for a class or method isn't much simpler than its implementation")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("a design decision is reflected in multiple modules")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("the code structure is based on the order in which operations are executed, not on information hiding")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("an API forces callers to be aware of rarely used features in order to use commonly used features")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("a method does almost nothing except pass its arguments to another method with a similiar signature")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("a nontrivial piece of code is repeated over and over")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("special-purpose code is not cleanly separated from general-purpose code")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("all of the information in a comment is immediately obvious from the code next the comment")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("an interface comment describes implementation details not needed by users of the thing being documented")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("the name of a variable or method is so imprecise that it doesn't convey much useful information")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("it is difficult to come up with a precise and intuitive name for an entity")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("in order to be complete, the documentation for a variable or method must be long")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("the behavior or meaning of a piece of code cannot be understood easily")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("philosophy of software design by John Ousterhout")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"what-to-say"}},[_v("What To Say"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-to-say","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"case-1-if-it-s-a-clear-bug"}},[_v("Case 1: If it’s a clear bug"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#case-1-if-it-s-a-clear-bug","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"case-2-the-code-technically-works-but-you-want-it-to-look-nicer"}},[_v("Case 2: The code technically works, but you want it to look nicer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#case-2-the-code-technically-works-but-you-want-it-to-look-nicer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"case-3-you-have-comments-on-the-high-level-approach"}},[_v("Case 3: You have comments on the high-level approach"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#case-3-you-have-comments-on-the-high-level-approach","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://qr.ae/pv5lEN"}},[_v("Source")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.0.1")]),_v("]")])])])}
}];
  