
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/bookmarks/index.html","title":"Home"}},[_v("Bookmarks")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/tlylt/bookmarks","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("All Things Tech Related")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/productivity.html"}},[_v("Productivity ⌚️")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/patterns.html"}},[_v("Patterns 💻")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/golang.html"}},[_v("Golang")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/python.html"}},[_v("Python")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interview.html"}},[_v("Interview Questions")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/interviewing.html"}},[_v("Interview Notes")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/review.html"}},[_v("Code Review")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/conversational.html"}},[_v("Conversational Agent")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/research.html"}},[_v("Research Notes")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bookmarks/contents/speak.html"}},[_v("Speaking Notes")])])])])],1)],1)]),_v(" "),_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#publishing-a-package"}},[_v("Publishing a package‎")])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"publishing-a-package"}},[_v("Publishing a package"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#publishing-a-package","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Include all files:")]),_v(" "),_c('ul',[_c('li',[_v("pip install check-manifest")]),_v(" "),_c('li',[_v("check-manifest --create")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=GIF3LaRqgXo"}},[_v("https://www.youtube.com/watch?v=GIF3LaRqgXo")])])]),_v(" "),_c('p',[_v("Package management:")]),_v(" "),_c('ul',[_c('li',[_v("pipenv install")]),_v(" "),_c('li',[_v("pipenv shell")]),_v(" "),_c('li',[_v("exit")]),_v(" "),_c('li',[_v("pipenv --rm")]),_v(" "),_c('li',[_v("pipenv install --dev")])]),_v(" "),_c('p',[_v("License:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://choosealicense.com/"}},[_v("https://choosealicense.com/")])])]),_v(" "),_c('p',[_v("Tox")]),_v(" "),_c('p',[_v("bumpversion")]),_v(" "),_c('p',[_v("cookiecutter")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/judy2k/publishing_python_packages_talk"}},[_v("https://github.com/judy2k/publishing_python_packages_talk")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/ionelmc/cookiecutter-pylibrary"}},[_v("https://github.com/ionelmc/cookiecutter-pylibrary")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.1.0")]),_v("]")])])])}
}];
  