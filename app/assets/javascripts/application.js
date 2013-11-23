// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require twitter/bootstrap
//= require zeroclipboard

// $("#copy-btn")


// $(document).ready(function(){
  // $("#copy-btn").click(function(){
    // var short_url = $("#short-value").text();
    // console.log(short_url);
    // copyToClipboard(short_url);

    // copy(short_url);
    // enyby_clip = new EnybyClipboard(); //init 

	// enyby_clip.copyText(short_url); // place this in CTRL+C handler and return true;

  // });
// });

 // //javascript copy function
 //        function copy(inElement) {
 //          if (inElement.createTextRange) {
 //            var range = inElement.createTextRange();
 //            if (range &amp;&amp; BodyLoaded==1)
 //             range.execCommand('Copy');
 //          } else {
 //            var flashcopier = 'flashcopier';
 //            if(!document.getElementById(flashcopier)) {
 //              var divholder = document.createElement('div');
 //              divholder.id = flashcopier;
 //              document.body.appendChild(divholder);
 //            }
 //            document.getElementById(flashcopier).innerHTML = '';
 //            var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+escape(inElement.value)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
 //            document.getElementById(flashcopier).innerHTML = divinfo;
 //          }
 //        }

 //  function EnybyClipboard() {
 //     this.saveSelection = false;
 //     this.callback = false;
 //     this.pastedText = false;

 //     this.restoreSelection = function() {
 //       if (this.saveSelection) {
 //         window.getSelection().removeAllRanges();
 //         for (var i = 0; i < this.saveSelection.length; i++) {
 //           window.getSelection().addRange(this.saveSelection[i]);
 //         }
 //         this.saveSelection = false;
 //       }
 //     };

 //     this.copyText = function(text) {
 //       var div = $('special_copy');
 //       if (!div) {
 //         div = new Element('pre', {
 //           'id': 'special_copy',
 //           'style': 'opacity: 0;position: absolute;top: -10000px;right: 0;'
 //         });
 //         div.injectInside(document.body);
 //       }
 //       div.set('text', text);
 //       if (document.createRange) {
 //         var rng = document.createRange();
 //         rng.selectNodeContents(div);
 //         this.saveSelection = [];
 //         var selection = window.getSelection();
 //         for (var i = 0; i < selection.rangeCount; i++) {
 //           this.saveSelection[i] = selection.getRangeAt(i);
 //         }
 //         window.getSelection().removeAllRanges();
 //         window.getSelection().addRange(rng);
 //         setTimeout(this.restoreSelection.bind(this), 100);
 //       } else return alert('Copy not work. :(');
 //     };

 //     this.getPastedText = function() {
 //       if (!this.pastedText) alert('Nothing to paste. :(');
 //       return this.pastedText;
 //     };

 //     this.pasteText = function(callback) {
 //       var div = $('special_paste');
 //       if (!div) {
 //         div = new Element('textarea', {
 //           'id': 'special_paste',
 //           'style': 'opacity: 0;position: absolute;top: -10000px;right: 0;'
 //         });
 //         div.injectInside(document.body);
 //         div.addEvent('keyup', function() {
 //           if (this.callback) {
 //             this.pastedText = $('special_paste').get('value');
 //             this.callback.call(null, this.pastedText);
 //             this.callback = false;
 //             this.pastedText = false;
 //             setTimeout(this.restoreSelection.bind(this), 100);
 //           }
 //         }.bind(this));
 //       }
 //       div.set('value', '');
 //       if (document.createRange) {
 //         var rng = document.createRange();
 //         rng.selectNodeContents(div);
 //         this.saveSelection = [];
 //         var selection = window.getSelection();
 //         for (var i = 0; i < selection.rangeCount; i++) {
 //           this.saveSelection[i] = selection.getRangeAt(i);
 //         }
 //         window.getSelection().removeAllRanges();
 //         window.getSelection().addRange(rng);
 //         div.focus();
 //         this.callback = callback;
 //       } else return alert('Fail to paste. :(');
 //     };
 //   }


// function copyToClipboard (text) {
//   window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
// }


// function copyToClipboard(text)
// {
//     if (window.clipboardData) // Internet Explorer
//     {  
//         window.clipboardData.setData("Text", text);
//     }
//     else
//     {  
//         unsafeWindow.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
//         const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);  
//         clipboardHelper.copyString(text);
//     }
// }