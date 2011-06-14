// https://developer.mozilla.org/en/DOM/cssRule#CSSMediaRule


var styleTag = document.getElementById ("myStyle"); //<< HTMLStyleElement

        // the style sheet in the style tag
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

    if (sheet.cssRules) {   // all browsers, except IE before version 9
         if (sheet.cssRules.length > 0) {            
                    sheet.cssRules[0].deleteRule(0);
           }
    }