(window.webpackJsonp=window.webpackJsonp||[]).push([[50],[,,,,,function(a,n,t){"use strict";t.r(n);var s=t(6),r={mixins:[t(9).InteractsWithDates],props:{resource:{type:Object,required:!0},resourceName:{type:String,required:!0},resourceId:{type:[Number,String],required:!0},field:{type:Object,required:!0}},data:function(){return{defaultMomentJSFormat:"YYYY-MM-DD HH:mm:ss"}},computed:{userTimezone:function(){return Nova.config.userTimezone||moment.tz.guess()},dateFormat:function(){return this.field.dateFormat||s.a.momentjs[this.locale].L},timeFormat:function(){return this.field.timeFormat&&this.field.timeFormat.match(/^[Hh]{1,2}:[m]{1,2}(:[s]{1,2})?$/)?this.field.timeFormat:""},locale:function(){return this.field.locale||"en-gb"},momentjsFormat:function(){return"".concat(this.dateFormat," ").concat(this.timeFormat).replace(/[^ -~]+/g,"").trim()},localizedDateTime:function(){return moment(this.field.value,this.defaultMomentJSFormat).tz(Nova.config.timezone).clone().tz(this.userTimezone).format(this.momentjsFormat)}}},i=t(10),e=Object(i.a)(r,(function(){var a=this.$createElement,n=this._self._c||a;return n("panel-item",{attrs:{field:this.field}},[n("template",{slot:"value"},[this.field.value?n("p",{staticClass:"text-90"},[this._v("\n            "+this._s(this.localizedDateTime)+"\n        ")]):n("p",[this._v("\n            —\n        ")])])],2)}),[],!1,null,null,null);n.default=e.exports},function(a,n,t){"use strict";t.d(n,"a",(function(){return m}));var s=t(7),r=t(11),i={},e={};for(var o in s.a)i[o]=t(8)("./".concat(o,".js"))[s.a[o].name];for(var l in s.b)e[l]=r.a[l];var m={flatpickr:i,momentjs:e}},function(a,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return r}));var s={default:{translation:"en-gb",name:"english"},ar:{translation:"ar",name:"Arabic"},at:{translation:"de-at",name:"Austria"},az:{translation:"az",name:"Azerbaijan"},be:{translation:"be",name:"Belarusian"},bg:{translation:"bg",name:"Bulgarian"},bn:{translation:"bn",name:"Bangla"},bs:{translation:"bs",name:"Bosnian"},cat:{translation:"ca",name:"Catalan"},cs:{translation:"cs",name:"Czech"},cy:{translation:"cy",name:"Welsh"},da:{translation:"da",name:"Danish"},de:{translation:"de",name:"German"},eo:{translation:"eo",name:"Esperanto"},es:{translation:"es",name:"Spanish"},et:{translation:"et",name:"Estonian"},fa:{translation:"fa",name:"Persian"},fi:{translation:"fi",name:"Finnish"},fo:{translation:"fo",name:"Faroese"},fr:{translation:"fr",name:"French"},ga:{translation:"ga",name:"Irish"},gr:{translation:"el",name:"Greek"},he:{translation:"he",name:"Hebrew"},hi:{translation:"hi",name:"Hindi"},hr:{translation:"hr",name:"Croatian"},hu:{translation:"hu",name:"Hungarian"},id:{translation:"id",name:"Indonesian"},is:{translation:"is",name:"Icelandic"},it:{translation:"it",name:"Italian"},ja:{translation:"ja",name:"Japanese"},ka:{translation:"ka",name:"Georgian"},km:{translation:"km",name:"Khmer"},ko:{translation:"ko",name:"Korean"},kz:{translation:"kk",name:"Kazakh"},lt:{translation:"lt",name:"Lithuanian"},lv:{translation:"lv",name:"Latvian"},mk:{translation:"mk",name:"Macedonian"},mn:{translation:"mn",name:"Mongolian"},ms:{translation:"ms",name:"Malaysian"},my:{translation:"my",name:"Burmese"},nl:{translation:"nl",name:"Dutch"},no:{translation:"nb",name:"Norwegian"},pa:{translation:"pa-in",name:"Punjabi"},pl:{translation:"pl",name:"Polish"},pt:{translation:"pt",name:"Portuguese"},ro:{translation:"ro",name:"Romanian"},ru:{translation:"ru",name:"Russian"},si:{translation:"si",name:"Sinhala"},sk:{translation:"sk",name:"Slovak"},sl:{translation:"sl",name:"Slovenian"},sq:{translation:"sq",name:"Albanian"},sr:{translation:"sr",name:"Serbian"},"sr-cyr":{translation:"sr-cyrl",name:"SerbianCyrillic"},sv:{translation:"sv",name:"Swedish"},th:{translation:"th",name:"Thai"},tr:{translation:"tr",name:"Turkish"},uk:{translation:"uk",name:"Ukrainian"},vn:{translation:"vi",name:"Vietnamese"},zh:{translation:"zh-cn",name:"Mandarin"},"zh-tw":{translation:"zh-tw",name:"MandarinTraditional"}},r={ar:{translation:"ar"},az:{translation:"az"},be:{translation:"be"},bg:{translation:"bg"},bn:{translation:"bn"},bs:{translation:"bs"},ca:{translation:"cat"},cs:{translation:"cs"},cy:{translation:"cy"},da:{translation:"da"},de:{translation:"de"},"de-at":{translation:"at"},"de-ch":{translation:"de"},el:{translation:"gr"},en:{translation:"default"},"en-au":{translation:"default"},"en-ca":{translation:"default"},"en-gb":{translation:"default"},"en-ie":{translation:"default"},"en-nz":{translation:"default"},eo:{translation:"eo"},es:{translation:"es"},"es-do":{translation:"es"},"es-us":{translation:"es"},et:{translation:"et"},fa:{translation:"fa"},fi:{translation:"fi"},fo:{translation:"fo"},fr:{translation:"fr"},"fr-ca":{translation:"fr"},"fr-ch":{translation:"fr"},ga:{translation:"ga"},he:{translation:"he"},hi:{translation:"hi"},hr:{translation:"hr"},hu:{translation:"hu"},id:{translation:"id"},is:{translation:"is"},it:{translation:"it"},ja:{translation:"ja"},ka:{translation:"ka"},kk:{translation:"kz"},km:{translation:"km"},ko:{translation:"ko"},lt:{translation:"lt"},lv:{translation:"lv"},mk:{translation:"mk"},mn:{translation:"mn"},ms:{translation:"ms"},my:{translation:"my"},nb:{translation:"no"},nl:{translation:"nl"},"pa-in":{translation:"pa"},pl:{translation:"pl"},pt:{translation:"pt"},"pt-br":{translation:"pt"},ro:{translation:"ro"},ru:{translation:"ru"},si:{translation:"si"},sk:{translation:"sk"},sl:{translation:"sl"},sq:{translation:"sq"},sr:{translation:"sr"},"sr-cyrl":{translation:"sr-cyr"},sv:{translation:"sv"},th:{translation:"th"},tr:{translation:"tr"},uk:{translation:"uk"},vi:{translation:"vn"},"zh-cn":{translation:"zh"},"zh-hk":{translation:"zh"},"zh-tw":{translation:"zh-tw"}}},function(a,n,t){var s={"./ar.js":12,"./at.js":13,"./az.js":14,"./be.js":15,"./bg.js":16,"./bn.js":17,"./bs.js":18,"./cat.js":19,"./cs.js":20,"./cy.js":21,"./da.js":22,"./de.js":23,"./default.js":24,"./eo.js":25,"./es.js":26,"./et.js":27,"./fa.js":28,"./fi.js":29,"./fo.js":30,"./fr.js":31,"./ga.js":32,"./gr.js":33,"./he.js":34,"./hi.js":35,"./hr.js":36,"./hu.js":37,"./id.js":38,"./index.js":39,"./is.js":40,"./it.js":41,"./ja.js":42,"./ka.js":43,"./km.js":44,"./ko.js":45,"./kz.js":46,"./lt.js":47,"./lv.js":48,"./mk.js":49,"./mn.js":50,"./ms.js":51,"./my.js":52,"./nl.js":53,"./no.js":54,"./pa.js":55,"./pl.js":56,"./pt.js":57,"./ro.js":58,"./ru.js":59,"./si.js":60,"./sk.js":61,"./sl.js":62,"./sq.js":63,"./sr-cyr.js":64,"./sr.js":65,"./sv.js":66,"./th.js":67,"./tr.js":68,"./uk.js":69,"./vn.js":70,"./zh-tw.js":71,"./zh.js":72};function r(a){var n=i(a);return t(n)}function i(a){if(!t.o(s,a)){var n=new Error("Cannot find module '"+a+"'");throw n.code="MODULE_NOT_FOUND",n}return s[a]}r.keys=function(){return Object.keys(s)},r.resolve=i,a.exports=r,r.id=8}]]);