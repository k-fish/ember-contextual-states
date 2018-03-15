"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,s){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,s.default.modulePrefix),e.default=a}),define("dummy/components/accordion-state",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component.extend({classNameBindings:["colour","isActive"],isActive:Ember.computed("currentState","stateName",function(){return this.get("currentState")===this.get("stateName")}),classNames:"accordion-state",mouseEnter:function(){this.get("setState")(this.get("stateName"))}})
t.reopenClass({positionalParams:["stateName"]}),e.default=t}),define("dummy/components/code-snippet",["exports","dummy/snippets"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var t,n,s=e.split("\n").filter(function(e){return""!==e}),a=0;a<s.length;a++)(t=/^[ \t]*/.exec(s[a]))&&(void 0===n||n>t[0].length)&&(n=t[0].length)
return void 0!==n&&n>0&&(e=e.replace(new RegExp("^[ \t]{"+n+"}","gm"),"")),e},source:Ember.computed("name",function(){var e=this.get("name").split("/").reduce(function(e,t){return e&&e[t]},t.default)
return this._unindent((e||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/contextual-states",["exports","ember-contextual-states/components/contextual-states"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/contextual-states/contextual-state",["exports","ember-contextual-states/components/contextual-states/contextual-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/contextual-states/contextual-state/state-content",["exports","ember-contextual-states/components/contextual-states/contextual-state/state-content"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/scroll-to",["exports","ember-scroll-to/components/scroll-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/components/steps-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("dummy/components/tabs-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("dummy/components/tabs-menu",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var s,a=t.default.exportApplicationGlobal
s="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[s]||(n[s]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[s]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/scroller",["exports","ember-scroll-to/services/scroller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"example-accordion-component.hbs":"{{#contextual-states as |states|}}\r\n  {{yield\r\n    (hash\r\n      pane=(component 'accordion-state'\r\n        currentState=states.currentState\r\n        stateComponent=(component states.state separateContent=false)\r\n        setState=states.setState\r\n      )\r\n      currentPane=(readonly states.currentState)\r\n    )\r\n  }}\r\n{{/contextual-states}}\r\n","example-accordion-state.hbs":"{{#component stateComponent stateName}}\r\n  <h1>\r\n    {{stateName}}\r\n  </h1>\r\n{{/component}}\r\n","example-accordion.hbs":'{{#accordion-component as |accordion|}}\r\n  <div class="accordion">\r\n    {{accordion.pane \'Photos\' colour="blue"}}\r\n    {{accordion.pane \'Music\' colour="green"}}\r\n    {{accordion.pane \'Video\' colour="red"}}\r\n  </div>\r\n  <h4 class="title">\r\n    {{accordion.currentPane}}\r\n  </h4>\r\n{{/accordion-component}}\r\n',"example-steps-component.hbs":"{{#contextual-states as |states|}}\r\n  {{yield (hash\r\n      step=(component states.state classNames=\"content padded\" separateContent=false)\r\n      goToStep=(component 'steps-goto-button' goToStep=(action states.setState) label='Next')\r\n    )\r\n  }}\r\n{{/contextual-states}}\r\n","example-steps-goto-button.hbs":'{{!-- Button for going to other steps --}}\r\n<button class="button is-primary"\r\n  {{action goToStep stepName}}>\r\n  {{label}}\r\n</button>\r\n',"example-steps.hbs":"{{!-- This is contained inside a modal window wrapper --}}\r\n{{#steps-component as |steps|}}\r\n  {{#steps.step 'First Step'}}\r\n    <p>\r\n      Content for first step.\r\n    </p>\r\n    <p>\r\n      {{steps.goToStep stepName='Second Step'}}\r\n    </p>\r\n  {{/steps.step}}\r\n  {{#steps.step 'Second Step'}}\r\n    <p>\r\n      Content for second step.\r\n    </p>\r\n    <p>\r\n      {{steps.goToStep stepName='Third Step'}}\r\n    </p>\r\n  {{/steps.step}}\r\n  {{#steps.step 'Third Step'}}\r\n    <p>\r\n      Content for third step.\r\n    </p>\r\n    <p>\r\n      {{steps.goToStep\r\n        stepName='First Step'\r\n        label=\"Back to the beginning\"\r\n      }}\r\n    </p>\r\n  {{/steps.step}}\r\n{{/steps-component}}\r\n","example-tabs-component.hbs":"{{#contextual-states as |states|}}\r\n  {{yield (hash\r\n      tab=(component states.state classNames=\"content padded\" separateContent=false)\r\n      menu=(component 'tabs-menu' states=states contextualStateAPIs=states.contextualStateAPIs)\r\n    )\r\n  }}\r\n{{/contextual-states}}\r\n","example-tabs-menu.hbs":'<div class="tabs">\r\n  <ul>\r\n    {{#each contextualStateAPIs as |availableState|}}\r\n      <li class="{{if availableState.isActive \'is-active\'}}">\r\n        <a {{action states.setState availableState.stateName}}>\r\n          {{availableState.stateName}}\r\n        </a>\r\n      </li>\r\n    {{/each}}\r\n  </ul>\r\n</div>\r\n',"example-tabs.hbs":"{{#tabs-component as |tabs|}}\r\n  {{tabs.menu}}\r\n  {{#tabs.tab 'Picture'}}\r\n    <h5 class=\"title\">Content for Pictures Here</h5>\r\n  {{/tabs.tab}}\r\n  {{#tabs.tab 'Music'}}\r\n    <h5 class=\"title\">Content for Music Here</h5>\r\n  {{/tabs.tab}}\r\n  {{#tabs.tab 'Videos'}}\r\n    <h5 class=\"title\">Content for Videos Here</h5>\r\n  {{/tabs.tab}}\r\n{{/tabs-component}}\r\n","usage-advanced.hbs":"{{#contextual-states as |states|}}\r\n  {{#states.state 'Hello' as |state|}}\r\n    {{#state.content}}\r\n      This block will get rendered because the first state is by default the active one.\r\n      <button {{action state.setState 'World'}}>Next</button>\r\n    {{/state.content}}\r\n  {{/states.state}}\r\n  {{#states.state 'World' as |state|}}\r\n    {{#if state.isActive}}\r\n      This gives you an additional control on what to display if the state is active.\r\n    {{/if}}\r\n  {{/states.state}}\r\n  {{#states.state 'Foobar' as |state|}}\r\n    {{#if state.isLoading}}\r\n      If your states need to perform an async request, the current state will become 'loading' while the async request\r\n      is being performed.\r\n    {{/if}}\r\n    <button {{action state.setState 'Hello'}}>\r\n      You can switch states by calling the yielded function\r\n    </button>\r\n  {{/states.state}}\r\n{{/contextual-states}}\r\n","usage-basic.hbs":"{{#contextual-states as |states|}}\r\n  {{#states.state 'Hello' as |state|}}\r\n    {{#state.content}}\r\n      This block will get rendered because the first state is by default the active one.\r\n      <button {{action state.setState 'World'}}>Next</button>\r\n    {{/state.content}}\r\n  {{/states.state}}\r\n  {{#states.state 'World' as |state|}}\r\n    {{#state.content}}\r\n      This state will not be rendered unless the state is active.\r\n      <button {{action state.setState 'Hello'}}>Previous</button>\r\n    {{/state.content}}\r\n  {{/states.state}}\r\n{{/contextual-states}}\r\n"}}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"2D8jRXyF",block:'{"symbols":[],"statements":[[6,"section"],[9,"class","hero is-medium is-primary is-bold"],[7],[0,"\\n  "],[6,"div"],[9,"class","hero-body"],[7],[0,"\\n    "],[6,"div"],[9,"class","container has-text-centered"],[7],[0,"\\n      "],[6,"h1"],[9,"class","title"],[7],[0,"\\n        Ember Contextual States\\n      "],[8],[0,"\\n      "],[6,"h2"],[9,"class","subtitle"],[7],[0,"\\n        Just a simple mix of contextual components and state machines 🎉\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","hero-foot"],[7],[0,"\\n    "],[6,"nav"],[9,"class","tabs is-boxed"],[7],[0,"\\n      "],[6,"div"],[9,"class","container"],[7],[0,"\\n        "],[6,"ul"],[7],[0,"\\n          "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#about","About"]]],false],[8],[0,"\\n          "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#usage","Usage"]]],false],[8],[0,"\\n          "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#examples","Examples"]]],false],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[10,"href",[26,[[18,"githubUrl"]]]],[7],[0,"Contributing"],[8],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","section"],[7],[0,"\\n  "],[6,"div"],[9,"class","container"],[7],[0,"\\n    "],[6,"h1"],[9,"id","about"],[9,"class","title"],[7],[0,"About"],[8],[0,"\\n    "],[6,"hr"],[7],[8],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"p"],[9,"class","subtitle is-6"],[7],[6,"strong"],[7],[0,"This is currently an in-development addon, and may not be actively maintained. Use\\n          with care."],[8],[0," ⚠️\\n      "],[8],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Ever felt frustrated writing boilerplate for making things like tabs, multi-steps modals (tours), accordions etc?\\n        This is a simple addon aimed\\n        at providing a way to manage states, using contextual components for management. It allows content to be rendered\\n        with loading and active provided contextually, along with hooks for performing (async) actions between states. For\\n        anything more complicated, you probably want routes or engines.\\n      "],[8],[0,"\\n      "],[6,"p"],[7],[0,"\\n        The provided component is somewhat verbose, but is meant to be used in composition. See the "],[1,[25,"scroll-to",null,[["href","label"],["#examples","examples"]]],false],[0," section for\\n        ways to simplify the api with composition.\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","section"],[7],[0,"\\n  "],[6,"div"],[9,"class","container"],[7],[0,"\\n    "],[6,"h1"],[9,"id","usage"],[9,"class","title"],[7],[0,"Usage"],[8],[0,"\\n    "],[6,"hr"],[7],[8],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can make a new set of states by using the "],[6,"code"],[7],[0,"{{contextual-states}}"],[8],[0," component. You may also want to\\n        specify an "],[6,"code"],[7],[0,"initialState"],[8],[0,", if you don\'t want the default template order.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["usage-basic.hbs"]]],false],[0,"\\n      "],[6,"p"],[7],[0,"\\n        As seen above, a state will yield a "],[6,"code"],[7],[0,"content"],[8],[0," block, which is where content is rendered if the state\\n        is active. If you need to customize behaviour further, the components yield state information as well.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["usage-advanced.hbs"]]],false],[0,"\\n      "],[6,"br"],[7],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","section"],[7],[0,"\\n  "],[6,"div"],[9,"class","container"],[7],[0,"\\n    "],[6,"h1"],[9,"id","examples"],[9,"class","title"],[7],[0,"Examples"],[8],[0,"\\n    "],[6,"div"],[9,"class","subtitle"],[7],[0,"Made with Bulma CSS ❤️ "],[8],[0,"\\n    "],[6,"hr"],[7],[8],[0,"\\n    "],[6,"h3"],[9,"class","title is-4 is-spaced"],[7],[0,"Tabs"],[8],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can compose to simplify a tabs component.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["example-tabs-component.hbs"]]],false],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Then with the simplified component you can now use the concept of tabs anywhere.\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","columns"],[7],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","content"],[7],[0,"\\n          "],[1,[25,"code-snippet",null,[["name"],["example-tabs.hbs"]]],false],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","code-example padded"],[7],[0,"\\n        "],[12,"snippets/example-tabs",[]],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"h3"],[9,"class","title is-4 is-spaced"],[7],[0,"Steps"],[8],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can make a wizard-like experience by composing with steps.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["example-steps-component.hbs"]]],false],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Here you can provide a sane default for a button and expose it as a yielded component.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["example-steps-goto-button.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","columns"],[7],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","content"],[7],[0,"\\n          "],[1,[25,"code-snippet",null,[["name"],["example-steps.hbs"]]],false],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","code-example padded has-text-centered flex-center flex-column"],[7],[0,"\\n        "],[12,"snippets/example-steps",[]],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"h3"],[9,"class","title is-4 is-spaced"],[7],[0,"Accordion"],[8],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can also make accordions or manage accordion states.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["example-accordion-component.hbs"]]],false],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Creating a new component allows the component to catch mouseEnter events to set the state.\\n      "],[8],[0,"\\n      "],[1,[25,"code-snippet",null,[["name"],["example-accordion-state.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","columns"],[7],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","content"],[7],[0,"\\n          "],[1,[25,"code-snippet",null,[["name"],["example-accordion.hbs"]]],false],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"div"],[9,"class","code-example padded has-text-centered flex-center flex-column"],[7],[0,"\\n        "],[12,"snippets/example-accordion",[]],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"a"],[10,"href",[26,[[18,"githubUrl"]]]],[9,"class","github-corner"],[9,"aria-label","View source on Github"],[7],[6,"svg"],[9,"width","80"],[9,"height","80"],[9,"viewBox","0 0 250 250"],[9,"style","fill:#E04E39; color:#fff; position: fixed; top: 0; border: 0; right: 0;"],[9,"aria-hidden","true"],[7],[6,"path"],[9,"d","M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"],[7],[8],[6,"path"],[9,"d","M128.3,109.0\\n    C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9\\n    125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"],[9,"fill","currentColor"],[9,"style","transform-origin: 130px\\n    106px;"],[9,"class","octo-arm"],[7],[8],[6,"path"],[9,"d","M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2\\n    139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6\\n    171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6\\n    C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5\\n    C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9\\n    141.8,141.8 Z"],[9,"fill","currentColor"],[9,"class","octo-body"],[7],[8],[8],[8],[6,"style"],[7],[0,".github-corner:hover\\n.octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes\\noctocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media\\n(max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms\\n    ease-in-out}}"],[8],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/accordion-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"nzfR7aun",block:'{"symbols":[],"statements":[[12,"snippets/example-accordion-component",[]],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/accordion-component.hbs"}})}),define("dummy/templates/components/accordion-state",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HAmfMphP",block:'{"symbols":[],"statements":[[12,"snippets/example-accordion-state",[]],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/accordion-state.hbs"}})}),define("dummy/templates/components/code-example-menu",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"hdHdoL2i",block:'{"symbols":["availableState"],"statements":[[4,"each",[[20,["contextualStateAPIs"]]],null,{"statements":[[4,"unless",[[19,1,["isActive"]]],null,{"statements":[[0,"    "],[6,"a"],[3,"action",[[19,0,[]],[20,["states","setState"]],[19,1,["stateName"]]]],[7],[0,"\\n      "],[1,[19,1,["stateName"]],false],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-example-menu.hbs"}})}),define("dummy/templates/components/code-example",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"W+Brku+O",block:'{"symbols":["states","&default"],"statements":[[4,"contextual-states",null,null,{"statements":[[0,"  "],[11,2,[[25,"hash",null,[["pane","menu"],[[25,"component",[[19,1,["state"]]],[["separateContent"],[false]]],[25,"component",["code-example-menu"],[["states","contextualStateAPIs"],[[19,1,[]],[19,1,["contextualStateAPIs"]]]]]]]]]],[0,"\\n  "],[1,[19,1,["contextualStateAPIs","length"]],false],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-example.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"I3g5LP0b",block:'{"symbols":[],"statements":[[1,[18,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/components/scroll-to",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Dp8qfv+q",block:'{"symbols":["&default"],"statements":[[4,"if",[[22,1]],null,{"statements":[[0,"  "],[11,1],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[1,[18,"label"],false],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/scroll-to.hbs"}})}),define("dummy/templates/components/steps-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wnsbiYlW",block:'{"symbols":[],"statements":[[6,"button"],[9,"class","button is-primary"],[3,"action",[[19,0,[]],[25,"mut",[[20,["isOpen"]]],null],true]],[7],[0,"\\n  Open\\n"],[8],[0,"\\n"],[6,"div"],[10,"class",[26,["modal ",[25,"if",[[20,["isOpen"]],"is-active"],null]]]],[7],[0,"\\n  "],[6,"div"],[9,"class","modal-background"],[7],[8],[0,"\\n  "],[6,"div"],[9,"class","modal-content"],[7],[0,"\\n    "],[6,"div"],[9,"class","content box"],[7],[0,"\\n      "],[12,"snippets/example-steps-component",[]],[0,"\\n      "],[6,"button"],[9,"class","button"],[3,"action",[[19,0,[]],[25,"mut",[[20,["isOpen"]]],null],false]],[7],[0,"\\n        Close\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"button"],[9,"class","modal-close is-large"],[9,"aria-label","close"],[3,"action",[[19,0,[]],[25,"mut",[[20,["isOpen"]]],null],false]],[7],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/steps-component.hbs"}})}),define("dummy/templates/components/steps-goto-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"MwoVN6fk",block:'{"symbols":[],"statements":[[12,"snippets/example-steps-goto-button",[]],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/steps-goto-button.hbs"}})}),define("dummy/templates/components/tabs-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"sH/P/PTC",block:'{"symbols":[],"statements":[[12,"snippets/example-tabs-component",[]],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/tabs-component.hbs"}})}),define("dummy/templates/components/tabs-menu",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"zIq0p1Pu",block:'{"symbols":[],"statements":[[12,"snippets/example-tabs-menu",[]],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/components/tabs-menu.hbs"}})}),define("dummy/templates/snippets/example-accordion-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"nWAk5t3k",block:'{"symbols":["states","&default"],"statements":[[4,"contextual-states",null,null,{"statements":[[0,"  "],[11,2,[[25,"hash",null,[["pane","currentPane"],[[25,"component",["accordion-state"],[["currentState","stateComponent","setState"],[[19,1,["currentState"]],[25,"component",[[19,1,["state"]]],[["separateContent"],[false]]],[19,1,["setState"]]]]],[25,"readonly",[[19,1,["currentState"]]],null]]]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-accordion-component.hbs"}})}),define("dummy/templates/snippets/example-accordion-state",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"gQhjFBrg",block:'{"symbols":[],"statements":[[4,"component",[[20,["stateComponent"]],[20,["stateName"]]],null,{"statements":[[0,"  "],[6,"h1"],[7],[0,"\\n    "],[1,[18,"stateName"],false],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-accordion-state.hbs"}})})
define("dummy/templates/snippets/example-accordion",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"CyrEGmbk",block:'{"symbols":["accordion"],"statements":[[4,"accordion-component",null,null,{"statements":[[0,"  "],[6,"div"],[9,"class","accordion"],[7],[0,"\\n    "],[1,[25,"component",[[19,1,["pane"]],"Photos"],[["colour"],["blue"]]],false],[0,"\\n    "],[1,[25,"component",[[19,1,["pane"]],"Music"],[["colour"],["green"]]],false],[0,"\\n    "],[1,[25,"component",[[19,1,["pane"]],"Video"],[["colour"],["red"]]],false],[0,"\\n  "],[8],[0,"\\n  "],[6,"h4"],[9,"class","title"],[7],[0,"\\n    "],[1,[19,1,["currentPane"]],false],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-accordion.hbs"}})}),define("dummy/templates/snippets/example-steps-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"uxCeN4oA",block:'{"symbols":["states","&default"],"statements":[[4,"contextual-states",null,null,{"statements":[[0,"  "],[11,2,[[25,"hash",null,[["step","goToStep"],[[25,"component",[[19,1,["state"]]],[["classNames","separateContent"],["content padded",false]]],[25,"component",["steps-goto-button"],[["goToStep","label"],[[25,"action",[[19,0,[]],[19,1,["setState"]]],null],"Next"]]]]]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-steps-component.hbs"}})}),define("dummy/templates/snippets/example-steps-goto-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"hfBlimuD",block:'{"symbols":[],"statements":[[6,"button"],[9,"class","button is-primary"],[3,"action",[[19,0,[]],[20,["goToStep"]],[20,["stepName"]]]],[7],[0,"\\n  "],[1,[18,"label"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-steps-goto-button.hbs"}})}),define("dummy/templates/snippets/example-steps",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"5ILseL8E",block:'{"symbols":["steps"],"statements":[[4,"steps-component",null,null,{"statements":[[4,"component",[[19,1,["step"]],"First Step"],null,{"statements":[[0,"    "],[6,"p"],[7],[0,"\\n      Content for first step.\\n    "],[8],[0,"\\n    "],[6,"p"],[7],[0,"\\n      "],[1,[25,"component",[[19,1,["goToStep"]]],[["stepName"],["Second Step"]]],false],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[4,"component",[[19,1,["step"]],"Second Step"],null,{"statements":[[0,"    "],[6,"p"],[7],[0,"\\n      Content for second step.\\n    "],[8],[0,"\\n    "],[6,"p"],[7],[0,"\\n      "],[1,[25,"component",[[19,1,["goToStep"]]],[["stepName"],["Third Step"]]],false],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[4,"component",[[19,1,["step"]],"Third Step"],null,{"statements":[[0,"    "],[6,"p"],[7],[0,"\\n      Content for third step.\\n    "],[8],[0,"\\n    "],[6,"p"],[7],[0,"\\n      "],[1,[25,"component",[[19,1,["goToStep"]]],[["stepName","label"],["First Step","Back to the beginning"]]],false],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-steps.hbs"}})}),define("dummy/templates/snippets/example-tabs-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"eYGFg8to",block:'{"symbols":["states","&default"],"statements":[[4,"contextual-states",null,null,{"statements":[[0,"  "],[11,2,[[25,"hash",null,[["tab","menu"],[[25,"component",[[19,1,["state"]]],[["classNames","separateContent"],["content padded",false]]],[25,"component",["tabs-menu"],[["states","contextualStateAPIs"],[[19,1,[]],[19,1,["contextualStateAPIs"]]]]]]]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-tabs-component.hbs"}})}),define("dummy/templates/snippets/example-tabs-menu",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"P/GEx3Zb",block:'{"symbols":["availableState"],"statements":[[6,"div"],[9,"class","tabs"],[7],[0,"\\n  "],[6,"ul"],[7],[0,"\\n"],[4,"each",[[20,["contextualStateAPIs"]]],null,{"statements":[[0,"      "],[6,"li"],[10,"class",[26,[[25,"if",[[19,1,["isActive"]],"is-active"],null]]]],[7],[0,"\\n        "],[6,"a"],[3,"action",[[19,0,[]],[20,["states","setState"]],[19,1,["stateName"]]]],[7],[0,"\\n          "],[1,[19,1,["stateName"]],false],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-tabs-menu.hbs"}})}),define("dummy/templates/snippets/example-tabs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"j+AtQgMy",block:'{"symbols":["tabs"],"statements":[[4,"tabs-component",null,null,{"statements":[[0,"  "],[1,[19,1,["menu"]],false],[0,"\\n"],[4,"component",[[19,1,["tab"]],"Picture"],null,{"statements":[[0,"    "],[6,"h5"],[9,"class","title"],[7],[0,"Content for Pictures Here"],[8],[0,"\\n"]],"parameters":[]},null],[4,"component",[[19,1,["tab"]],"Music"],null,{"statements":[[0,"    "],[6,"h5"],[9,"class","title"],[7],[0,"Content for Music Here"],[8],[0,"\\n"]],"parameters":[]},null],[4,"component",[[19,1,["tab"]],"Videos"],null,{"statements":[[0,"    "],[6,"h5"],[9,"class","title"],[7],[0,"Content for Videos Here"],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-tabs.hbs"}})}),define("dummy/templates/snippets/usage-advanced",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"nQ8lGyFy",block:'{"symbols":["states","state","state","state"],"statements":[[4,"contextual-states",null,null,{"statements":[[4,"component",[[19,1,["state"]],"Hello"],null,{"statements":[[4,"component",[[19,4,["content"]]],null,{"statements":[[0,"      This block will get rendered because the first state is by default the active one.\\n      "],[6,"button"],[3,"action",[[19,0,[]],[19,4,["setState"]],"World"]],[7],[0,"Next"],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[4]},null],[4,"component",[[19,1,["state"]],"World"],null,{"statements":[[4,"if",[[19,3,["isActive"]]],null,{"statements":[[0,"      This gives you an additional control on what to display if the state is active.\\n"]],"parameters":[]},null]],"parameters":[3]},null],[4,"component",[[19,1,["state"]],"Foobar"],null,{"statements":[[4,"if",[[19,2,["isLoading"]]],null,{"statements":[[0,"      If your states need to perform an async request, the current state will become \'loading\' while the async request\\n      is being performed.\\n"]],"parameters":[]},null],[0,"    "],[6,"button"],[3,"action",[[19,0,[]],[19,2,["setState"]],"Hello"]],[7],[0,"\\n      You can switch states by calling the yielded function\\n    "],[8],[0,"\\n"]],"parameters":[2]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/usage-advanced.hbs"}})}),define("dummy/templates/snippets/usage-basic",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"QoMmxtB7",block:'{"symbols":["states","state","state"],"statements":[[4,"contextual-states",null,null,{"statements":[[4,"component",[[19,1,["state"]],"Hello"],null,{"statements":[[4,"component",[[19,3,["content"]]],null,{"statements":[[0,"      This block will get rendered because the first state is by default the active one.\\n      "],[6,"button"],[3,"action",[[19,0,[]],[19,3,["setState"]],"World"]],[7],[0,"Next"],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[3]},null],[4,"component",[[19,1,["state"]],"World"],null,{"statements":[[4,"component",[[19,2,["content"]]],null,{"statements":[[0,"      This state will not be rendered unless the state is active.\\n      "],[6,"button"],[3,"action",[[19,0,[]],[19,2,["setState"]],"Hello"]],[7],[0,"Previous"],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[2]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/usage-basic.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
