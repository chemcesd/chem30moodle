//Created by Robert Denis, Alberta Education, February 9, 2009.

//This function determines the user's browser.
function determineBrowser()
{
	var browser = "";

	//Set the browser type - used later for determining the position of the child nodes in the XML.
	if (window.ActiveXObject)
	{
		browser = "IE";
	}
	else if (window.navigator.userAgent.indexOf("Firefox") > -1)
	{
		browser = "FF";
	}
	else if (window.navigator.userAgent.indexOf("Netscape/7") > -1)
	{
		browser = "NN7.x";
	}
	else if (window.navigator.userAgent.indexOf("Netscape/8") > -1)
	{
			browser = "NN8.x";
	}
	else if (window.navigator.appVersion.indexOf("Safari") > -1)
	{
			browser = "Safari";
	}
	
	return browser;
}

function loadXMLPackage(xmlPackage, browser)
{
	//Determine if the browser is IE by checking to see if ActiveXObjects are supported.
	if (browser == "IE")
	{
		//Create the XML object by setting the ActiveXObject, the asynchronous property, the XML to load (from the relative path in the
		//initialization above, and then parse the XML.
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = false;
		xmlDoc.load(xmlPackage);
		parseXML();
	}
	
	//Based on the userAgent, determine if the browser is Netscape 7 or any Safari browser.
	if (browser == "Safari")
	{
		//Create the XML object by setting the XML HTTP Request, the On Ready State Change property, the XML to load (from the relative path
		//in the initialization above, and then return null.
		xmlDoc = new XMLHttpRequest();
		xmlDoc.onreadystatechange = parseXML;
		xmlDoc.open("GET", xmlPackage, true);
		xmlDoc.send(null);
	}
	
	//Based on the userAgent, determine if the browser is Netscape 8.
	if (browser == "NN7.x" || browser == "NN8.x" || browser == "FF")
	{
		//Create the XML object by creating a document, setting the asynchronous property, the XML to load (from the relative path in the
		//intialization above, and then parse the XML.
		xmlDoc = document.implementation.createDocument("", "", null);
		xmlDoc.async = false;
		xmlDoc.load(xmlPackage);
		xmlDoc.onload = parseXML();
	}
}

//This function controls the banner turning on and off.
function options(incomingType)
{
    //Get a reference to the banner TD cell on the index.html page.
    var banner = document.getElementById("banner");
    
    //Get a reference to the customize DIV layer on the index.html page.
    var customize = document.getElementById("customize");
    
    //Create a variable to store the new text into.
    var text = "";
    
    //Based on the incoming type, turn the banner on or off appropriately.
    if (incomingType == "bannerOn")
    {
        //Set the banner's inner HTML with a height of 80 pixels.
        banner.innerHTML = '<iframe name="title" id="title" src="title.html" scrolling="no" frameborder="0" height="80px" width="100%"></iframe>';
        
        //Explicitly set the banner height. You need to do both this and the step above in order to open the banner on all browsers.
        banner.style.height = 80 + 'px';
        
        //Change the on/off state of the customize DIV layer.
        text = 'Banner: on/<a href="javascript:options(\'bannerOff\')">off</a><br /><a href="javascript:printerFriendly()"><img src="images/printerFriendly.png" alt="Printer friendly version" title="Printer friendly version" /></a>';
    }
    
    if (incomingType == "bannerOff")
    {
        //Set the banner's inner HTML with a height of 80 pixels.
        banner.innerHTML = '<iframe name="title" id="title" src="title.html" scrolling="no" frameborder="0" height="0px" width="100%"></iframe>';
        
        //Explicitly set the banner height. You need to do both this and the step above in order to open the banner on all browsers.
        banner.style.height = 0 + 'px';
        
        //Change the on/off state of the customize DIV layer.
        text = 'Banner: <a href="javascript:options(\'bannerOn\')">on</a>/off<br /><a href="javascript:printerFriendly()"><img src="images/printerFriendly.png" alt="Printer friendly version" title="Printer friendly version" /></a>';
    }
    
    //Change the customize innerHTML.
    customize.innerHTML = text;
}

//This function opens the content window without the banner or menu attached.
function printerFriendly()
{
    //Load the querystring from the parent window.
    var windowLoc = parent.window.location.search.toString();
    
    //Retrieve the page or content URL from the querystring.
    var pageURL = "";
    
    if (windowLoc.indexOf("&title") > -1) pageURL = windowLoc.substring(windowLoc.indexOf("page=") + 5, windowLoc.indexOf("&title"));
    else pageURL = windowLoc.substring(windowLoc.indexOf("page=") + 5, windowLoc.length);
    
    //Open the page or content URL in a new window without the banner or menu attached.
    window.open(pageURL);
}

function embedFlashObject(asset, color) 
{		
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
		document.write('height="100%"');
		document.write('width="100%">');
		document.write('<param name="src" value="' + asset + '">');
		document.write('<param name="allowScriptAccess" value="sameDomain" />');
		document.write('<param name="align" value="middle">');
		document.write('<param name="quality" value="high">');
		document.write('<param name="bgcolor" value="' + color + '">');
		document.write( '<embed ' );
		document.write( '  src="' + asset + '" ' );
		document.write( '  name="' + asset + '"' );
		document.write( '  width="100%" ' );
		document.write( '  height="100%" ' );
		document.write( '  align="middle" ' );
		document.write( '  quality="high" ' );
		document.write( '  allowScriptAccess="sameDomain" ' );
		document.write( '  scale="aspect" ' );
		document.write( '  pluginspage="http://www.macromedia.com/go/getflashplayer" ' );
		document.write( '  bgcolor="' + color + '" ' );
		document.write( '  type="application/x-shockwave-flash">' );
		document.write( '</embed>' );
		document.write('</object>');
}

function embedQuicktimeObject(movie, width, height, id) 
{
	document.write("<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='"+width+"' height='"+height+"' codebase='http://www.apple.com/qtactivex/qtplugin.cab' id='"+id+"'>");		
		document.write("<param name='src' value='" + movie + "' />");
		document.write("<param name='controller' value='true' />");
		document.write("<param name='autoplay' value='false' />");
		document.write("<param name='enablejavascript' value='true' />");
		document.write("<param name='scale' value='aspect' />");
		document.write("<param name='kioskmode' value='true' />");
		document.write("<param name='bgcolor' value='#FFFFFF' />");
			
		document.write("<embed ");
			document.write("src='" + movie + "'");
			document.write("width='"+width+"'");
			document.write("name='"+id+"'");
			document.write("height='"+height+"'");
			document.write("autoplay='false'");
			document.write("scale='aspect'");
			document.write("kioskmode='true'");
			document.write("bgcolor='#FFFFFF'");
			document.write("type='video/quicktime'");
			document.write("pluginspage='http://www.apple.com/quicktime/download/'");
			document.write("enablejavascript='true'");
			document.write("controller='true'");
		document.write("></embed>");
			
	document.write("</object>");
}

var newwindow;
function full(url)
{
        newwindow=window.open(url,'name','height=640,width=960,scrollbars=0,resizable=1,menubar=0,toolbar=0,status=0,location=0,directories=0');
        if (window.focus) {newwindow.focus()}
}