<<<<<<< HEAD
(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[0],{191:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n={};r.r(n),r.d(n,"find",(function(){return i}));var a={};r.r(a),r.d(a,"isTabbableIndex",(function(){return u})),r.d(a,"find",(function(){return b})),r.d(a,"findPrevious",(function(){return y})),r.d(a,"findNext",(function(){return g}));var o=["[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",");function c(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function i(e){var t=e.querySelectorAll(o);return Array.from(t).filter((function(e){return!!c(e)&&("AREA"!==e.nodeName||function(e){var t=e.closest("map[name]");if(!t)return!1;var r=document.querySelector('img[usemap="#'+t.name+'"]');return!!r&&c(r)}(e))}))}var s=r(3);function l(e){var t=e.getAttribute("tabindex");return null===t?0:parseInt(t,10)}function u(e){return-1!==l(e)}function d(e,t){return{element:e,index:t}}function f(e){return e.element}function p(e,t){var r=l(e.element),n=l(t.element);return r===n?e.index-t.index:r-n}function m(e){return e.filter(u).map(d).sort(p).map(f).reduce((t={},function(e,r){var n=r.nodeName,a=r.type,o=r.checked,c=r.name;if("INPUT"!==n||"radio"!==a||!c)return e.concat(r);var i=t.hasOwnProperty(c);if(!o&&i)return e;if(i){var l=t[c];e=Object(s.without)(e,l)}return t[c]=r,e.concat(r)}),[]);var t}function b(e){return m(i(e))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement,t=i(document.body),r=t.indexOf(e);return t.length=r,Object(s.last)(m(t))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement,t=i(document.body),r=t.indexOf(e),n=t.slice(r+1).filter((function(t){return!e.contains(t)}));return Object(s.first)(m(n))}var O={focusable:n,tabbable:a}},500:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var n=r(0),a=r(42),o=r(110),c=r.n(o),i=r(25),s=c()(i.b),l=function(e){var t=s.getCurrencyConfig(),r=Object(a.applyFilters)("woocommerce_admin_report_currency",t,e);return c()(r)},u=Object(n.createContext)(s)},501:function(e,t,r){"use strict";var n=r(11),a=r.n(n),o=r(12),c=r.n(o),i=r(13),s=r.n(i),l=r(14),u=r.n(l),d=r(6),f=r.n(d),p=r(0),m=r(2),b=r(1),y=r.n(b),g=r(47),O=r(25);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u()(this,r)}}var v=function(e){s()(r,e);var t=h(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e,t,r,n,a=this.props,o=a.className,c=a.isError,i=a.isEmpty;return c?(e=Object(m.__)("There was an error getting your stats. Please try again.",'woocommerce'),t=Object(m.__)("Reload",'woocommerce'),n=function(){window.location.reload()}):i&&(e=Object(m.__)("No results could be found for this date range.",'woocommerce'),t=Object(m.__)("View Orders",'woocommerce'),r=Object(O.f)("edit.php?post_type=shop_order")),Object(p.createElement)(g.EmptyContent,{className:o,title:e,actionLabel:t,actionURL:r,actionCallback:n})}}]),r}(p.Component);v.propTypes={className:y.a.string,isError:y.a.bool,isEmpty:y.a.bool},v.defaultProps={className:""},t.a=v},507:function(e,t,r){"use strict";var n=r(5),a=r.n(n),o=r(11),c=r.n(o),i=r(12),s=r.n(i),l=r(8),u=r.n(l),d=r(13),f=r.n(d),p=r(14),m=r.n(p),b=r(6),y=r.n(b),g=r(0),O=r(18),h=r(1),v=r.n(h),j=r(3),_=r(15),w=r(47),S=r(25),E=r(22),C=r(29),D=r(28),R=r(500),P=r(74);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y()(e);if(t){var a=y()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return m()(this,r)}}var q=function(e){f()(r,e);var t=x(r);function r(){var e;return c()(this,r),(e=t.call(this)).onDateSelect=e.onDateSelect.bind(u()(e)),e.onFilterSelect=e.onFilterSelect.bind(u()(e)),e.onAdvancedFilterAction=e.onAdvancedFilterAction.bind(u()(e)),e}return s()(r,[{key:"onDateSelect",value:function(e){var t=this.props,r=t.report;(0,t.addCesSurveyForAnalytics)(),Object(D.recordEvent)("datepicker_update",k({report:r},Object(j.omitBy)(e,j.isUndefined)))}},{key:"onFilterSelect",value:function(e){var t=this.props,r=t.report,n=t.addCesSurveyForAnalytics,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&n(),Object(D.recordEvent)("analytics_filter",{report:r,filter:e.filter||"all"})}},{key:"onAdvancedFilterAction",value:function(e,t){var r=this.props,n=r.report,a=r.addCesSurveyForAnalytics;switch(e){case"add":Object(D.recordEvent)("analytics_filters_add",{report:n,filter:t.key});break;case"remove":Object(D.recordEvent)("analytics_filters_remove",{report:n,filter:t.key});break;case"filter":var o=Object.keys(t).reduce((function(e,r){return e[Object(j.snakeCase)(r)]=t[r],e}),{});a(),Object(D.recordEvent)("analytics_filters_filter",k({report:n},o));break;case"clear_all":Object(D.recordEvent)("analytics_filters_clear_all",{report:n});break;case"match":Object(D.recordEvent)("analytics_filters_all_any",{report:n,value:t.match})}}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,n=e.path,a=e.query,o=e.showDatePicker,c=e.defaultDateRange,i=Object(C.getDateParamsFromQuery)(a,c),s=i.period,l=i.compare,u=i.before,d=i.after,f=Object(C.getCurrentDates)(a,c),p={period:s,compare:l,before:u,after:d,primaryDate:f.primary,secondaryDate:f.secondary},m=this.context;return Object(g.createElement)(w.ReportFilters,{query:a,siteLocale:S.c.siteLocale,currency:m.getCurrencyConfig(),path:n,filters:r,advancedFilters:t,showDatePicker:o,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:p,isoDateFormat:C.isoDateFormat})}}]),r}(g.Component);q.contextType=R.a,t.a=Object(O.compose)(Object(_.withSelect)((function(e){return{defaultDateRange:e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})),Object(_.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(P.c).addCesSurveyForAnalytics}})))(q),q.propTypes={advancedFilters:v.a.object,filters:v.a.array,path:v.a.string.isRequired,query:v.a.object,showDatePicker:v.a.bool,report:v.a.string.isRequired}},508:function(e,t,r){"use strict";var n=r(24),a=r.n(n),o=r(19),c=r.n(o),i=r(5),s=r.n(i),l=r(21),u=r.n(l),d=r(34),f=r.n(d),p=r(0),m=r(4),b=r(42),y=r(18),g=r(191),O=r(15),h=r(3),v=r(2),j=r(1),_=r.n(j),w=r(47),S=r(20),E=r(484),C=r(22),D=r(28),R=function(){return Object(p.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(p.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"}))},P=r(501);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(568);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.getHeadersContent,r=e.getRowsContent,n=e.getSummary,o=e.isRequesting,i=e.primaryData,l=e.tableData,d=e.endpoint,y=(e.itemIdField,e.tableQuery,e.compareBy),O=e.compareParam,j=e.searchBy,_=e.labels,F=void 0===_?{}:_,k=f()(e,["getHeadersContent","getRowsContent","getSummary","isRequesting","primaryData","tableData","endpoint","itemIdField","tableQuery","compareBy","compareParam","searchBy","labels"]),x=e.query,A=e.columnPrefsKey,N=l.items,T=l.query,Q=x[O]?Object(S.getIdsFromQuery)(x[y]):[],I=Object(p.useState)(Q),B=u()(I,2),U=B[0],L=B[1],M=Object(p.useRef)(null),V=Object(C.useUserPreferences)(),H=V.updateUserPreferences,z=f()(V,["updateUserPreferences"]);if(l.isError||i.isError)return Object(p.createElement)(P.a,{isError:!0});var G=[];A&&(G=z&&z[A]?z[A]:G);var J,K,W,Y,X=function(e,a,o){var c=n?n(a,o):null;return Object(b.applyFilters)("woocommerce_admin_report_table",{endpoint:d,headers:t(),rows:r(e),totals:a,summary:c,items:N})},Z=function(t){var r=e.ids;L(t?r:[])},$=function(t,r){var n=e.ids;if(r)L(Object(h.uniq)([n[t]].concat(c()(U))));else{var a=U.indexOf(n[t]);L([].concat(c()(U.slice(0,a)),c()(U.slice(a+1))))}},ee=function(t){var r=e.ids,n=void 0===r?[]:r,a=-1!==U.indexOf(n[t]);return{display:Object(p.createElement)(m.CheckboxControl,{onChange:Object(h.partial)($,t),checked:a}),value:!1}},te=o||l.isRequesting||i.isRequesting,re=Object(h.get)(i,["data","totals"],{}),ne=N.totalResults,ae=ne>0,oe=Object(S.getSearchWords)(x).map((function(e){return{key:e,label:e}})),ce=N.data,ie=X(ce,re,ne),se=ie.headers,le=ie.rows,ue=ie.summary;y&&(le=le.map((function(e,t){return[ee(t)].concat(c()(e))})),se=[(J=e.ids,K=void 0===J?[]:J,W=K.length>0,Y=W&&K.length===U.length,{cellClassName:"is-checkbox-column",key:"compare",label:Object(p.createElement)(m.CheckboxControl,{onChange:Z,"aria-label":Object(v.__)("Select All"),checked:Y,disabled:!W}),required:!0})].concat(c()(se)));var de=function(e,t){return t?e.map((function(e){return q(q({},e),{},{visible:e.required||!t.includes(e.key)})})):e.map((function(e){return q(q({},e),{},{visible:e.required||!e.hiddenByDefault})}))}(se,G);return Object(p.createElement)(p.Fragment,null,Object(p.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:M,"aria-hidden":!0}),Object(p.createElement)(w.TableCard,a()({className:"woocommerce-report-table",hasSearch:!!j,actions:[y&&Object(p.createElement)(w.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:U.length,helpText:F.helpText||Object(v.__)("Check at least two items below to compare",'woocommerce'),onClick:function(){y&&Object(S.onQueryChange)("compare")(y,O,U.join(","))},disabled:!ae},F.compareButton||Object(v.__)("Compare",'woocommerce')),j&&Object(p.createElement)(w.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:function(t){var r,n=e.baseSearchQuery,a=t.map((function(e){return e.label.replace(",","%2C")}));a.length?Object(S.updateQueryString)(q(q((r={filter:void 0},s()(r,O,void 0),s()(r,j,void 0),r),n),{},{search:Object(h.uniq)(a).join(",")})):Object(S.updateQueryString)({search:void 0});Object(D.recordEvent)("analytics_table_filter",{report:d})},placeholder:F.placeholder||Object(v.__)("Search by item name",'woocommerce'),selected:oe,showClearButton:!0,type:j,disabled:!ae}),ae&&Object(p.createElement)(m.Button,{key:"download",className:"woocommerce-table__download-button",disabled:te,onClick:function(){var t=e.createNotice,r=e.startExport,n=e.title,a=Object.assign({},x),o=N.data,c=N.totalResults,i="browser";if(delete a.extended_info,a.search&&delete a[j],o&&o.length===c){var s=X(o,c),l=s.headers,u=s.rows;Object(E.downloadCSVFile)(Object(E.generateCSVFileName)(n,a),Object(E.generateCSVDataFromTable)(l,u))}else i="email",r(d,T).then((function(){return t("success",Object(v.sprintf)(Object(v.__)("Your %s Report will be emailed to you.",'woocommerce'),n))})).catch((function(e){return t("error",e.message||Object(v.sprintf)(Object(v.__)("There was a problem exporting your %s Report. Please try again.",'woocommerce'),n))}));Object(D.recordEvent)("analytics_table_download",{report:d,rows:c,downloadType:i})}},Object(p.createElement)(R,null),Object(p.createElement)("span",{className:"woocommerce-table__download-button__label"},F.downloadButton||Object(v.__)("Download",'woocommerce')))],headers:de,isLoading:te,onQueryChange:S.onQueryChange,onColumnsChange:function(e,t){var r=se.map((function(e){return e.key})).filter((function(t){return!e.includes(t)}));if(A){var n=s()({},A,r);H(n)}if(t){var a={report:d,column:t,status:e.includes(t)?"on":"off"};Object(D.recordEvent)("analytics_table_header_toggle",a)}},onSort:function(e,t){Object(S.onQueryChange)("sort")(e,t);var r={report:d,column:e,direction:t};Object(D.recordEvent)("analytics_table_sort",r)},onPageChange:function(e,t){M.current.scrollIntoView();var r=M.current.nextSibling.querySelector(".woocommerce-table__table"),n=g.a.focusable.find(r);n.length&&n[0].focus(),t&&("goto"===t?Object(D.recordEvent)("analytics_table_go_to_page",{report:d,page:e}):Object(D.recordEvent)("analytics_table_page_click",{report:d,direction:t}))},rows:le,rowsPerPage:parseInt(T.per_page,10)||C.QUERY_DEFAULTS.pageSize,summary:ue,totalRows:ne},k)))};A.propTypes={baseSearchQuery:_.a.object,compareBy:_.a.string,compareParam:_.a.string,columnPrefsKey:_.a.string,endpoint:_.a.string,extendItemsMethodNames:_.a.shape({getError:_.a.string,isRequesting:_.a.string,load:_.a.string}),extendedItemsStoreName:_.a.string,getHeadersContent:_.a.func.isRequired,getRowsContent:_.a.func.isRequired,getSummary:_.a.func,itemIdField:_.a.string,labels:_.a.shape({compareButton:_.a.string,downloadButton:_.a.string,helpText:_.a.string,placeholder:_.a.string}),primaryData:_.a.object,searchBy:_.a.string,summaryFields:_.a.arrayOf(_.a.string),tableData:_.a.object.isRequired,tableQuery:_.a.object,title:_.a.string.isRequired},A.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:h.noop,baseSearchQuery:{}};var N=[],T={};t.a=Object(y.compose)(Object(O.withSelect)((function(e,t){var r=t.endpoint,n=t.getSummary,a=t.isRequesting,o=t.itemIdField,c=t.query,i=t.tableData,s=t.tableQuery,l=t.filters,u=t.advancedFilters,d=t.summaryFields;if(a||c.search&&(!c[r]||!c[r].length))return T;var f=e(C.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p="categories"===r?"products":r,m=n?Object(C.getReportChartData)({endpoint:p,dataType:"primary",query:c,select:e,filters:l,advancedFilters:u,defaultDateRange:f,fields:d}):T,b=function(e,t,r){var n=t.extendItemsMethodNames,a=t.extendedItemsStoreName,o=t.itemIdField,c=r.items.data;if(!(Array.isArray(c)&&c.length&&n&&o))return r;var i=e(a),s=i[n.getError],l=i[n.isRequesting],u=i[n.load],d={include:c.map((function(e){return e[o]})).join(","),per_page:c.length},f=u(d),p=!!l&&l(d),m=!!s&&s(d),b=c.map((function(e){var t=Object(h.first)(f.filter((function(t){return e.id===t.id})));return k(k({},e),t)})),y=r.isRequesting||p,g=r.isError||m;return k(k({},r),{},{isRequesting:y,isError:g,items:k(k({},r.items),{},{data:b})})}(e,t,i||Object(C.getReportTableData)({endpoint:r,query:c,select:e,tableQuery:s,filters:l,advancedFilters:u,defaultDateRange:f}));return{primaryData:m,ids:o&&b.items.data?b.items.data.map((function(e){return e[o]})):N,tableData:b,query:c}})),Object(O.withDispatch)((function(e){var t=e(C.EXPORT_STORE_NAME).startExport;return{createNotice:e("core/notices").createNotice,startExport:t}})))(A)},568:function(e,t,r){}}]);
=======
(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[0],{493:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r(0),n=r(42),o=r(110),c=r.n(o),i=r(25),s=c()(i.b),l=function(e){var t=s.getCurrencyConfig(),r=Object(n.applyFilters)("woocommerce_admin_report_currency",t,e);return c()(r)},u=Object(a.createContext)(s)},494:function(e,t,r){"use strict";var a=r(11),n=r.n(a),o=r(12),c=r.n(o),i=r(13),s=r.n(i),l=r(14),u=r.n(l),d=r(6),p=r.n(d),m=r(0),b=r(2),f=r(1),y=r.n(f),g=r(47),O=r(25);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=p()(e);if(t){var n=p()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}var j=function(e){s()(r,e);var t=h(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e,t,r,a,n=this.props,o=n.className,c=n.isError,i=n.isEmpty;return c?(e=Object(b.__)("There was an error getting your stats. Please try again.",'woocommerce'),t=Object(b.__)("Reload",'woocommerce'),a=function(){window.location.reload()}):i&&(e=Object(b.__)("No results could be found for this date range.",'woocommerce'),t=Object(b.__)("View Orders",'woocommerce'),r=Object(O.f)("edit.php?post_type=shop_order")),Object(m.createElement)(g.EmptyContent,{className:o,title:e,actionLabel:t,actionURL:r,actionCallback:a})}}]),r}(m.Component);j.propTypes={className:y.a.string,isError:y.a.bool,isEmpty:y.a.bool},j.defaultProps={className:""},t.a=j},500:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(11),c=r.n(o),i=r(12),s=r.n(i),l=r(9),u=r.n(l),d=r(13),p=r.n(d),m=r(14),b=r.n(m),f=r(6),y=r.n(f),g=r(0),O=r(18),h=r(1),j=r.n(h),v=r(3),_=r(15),w=r(47),S=r(25),E=r(23),C=r(29),D=r(28),R=r(493),P=r(73);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=y()(e);if(t){var n=y()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return b()(this,r)}}var x=function(e){p()(r,e);var t=q(r);function r(){var e;return c()(this,r),(e=t.call(this)).onDateSelect=e.onDateSelect.bind(u()(e)),e.onFilterSelect=e.onFilterSelect.bind(u()(e)),e.onAdvancedFilterAction=e.onAdvancedFilterAction.bind(u()(e)),e}return s()(r,[{key:"onDateSelect",value:function(e){var t=this.props,r=t.report;(0,t.addCesSurveyForAnalytics)(),Object(D.recordEvent)("datepicker_update",k({report:r},Object(v.omitBy)(e,v.isUndefined)))}},{key:"onFilterSelect",value:function(e){var t=this.props,r=t.report,a=t.addCesSurveyForAnalytics,n=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(n)&&a(),Object(D.recordEvent)("analytics_filter",{report:r,filter:e.filter||"all"})}},{key:"onAdvancedFilterAction",value:function(e,t){var r=this.props,a=r.report,n=r.addCesSurveyForAnalytics;switch(e){case"add":Object(D.recordEvent)("analytics_filters_add",{report:a,filter:t.key});break;case"remove":Object(D.recordEvent)("analytics_filters_remove",{report:a,filter:t.key});break;case"filter":var o=Object.keys(t).reduce((function(e,r){return e[Object(v.snakeCase)(r)]=t[r],e}),{});n(),Object(D.recordEvent)("analytics_filters_filter",k({report:a},o));break;case"clear_all":Object(D.recordEvent)("analytics_filters_clear_all",{report:a});break;case"match":Object(D.recordEvent)("analytics_filters_all_any",{report:a,value:t.match})}}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,a=e.path,n=e.query,o=e.showDatePicker,c=e.defaultDateRange,i=Object(C.getDateParamsFromQuery)(n,c),s=i.period,l=i.compare,u=i.before,d=i.after,p=Object(C.getCurrentDates)(n,c),m={period:s,compare:l,before:u,after:d,primaryDate:p.primary,secondaryDate:p.secondary},b=this.context;return Object(g.createElement)(w.ReportFilters,{query:n,siteLocale:S.c.siteLocale,currency:b.getCurrencyConfig(),path:a,filters:r,advancedFilters:t,showDatePicker:o,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:m,isoDateFormat:C.isoDateFormat})}}]),r}(g.Component);x.contextType=R.a,t.a=Object(O.compose)(Object(_.withSelect)((function(e){return{defaultDateRange:e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})),Object(_.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(P.c).addCesSurveyForAnalytics}})))(x),x.propTypes={advancedFilters:j.a.object,filters:j.a.array,path:j.a.string.isRequired,query:j.a.object,showDatePicker:j.a.bool,report:j.a.string.isRequired}},501:function(e,t,r){"use strict";var a=r(24),n=r.n(a),o=r(20),c=r.n(o),i=r(5),s=r.n(i),l=r(19),u=r.n(l),d=r(34),p=r.n(d),m=r(0),b=r(4),f=r(42),y=r(18),g=r(120),O=r(15),h=r(3),j=r(2),v=r(1),_=r.n(v),w=r(47),S=r(21),E=r(477),C=r(23),D=r(28),R=function(){return Object(m.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(m.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"}))},P=r(494);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(561);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.getHeadersContent,r=e.getRowsContent,a=e.getSummary,o=e.isRequesting,i=e.primaryData,l=e.tableData,d=e.endpoint,y=(e.itemIdField,e.tableQuery,e.compareBy),O=e.compareParam,v=e.searchBy,_=e.labels,F=void 0===_?{}:_,k=p()(e,["getHeadersContent","getRowsContent","getSummary","isRequesting","primaryData","tableData","endpoint","itemIdField","tableQuery","compareBy","compareParam","searchBy","labels"]),q=e.query,A=e.columnPrefsKey,T=l.items,N=l.query,Q=q[O]?Object(S.getIdsFromQuery)(q[y]):[],B=Object(m.useState)(Q),I=u()(B,2),L=I[0],M=I[1],U=Object(m.useRef)(null),V=Object(C.useUserPreferences)(),z=V.updateUserPreferences,H=p()(V,["updateUserPreferences"]);if(l.isError||i.isError)return Object(m.createElement)(P.a,{isError:!0});var G=[];A&&(G=H&&H[A]?H[A]:G);var J,K,Y,W,X=function(e,n,o){var c=a?a(n,o):null;return Object(f.applyFilters)("woocommerce_admin_report_table",{endpoint:d,headers:t(),rows:r(e),totals:n,summary:c,items:T})},Z=function(t){var r=e.ids;M(t?r:[])},$=function(t,r){var a=e.ids;if(r)M(Object(h.uniq)([a[t]].concat(c()(L))));else{var n=L.indexOf(a[t]);M([].concat(c()(L.slice(0,n)),c()(L.slice(n+1))))}},ee=function(t){var r=e.ids,a=void 0===r?[]:r,n=-1!==L.indexOf(a[t]);return{display:Object(m.createElement)(b.CheckboxControl,{onChange:Object(h.partial)($,t),checked:n}),value:!1}},te=o||l.isRequesting||i.isRequesting,re=Object(h.get)(i,["data","totals"],{}),ae=T.totalResults,ne=ae>0,oe=Object(S.getSearchWords)(q).map((function(e){return{key:e,label:e}})),ce=T.data,ie=X(ce,re,ae),se=ie.headers,le=ie.rows,ue=ie.summary;y&&(le=le.map((function(e,t){return[ee(t)].concat(c()(e))})),se=[(J=e.ids,K=void 0===J?[]:J,Y=K.length>0,W=Y&&K.length===L.length,{cellClassName:"is-checkbox-column",key:"compare",label:Object(m.createElement)(b.CheckboxControl,{onChange:Z,"aria-label":Object(j.__)("Select All"),checked:W,disabled:!Y}),required:!0})].concat(c()(se)));var de=function(e,t){return t?e.map((function(e){return x(x({},e),{},{visible:e.required||!t.includes(e.key)})})):e.map((function(e){return x(x({},e),{},{visible:e.required||!e.hiddenByDefault})}))}(se,G);return Object(m.createElement)(m.Fragment,null,Object(m.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:U,"aria-hidden":!0}),Object(m.createElement)(w.TableCard,n()({className:"woocommerce-report-table",hasSearch:!!v,actions:[y&&Object(m.createElement)(w.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:L.length,helpText:F.helpText||Object(j.__)("Check at least two items below to compare",'woocommerce'),onClick:function(){y&&Object(S.onQueryChange)("compare")(y,O,L.join(","))},disabled:!ne},F.compareButton||Object(j.__)("Compare",'woocommerce')),v&&Object(m.createElement)(w.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:function(t){var r,a=e.baseSearchQuery,n=t.map((function(e){return e.label.replace(",","%2C")}));n.length?Object(S.updateQueryString)(x(x((r={filter:void 0},s()(r,O,void 0),s()(r,v,void 0),r),a),{},{search:Object(h.uniq)(n).join(",")})):Object(S.updateQueryString)({search:void 0});Object(D.recordEvent)("analytics_table_filter",{report:d})},placeholder:F.placeholder||Object(j.__)("Search by item name",'woocommerce'),selected:oe,showClearButton:!0,type:v,disabled:!ne}),ne&&Object(m.createElement)(b.Button,{key:"download",className:"woocommerce-table__download-button",disabled:te,onClick:function(){var t=e.createNotice,r=e.startExport,a=e.title,n=Object.assign({},q),o=T.data,c=T.totalResults,i="browser";if(delete n.extended_info,n.search&&delete n[v],o&&o.length===c){var s=X(o,c),l=s.headers,u=s.rows;Object(E.downloadCSVFile)(Object(E.generateCSVFileName)(a,n),Object(E.generateCSVDataFromTable)(l,u))}else i="email",r(d,N).then((function(){return t("success",Object(j.sprintf)(Object(j.__)("Your %s Report will be emailed to you.",'woocommerce'),a))})).catch((function(e){return t("error",e.message||Object(j.sprintf)(Object(j.__)("There was a problem exporting your %s Report. Please try again.",'woocommerce'),a))}));Object(D.recordEvent)("analytics_table_download",{report:d,rows:c,downloadType:i})}},Object(m.createElement)(R,null),Object(m.createElement)("span",{className:"woocommerce-table__download-button__label"},F.downloadButton||Object(j.__)("Download",'woocommerce')))],headers:de,isLoading:te,onQueryChange:S.onQueryChange,onColumnsChange:function(e,t){var r=se.map((function(e){return e.key})).filter((function(t){return!e.includes(t)}));if(A){var a=s()({},A,r);z(a)}if(t){var n={report:d,column:t,status:e.includes(t)?"on":"off"};Object(D.recordEvent)("analytics_table_header_toggle",n)}},onSort:function(e,t){Object(S.onQueryChange)("sort")(e,t);var r={report:d,column:e,direction:t};Object(D.recordEvent)("analytics_table_sort",r)},onPageChange:function(e,t){U.current.scrollIntoView();var r=U.current.nextSibling.querySelector(".woocommerce-table__table"),a=g.a.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(D.recordEvent)("analytics_table_go_to_page",{report:d,page:e}):Object(D.recordEvent)("analytics_table_page_click",{report:d,direction:t}))},rows:le,rowsPerPage:parseInt(N.per_page,10)||C.QUERY_DEFAULTS.pageSize,summary:ue,totalRows:ae},k)))};A.propTypes={baseSearchQuery:_.a.object,compareBy:_.a.string,compareParam:_.a.string,columnPrefsKey:_.a.string,endpoint:_.a.string,extendItemsMethodNames:_.a.shape({getError:_.a.string,isRequesting:_.a.string,load:_.a.string}),extendedItemsStoreName:_.a.string,getHeadersContent:_.a.func.isRequired,getRowsContent:_.a.func.isRequired,getSummary:_.a.func,itemIdField:_.a.string,labels:_.a.shape({compareButton:_.a.string,downloadButton:_.a.string,helpText:_.a.string,placeholder:_.a.string}),primaryData:_.a.object,searchBy:_.a.string,summaryFields:_.a.arrayOf(_.a.string),tableData:_.a.object.isRequired,tableQuery:_.a.object,title:_.a.string.isRequired},A.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:h.noop,baseSearchQuery:{}};var T=[],N={};t.a=Object(y.compose)(Object(O.withSelect)((function(e,t){var r=t.endpoint,a=t.getSummary,n=t.isRequesting,o=t.itemIdField,c=t.query,i=t.tableData,s=t.tableQuery,l=t.filters,u=t.advancedFilters,d=t.summaryFields;if(n||c.search&&(!c[r]||!c[r].length))return N;var p=e(C.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,m="categories"===r?"products":r,b=a?Object(C.getReportChartData)({endpoint:m,dataType:"primary",query:c,select:e,filters:l,advancedFilters:u,defaultDateRange:p,fields:d}):N,f=function(e,t,r){var a=t.extendItemsMethodNames,n=t.extendedItemsStoreName,o=t.itemIdField,c=r.items.data;if(!(Array.isArray(c)&&c.length&&a&&o))return r;var i=e(n),s=i[a.getError],l=i[a.isRequesting],u=i[a.load],d={include:c.map((function(e){return e[o]})).join(","),per_page:c.length},p=u(d),m=!!l&&l(d),b=!!s&&s(d),f=c.map((function(e){var t=Object(h.first)(p.filter((function(t){return e.id===t.id})));return k(k({},e),t)})),y=r.isRequesting||m,g=r.isError||b;return k(k({},r),{},{isRequesting:y,isError:g,items:k(k({},r.items),{},{data:f})})}(e,t,i||Object(C.getReportTableData)({endpoint:r,query:c,select:e,tableQuery:s,filters:l,advancedFilters:u,defaultDateRange:p}));return{primaryData:b,ids:o&&f.items.data?f.items.data.map((function(e){return e[o]})):T,tableData:f,query:c}})),Object(O.withDispatch)((function(e){var t=e(C.EXPORT_STORE_NAME).startExport;return{createNotice:e("core/notices").createNotice,startExport:t}})))(A)},561:function(e,t,r){}}]);
>>>>>>> staging
