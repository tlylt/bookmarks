
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/bookmarks/index.html","title":"Home"}},[_v("Bookmarks")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/tlylt/bookmarks","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("All Things Tech Related")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/productivity.html"}},[_v("Productivity ⌚️")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/patterns.html"}},[_v("Patterns 💻")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/golang.html"}},[_v("Golang")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interview.html"}},[_v("Interview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/review.html"}},[_v("Code Review")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/conversational.html"}},[_v("Conversational Agent")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/research.html"}},[_v("Research Notes")])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("Here's my notes on the Go programming language!")]),_v(" "),_m(1),_v(" "),_m(2),_m(3),_v(" "),_m(4),_m(5),_v(" "),_c('p',[_v("Assertion is used when you know that a loose type can be used as a specified type (to access the methods on that type)")]),_v(" "),_c('pre',[_m(6),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('p',[_v("Conversion is used when two types are actually equivalent behind the scenes (e.g. simple int and float64, or a struct that contains the same attributes)")]),_v(" "),_c('pre',[_m(7),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_c('p',[_v("There is the main routine and any new go routines that are created. When the go routine experiences a blocking call, it \"calls out\" to other go routines (or the main routine) to execute while it waits.")]),_v(" "),_c('p',[_v("Main routine is treated slightly differently from child go routines.")]),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('p',[_v("Communication between go routines is done through channels. Channel is typed and can be used to send and receive values.")]),_v(" "),_c('pre',[_m(30),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(31),_v(" "),_c('p',[_v("Concurrency - execute multiple tasks at the same time (kind of, if there's more than one core), if one task is blocking, other tasks will be executed. At any one point in time, only one task is executing (for one core).")]),_v(" "),_c('p',[_v("Parallelism - execute multiple tasks at the same time.")]),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#motivation"}},[_v("Motivation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#pass-by-value"}},[_v("Pass by Value‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#array-vs-slice"}},[_v("Array vs Slice‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#type-assertion-vs-type-conversion"}},[_v("Type Assertion vs Type Conversion‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#naming-things"}},[_v("Naming things‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#go-routines"}},[_v("Go Routines‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#references"}},[_v("References‎")])])])],1)])],1),_v(" "),_m(34)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"motivation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"motivation"}}),_v("Motivation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#motivation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"pass-by-value"}},[_c('span',{staticClass:"anchor",attrs:{"id":"pass-by-value"}}),_v("Pass by Value"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pass-by-value","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Value Type "),_c('br'),_v(" (use a pointer if needs to modify)")]),_v(" "),_c('th',[_v("Reference Type "),_c('br'),_v(" (can be modified directly)")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("int")]),_v(" "),_c('td',[_v("slice")])]),_v(" "),_c('tr',[_c('td',[_v("float")]),_v(" "),_c('td',[_v("map")])]),_v(" "),_c('tr',[_c('td',[_v("string")]),_v(" "),_c('td',[_v("channel")])]),_v(" "),_c('tr',[_c('td',[_v("bool")]),_v(" "),_c('td',[_v("pointer")])]),_v(" "),_c('tr',[_c('td',[_v("struct")]),_v(" "),_c('td',[_v("function")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"array-vs-slice"}},[_c('span',{staticClass:"anchor",attrs:{"id":"array-vs-slice"}}),_v("Array vs Slice"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#array-vs-slice","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Array")]),_v(" "),_c('th',[_v("Slide")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("the length is part of the type")]),_v(" "),_c('td',[_v("dynamically sized")])]),_v(" "),_c('tr',[_c('td',[_v("use a pointer if needs to modify")]),_v(" "),_c('td',[_v("can be passed in directly")])]),_v(" "),_c('tr',[_c('td',[_v("use if size is known")]),_v(" "),_c('td',[_v("use if need to modify")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("arr := [4]int{3, 2, 5, 4}")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("arr := make([]int, 0, 5)")]),_v(" "),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("// This creates a slice with length 0 and capacity 5")]),_v(" "),_c('br'),_v(" recommended to specify capacity if known")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"type-assertion-vs-type-conversion"}},[_c('span',{staticClass:"anchor",attrs:{"id":"type-assertion-vs-type-conversion"}}),_v("Type Assertion vs Type Conversion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#type-assertion-vs-type-conversion","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" text "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v("{} = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"hello world\"")]),_v("\n")]),_c('span',[_v("textStr, ok := text.("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// not ok if text is not a string")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" Mac "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("struct")]),_v(" {\n")]),_c('span',[_v("    CPU "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v("\n")]),_c('span',[_v("    RAM "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" Windows "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("struct")]),_v(" {\n")]),_c('span',[_v("    CPU "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v("\n")]),_c('span',[_v("    RAM "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v(" {\n")]),_c('span',[_v("    mac := Mac{CPU: "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"i7\"")]),_v(", RAM: "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"16GB\"")]),_v("}\n")]),_c('span',[_v("    windows := Windows(mac)\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"naming-things"}},[_c('span',{staticClass:"anchor",attrs:{"id":"naming-things"}}),_v("Naming things"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#naming-things","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"goals"}},[_c('span',{staticClass:"anchor",attrs:{"id":"goals"}}),_v("Goals"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#goals","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Consistent (easy to guess)")]),_v(" "),_c('li',[_v("Short (easy to type)")]),_v(" "),_c('li',[_v("Accurate (easy to understand)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"guidelines"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guidelines"}}),_v("Guidelines"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guidelines","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Use MixedCase")]),_v(" "),_c('li',[_v("Acronyms should be in all caps (serveHTTP and not serveHttp)")]),_v(" "),_c('li',[_v("Short local variable")]),_v(" "),_c('li',[_v("Avoid redundant names given their context")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"map"}},[_c('span',{staticClass:"anchor",attrs:{"id":"map"}}),_v("Map"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#map","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v, ok := m[k]")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"parameters"}},[_c('span',{staticClass:"anchor",attrs:{"id":"parameters"}}),_v("Parameters"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#parameters","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When the types are descriptive, they should be short")]),_v(" "),_c('li',[_v("When the types are ambiguous, they should be longer")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"return-values"}},[_c('span',{staticClass:"anchor",attrs:{"id":"return-values"}}),_v("Return Values"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#return-values","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("exported functions use named return values for documentaion")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"receivers"}},[_c('span',{staticClass:"anchor",attrs:{"id":"receivers"}}),_v("Receivers"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#receivers","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Short and consistent")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"exported-package-level-names"}},[_c('span',{staticClass:"anchor",attrs:{"id":"exported-package-level-names"}}),_v("Exported Package-level Names"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exported-package-level-names","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Qualified by the package names (they will always be referenced with the package, so don't repeat yourself)")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"errors"}},[_c('span',{staticClass:"anchor",attrs:{"id":"errors"}}),_v("Errors"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#errors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the form of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FooError")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"packages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"packages"}}),_v("Packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#packages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Avoid "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("util")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("common")])]),_v(" "),_c('li',[_v("Should describe what the package exports and not what it contains")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"go-routines"}},[_c('span',{staticClass:"anchor",attrs:{"id":"go-routines"}}),_v("Go Routines"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#go-routines","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("main routine controls when the program exits, even if there are ongoing child routines")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"channel"}},[_c('span',{staticClass:"anchor",attrs:{"id":"channel"}}),_v("Channel"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#channel","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_v("c := "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("make")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("chan")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" _, link := "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("range")]),_v(" links {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("go")]),_v(" checkLink(link, c)\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" l := "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("range")]),_v(" c {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("go")]),_v(" checkLink(l, c)\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// function literal +")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// l will be the address of the outer loop due to closure")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// but l is reused in the loop")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" l := "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("range")]),_v(" c {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("go")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v(" {\n")]),_c('span',[_v("        time.Sleep(time.Second * "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(")\n")]),_c('span',[_v("        checkLink(l, c)\n")]),_c('span',[_v("    }()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" l := "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("range")]),_v(" c {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("go")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(l "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("        time.Sleep(time.Second * "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(")\n")]),_c('span',[_v("        checkLink(l, c)\n")]),_c('span',[_v("    }(l)\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"concurrency-is-not-parallelism"}},[_c('span',{staticClass:"anchor",attrs:{"id":"concurrency-is-not-parallelism"}}),_v("Concurrency is not parallelism"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#concurrency-is-not-parallelism","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"references"}},[_c('span',{staticClass:"anchor",attrs:{"id":"references"}}),_v("References"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#references","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.sohamkamani.com/golang/arrays-vs-slices/"}},[_v("https://www.sohamkamani.com/golang/arrays-vs-slices/")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.infoq.com/presentations/go-patterns/"}},[_v("https://www.infoq.com/presentations/go-patterns/")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://talks.golang.org/2014/names.slide#1"}},[_v("What's in a name?")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v("]")])])])}
}];
  