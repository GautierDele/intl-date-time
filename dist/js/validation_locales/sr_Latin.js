(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,n,a){e.exports=function(){"use strict";var e,n={name:"sr_Latin",messages:{_default:function(e){return"Polje "+e+" nije validno"},after:function(e,n){return"Polje "+e+" mora biti posle "+n[0]},alpha:function(e){return"Polje "+e+" može sadržati samo slova"},alpha_dash:function(e){return"Polje "+e+" može sadržati alfanumeričke karaktere i povlake"},alpha_num:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere"},alpha_spaces:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere i razmake"},before:function(e,n){return"Polje "+e+" mora biti pre "+n[0]},between:function(e,n){return"Polje "+e+" mora biti između "+n[0]+" i "+n[1]},confirmed:function(e){return"Potvrda polja "+e+" se ne poklapa"},credit_card:function(e){return"Polje "+e+" nije validno"},date_between:function(e,n){return"Polje "+e+" mora biti između "+n[0]+" i "+n[1]},date_format:function(e,n){return"Polje "+e+" mora biti u formatu "+n[0]},decimal:function(e,n){void 0===n&&(n=[]);var a=n[0];return void 0===a&&(a="*"),"Polje "+e+" mora biti broj i može sadržati"+(a&&"*"!==a?" "+a:"")+" decimalnih mesta"},digits:function(e,n){return"Polje "+e+" mora biti broj i sadržati tačno "+n[0]+" cifara"},dimensions:function(e,n){return"Polje "+e+" mora biti "+n[0]+" x "+n[1]+" piksela"},email:function(e){return"Polje "+e+" mora biti validan imejl"},excluded:function(e){return"Polje "+e+" mora imati validnu vrednost"},ext:function(e){return"Polje "+e+" mora biti validan fajl"},image:function(e){return"Polje "+e+" mora biti slika"},included:function(e){return"Polje "+e+" mora biti validna vrednost"},ip:function(e){return"Polje "+e+' mora biti validna "IP" adresa'},max:function(e,n){return"Polje "+e+" ne sme biti duže od "+n[0]+" karaktera"},max_value:function(e,n){return"Polje "+e+" ne sme biti veće od "+n[0]},mimes:function(e){return"Polje "+e+" mora biti validan tip fajla"},min:function(e,n){return"Polje "+e+" mora sadržati najmanje "+n[0]+" karaktera"},min_value:function(e,n){return"Polje "+e+" ne sme biti manje od "+n[0]},numeric:function(e){return"Polje "+e+" mora biti broj"},regex:function(e){return"Format polja "+e+" nije validan"},required:function(e){return"Polje "+e+" je obavezno"},size:function(e,n){return"Polje "+e+" mora biti manje od "+function(e){var n=1024,a=0==(e=Number(e)*n)?0:Math.floor(Math.log(e)/Math.log(n));return 1*(e/Math.pow(n,a)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}(n[0])},url:function(e){return"Polje "+e+" nije validna veb adresa"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}()}}]);