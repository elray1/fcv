(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{295:function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("49ed2f74",content,!0,{sourceMap:!1})},296:function(t,e,o){"use strict";o(295)},297:function(t,e,o){var n=o(92)(!1);n.push([t.i,"#__layout,#__layout>div,#__nuxt,#app,body,html{width:100%;height:100%;margin:0}#app{display:grid;grid-template-columns:30% 70%}#options{height:100%;background:#fff;padding:5px;border-right:2px solid rgba(0,0,0,.2)}",""]),t.exports=n},298:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{selected_target_variable:"case",selected_location:"US",plot_layout:{autosize:!0},plot_style:{width:"100%",height:"100%"}}},computed:{target_variables:function(){return this.$store.getters.target_variables},locations:function(){return this.$store.getters.locations},plot_data:function(){return this.$store.getters.plot_data}},methods:{keydown_handler:function(t){console.log(t.keyCode),37==t.keyCode?this.$store.commit("decrement_as_of"):39==t.keyCode&&this.$store.commit("increment_as_of")},handle_select_target_variable:function(t){this.$store.commit("set_target_var",t)},handle_select_location:function(t){this.$store.commit("set_location",t)}},mounted:function(){window.addEventListener("keydown",this.keydown_handler)},beforeDestroy:function(){window.removeEventListener("keydown",this.keydown_handler)}},l=(o(296),o(69)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"options"}},[o("form",[o("label",{attrs:{for:"target_variable"}},[t._v("Target Variable:")]),t._v(" "),o("b-form-select",{attrs:{name:"target_variable",options:t.target_variables},on:{change:t.handle_select_target_variable},model:{value:t.selected_target_variable,callback:function(e){t.selected_target_variable=e},expression:"selected_target_variable"}}),t._v(" "),o("label",{attrs:{for:"location"}},[t._v("Location:")]),t._v(" "),o("b-form-select",{attrs:{name:"location",options:t.locations},on:{change:t.handle_select_location},model:{value:t.selected_location,callback:function(e){t.selected_location=e},expression:"selected_location"}})],1)]),t._v(" "),o("div",{attrs:{id:"viz"}},[o("client-only",[o("vue-plotly",{style:t.plot_style,attrs:{data:t.plot_data,layout:t.plot_layout}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,o){"use strict";o.r(e);var n={},l=o(69),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("App")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{App:o(298).default})}}]);