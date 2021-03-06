//< needs(misc.ajax)
var httpRequest = null;
        
        function SendRequest () {
            if (!httpRequest) {
                httpRequest = CreateHTTPRequestObject ();   // defined in ajax.js
            }
            if (httpRequest) {          
                    // The requested file must be in the same domain that the page is served from.
                var url = "ns.xml";
                httpRequest.open ("GET", url, true);    // async
                httpRequest.onreadystatechange = OnStateChange;
                httpRequest.send (null);
            }
        }
        

        function OnStateChange () {
            if (httpRequest.readyState == 0 || httpRequest.readyState == 4) {
                if (IsRequestSuccessful (httpRequest)) {    // defined in ajax.js
                    Test_GetAttributeNodeNS ();
                }
                else {
                    alert ("Operation failed.");
                }
            }
        }

        function Test_GetAttributeNodeNS () {
            var xmlDoc = ParseHTTPResponse (httpRequest);   // defined in ajax.js
            if (!xmlDoc)
                return;

            var itemTags = xmlDoc.getElementsByTagName ("item");
            var firstItem = itemTags[0];
            if (firstItem.getAttributeNodeNS) {
                var attrNodeNS = firstItem.getAttributeNodeNS ("http://help.dottoro.com/NS", "color");
                alert ("The color of the first item: " + attrNodeNS.nodeValue);
            }
            else {
                alert ("Your browser doesn't support the getAttributeNodeNS method.");
            }
        }