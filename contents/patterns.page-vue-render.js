
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/bookmarks/index.html","title":"Home"}},[_v("Bookmarks")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/tlylt/bookmarks","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("All Things Tech Related")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/productivity.html"}},[_v("Productivity ⌚️")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/patterns.html"}},[_v("Patterns 💻")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/golang.html"}},[_v("Golang")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interview.html"}},[_v("Interview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/review.html"}},[_v("Code Review")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/conversational.html"}},[_v("Conversational Agent")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/research.html"}},[_v("Research Notes")])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("Here is a list of patterns!")]),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('p',[_v("Idea: Have a layer between a business domain and a datastore")]),_v(" "),_c('p',[_v("Create an interface to define datastore handling logic. This way the domain service logic will not depend on a specific datastore implementation, but on the interface.")]),_v(" "),_c('p',[_v("Below are the Steps.")]),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('pre',[_m(7),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(8),_v(" "),_m(9),_v(" "),_c('pre',[_m(10),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(11),_v(" "),_m(12),_v(" "),_c('pre',[_m(13),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("Idea: Call multiple services of a similar signature in a concise way")]),_v(" "),_c('p',[_v("This should be quite clear by looking at the following example.")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pre',[_m(19),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(20),_v(" "),_c('pre',[_m(21),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('p',[_v("Idea: an isolation layer created to consume values from other system,\nacting as a translation layer in both directions")]),_v(" "),_m(25),_v(" "),_c('pre',[_m(26),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('p',[_v("Call the package in the service layer with a consistent signature.")]),_v(" "),_c('pre',[_m(27),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#motivation"}},[_v("Motivation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#definitions"}},[_v("Definitions‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#repository-pattern"}},[_v("Repository Pattern‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#orchestrator-pattern"}},[_v("Orchestrator Pattern‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#anti-corruption-layer-pattern"}},[_v("Anti-Corruption Layer Pattern‎")])])])],1)])],1),_v(" "),_m(28)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"motivation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"motivation"}}),_v("Motivation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#motivation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"definitions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"definitions"}}),_v("Definitions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#definitions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ddd"}},[_c('span',{staticClass:"anchor",attrs:{"id":"ddd"}}),_v("DDD"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ddd","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"repository-pattern"}},[_c('span',{staticClass:"anchor",attrs:{"id":"repository-pattern"}}),_v("Repository Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#repository-pattern","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"create-a-repository-interface-in-the-service-layer"}},[_c('span',{staticClass:"anchor",attrs:{"id":"create-a-repository-interface-in-the-service-layer"}}),_v("Create a repository interface in the service layer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#create-a-repository-interface-in-the-service-layer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The service knows "),_c('strong',[_v("what")]),_v(" need to be done with the datastore, it may not need to know "),_c('strong',[_v("how")]),_v(". The repository interface therefore specifies the operations required by the service.")]),_v(" "),_c('li',[_v("The service domain struct will contain a reference to the repository interface, which is passed in from the constructor. This is setup to facilitate dependency injection. During testing, a mock implementation of the repository interface can be used instead.")]),_v(" "),_c('li',[_v("The service domain struct can also wrap the calls to the repository interface operations, perhaps for error handling purposes.")]),_v(" "),_c('li',[_v("It can be housed in a folder named by the service, e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("service/task.go")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// The interface to be implemented by the actual datastore")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" TaskRepository "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v(" {\n")]),_c('span',[_v("    Create()\n")]),_c('span',[_v("    Find()\n")]),_c('span',[_v("    Update()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Domain struct")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" Task "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("struct")]),_v(" {\n")]),_c('span',[_v("    repo TaskRepository\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("NewTask")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(repo TaskRepository)")]),_v(" *"),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Task")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" &Task{repo: repo}\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Illustrations of the wrapping methods on the domain struct")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(t *Task)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Create")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    t.repo.Create(ctx, id)\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(t *Task)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Find")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    t.repo.Find(ctx, id)\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(t *Task)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Update")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    t.repo.Update(ctx, id)\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"implement-the-repository-interface-in-the-datastore-layer"}},[_c('span',{staticClass:"anchor",attrs:{"id":"implement-the-repository-interface-in-the-datastore-layer"}}),_v("Implement the repository interface in the datastore layer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implement-the-repository-interface-in-the-datastore-layer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The implementation here will involve the actual datastore operations.")]),_v(" "),_c('li',[_v("It can be housed in a folder named by the datastore, e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mongoDB/mongo.go")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" MongoDBRepository "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("struct")]),_v(" {\n")]),_c('span',[_v("    url "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("NewMongoDBRepository")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(url "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")]),_v(" *"),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("MongoDBRepository")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" &MongoDBRepository{url: url}\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(m *MongoDBRepository)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Update")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Update the datastore via some query")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(m *MongoDBRepository)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Find")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Find the datastore via some query")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(m *MongoDBRepository)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Create")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context, id "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Create the datastore via some query")]),_v("\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"invoking-the-service"}},[_c('span',{staticClass:"anchor",attrs:{"id":"invoking-the-service"}}),_v("Invoking the service"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#invoking-the-service","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("repo")]),_v(" can be swapped out by a mock implementation for testing purposes.")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_v("repo := mongoDB.NewMongoDBRepository("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"db url\"")]),_v(")\n")]),_c('span',[_v("taskService := service.NewTask(repo)\n")]),_c('span',[_v("task, err := taskService.Create(context.Background(), "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"1\"")]),_v(")\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" err != "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("panic")]),_v("(err)\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"references"}},[_c('span',{staticClass:"anchor",attrs:{"id":"references"}}),_v("References"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#references","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://mariocarrion.com/2021/04/04/golang-microservices-repository-pattern.html"}},[_v("https://mariocarrion.com/2021/04/04/golang-microservices-repository-pattern.html")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"orchestrator-pattern"}},[_c('span',{staticClass:"anchor",attrs:{"id":"orchestrator-pattern"}}),_v("Orchestrator Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#orchestrator-pattern","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Abstract out the service logic into a type")]),_v(" "),_c('li',[_v("Create a collection of the services")]),_v(" "),_c('li',[_v("Invoke the services within a loop, therefore allowing a standard pre & post processing to be done for each service.")]),_v(" "),_c('li',[_v("Concurrently invoking the services is also possible.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"before"}},[_c('span',{staticClass:"anchor",attrs:{"id":"before"}}),_v("Before"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#before","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Here comes the duplication")]),_v("\n")]),_c('span',[_v("    v1, err1 := Service1(context.Background())\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" err1 != "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v(" {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("panic")]),_v("(err1)\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("    \n")]),_c('span',[_v("    v2, err2 := Service2(context.Background())\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" err2 != "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v(" {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("panic")]),_v("(err1)\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("    \n")]),_c('span',[_v("    v3, err3 := Service3(context.Background())\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" err3 != "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v(" {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("panic")]),_v("(err1)\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service1")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("100")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service2")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("200")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service3")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("300")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("3")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"after"}},[_c('span',{staticClass:"anchor",attrs:{"id":"after"}}),_v("After"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#after","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Abstract the signature of the services")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" Service "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v(" {\n")]),_c('span',[_v("    services := []Service{Service1, Service2, Service3}\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" _, service := "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("range")]),_v(" services {\n")]),_c('span',[_v("        v, err := service(context.Background())\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" err != "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v(" {\n")]),_c('span',[_v("            "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("panic")]),_v("(err)\n")]),_c('span',[_v("        }\n")]),_c('span',[_v("        fmt.Println(v)\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service1")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("100")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service2")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("200")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Service3")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(ctx context.Context)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("int64")]),_v(", error)")])]),_v(" {\n")]),_c('span',[_v("    time.Sleep("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("300")]),_v(" * time.Millisecond)\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("3")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("nil")]),_v("\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"references-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"references-2"}}),_v("References"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#references-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://youtu.be/jPVz1Y4_2k4"}},[_v("https://youtu.be/jPVz1Y4_2k4")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"anti-corruption-layer-pattern"}},[_c('span',{staticClass:"anchor",attrs:{"id":"anti-corruption-layer-pattern"}}),_v("Anti-Corruption Layer Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#anti-corruption-layer-pattern","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"create-an-anticorruption-package"}},[_c('span',{staticClass:"anchor",attrs:{"id":"create-an-anticorruption-package"}}),_v("Create an anticorruption package"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#create-an-anticorruption-package","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("package")]),_v(" anticorruption\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// import the two packages")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Kelvin")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(counutry "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("float64")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Call the Kelvin package here")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" kelvin.Calculate(country) - "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("273.15")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Fahrenheit")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(country "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("string")]),_v(")")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("float64")])]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Call the Fahrenheit package here")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" ("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("5.0")]),_v("/"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("9.0")]),_v(") * (fahrenheit.New(country).Value() "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("-32")]),_v(")\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs go"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("func")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v(" {\n")]),_c('span',[_v("    kelvin := anticorruption.Kelvin("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"US\"")]),_v(")\n")]),_c('span',[_v("    fahrenheit := anticorruption.Fahrenheit("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"US\"")]),_v(")\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v("]")])])])}
}];
  