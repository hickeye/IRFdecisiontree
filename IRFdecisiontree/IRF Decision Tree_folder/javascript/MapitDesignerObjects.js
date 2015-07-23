/*
  Scripted FAQ, (c) Hindin Solutions 2014

  This javascript module defines types and function for a scripted FAQ document.

  Usage:

    To use these classes the consumer must:

     - Declare and initialise a SessionManager

     - Declare	a variable 'var objCurrentSection = null;' to store the current section (page)

	 - Declare a variable 'var iSectionCounter = 0;' to keep a track of the page depth.


Description:

 The following is a simple representation of the class hierachy. 

   SessionManager : 
       DocumentSchema
         DocumentInfo
             "Name"
             "Description"
         Section[] 
           "ID"
           Content[]     (either a Question, TextBlock or Hyperlink)
             TextBlock :
                "ContentType" == 'TextBlock'
             Hyperlink
                "ContentType" == 'Hyperlink'
             Question :
                "ContentType" == 'Question'
                "Text"
                "Help"   
                ResponseGroup[]
                    "ID"
                    Field
                    SelectMinimum
                    SelectMaximum
                    Type
                    ID
                    Text
                    Response[]   (one of a ResponseOption, ResponseText or a ResponseDropDown)
                      Type
                      ID
                      Text
                      Values     (only for ResponseDropDown)

       SectionData[]
         "SectionId"    ---> use this to link into the Section[]
         "Sequence"
         "Name"
         ResponseGroup[]
           ResponseGroupData
             ResponseGroupID
             Responses[]                 (one of a ResponseOptionData, a ResponseTextData or a ResponseDropDownData)
               ResponseOptionData
                 Type
                 ResponseOptionID
                 Selected
               ResponseTextData
                 Type
                 ResponseTextID 
                 Value
               ResponseDropDownData
                 Type
                 ResponseDropDownID
                 Value


In addition to the SessionManager, each section has an object instantiated. The 
purpose of this is to bridge between the javascript and the document.


        function DomSection() {

          // Retuns: a boolean indicating whether the RedirectPage function
          // will perform a redirect.
          this.IsRedirectUrlSpecified = function();

          // Performs a redirect action.
          this.RedirectPage = function();

          // Returns a boolean indicating whether this is the last page of the 
          // FAQ script
          this.IsLast = function() ;

          // Clear the doucment inputs and initialse them for use. This function
          // is called on entry to a section to ensure the controls are setup ready
          // for the user to answer questions.
          //
          // returns: nothing
          this.ClearInputs = function();

          // Get the state of the user controls as a 'SectionData' object. This is
          // the section data factory.
          //
          // Note: This is a creat/make method. Because it is actually creating a
          // new SectionData object it is more than a 'get'.
          //
          // returns: a new SectionData object.
          this.Save = function();

          // Restore the state of the user controls from a 'SectionData' object. 
          //
          // returns: nothing
          this.Restore = function();

          // Execute the 'next' logic to progress to the next step. Iff the 
          // conditions have been met, the next page will be presented to the user.
          //
          // returns: nothing.
          this.ExecLogic = function();
        }

*/

// Flag to indicate whether we attempt to log debug information. The console 
// object is only available if firebug is installed.
//
// seealso http://getfirebug.com/wiki/index.php/Console_API
var DEBUG = (typeof console == "object");

if (DEBUG && !console.debug && typeof console.log !== 'undefined') {
    console.debug = console.log;
}

//
//  A question response group item option (i.e. a checkbox/radio button)
//
function ResponseOption(sID, sText) {
	this.Type = "ResponseOption";
	this.ID = sID;
	this.Text = sText;
	
	this.ToText = function( oResponseOptionData ) { 
		if ( oResponseOptionData.Selected ) { 
			return this.Text;
		}
		else { 
			return "";
		}
	}
	
	this.ToXml = function() { 
		return "<ResponseOption id=\"" + XmlEncode( this.ID ) + "\">" +
                "<Text>" + XmlEncode( this.Text ) + "</Text>" +
                "</ResponseOption>";
	}
}

//
//  A question response group text entry (i.e. an edit box)
//
function ResponseText(sID, sText) {
	this.Type = "ResponseText";
	this.ID = sID;
	this.Text = sText;
	
	this.ToText = function( oResponseTextData ) { 
		if ( oResponseTextData.Value != null && oResponseTextData.Value.length > 0 ) {
		    return this.Text + ": " + XmlEncode(oResponseTextData.Value);
		}		
		else { 
			return "";
		}
	}
		
	this.ToXml = function() { 
		return "<ResponseText id=\"" + XmlEncode( this.ID ) + "\"><Text>" + XmlEncode( this.Text ) + "</Text></ResponseText>";
	}
}

//
//  A question response group dropdown item (i.e. a drop-down list)
//
function ResponseDropDown(sID, sText, sValues) {
    this.Type = "ResponseDropDown";
    this.ID = sID;
    this.Text = stripLastParagrahpTag(sText);
    this.Values = sValues;

    function stripLastParagrahpTag(html) {
        var lastIndexOfP = html.lastIndexOf("<P") > html.lastIndexOf("<p") ? html.lastIndexOf("<P") : html.lastIndexOf("<p");
        if (lastIndexOfP > -1)
        {
            var prePText = html.substring(0, lastIndexOfP);
            var postPText = html.substring(lastIndexOfP);
            postPText = postPText.substring(postPText.indexOf(">") + 1).replace("</P>", "").replace("</p>", "");
            return prePText + postPText;
        }
        else
        {
            return html;
        }
    }

    this.ToText = function (oResponseDropDownData) {
            return this.Text + ": " + XmlEncode(oResponseDropDownData.Value);
    }

    this.ToXml = function () {
        var arrValues = this.Values.split("|");
        var strXml = "";
        // if the provided list is empty then the code needs to make sure that only one empty Option is created.
        if ((arrValues.length == 2) && (arrValues[0] == arrValues[1])) {
            strXml = "<Options><Option/></Options>";
        }
        else {
            for (var i = 0; i < arrValues.length; i++) {
                strXml += "<Option>" + XmlEncode(arrValues[i]) + "</Option>";
            }
            strXml = "<Options>" + strXml + "</Options>";
        }
        return "<ResponseDropDown id=\"" + XmlEncode(this.ID) + "\"><Text>" + XmlEncode(this.Text) + "</Text>" + strXml + "</ResponseDropDown>";
    }
}


// For a Question type this is the container that holds the set of responses
//  that can be made.
//
// seealso Question
function ResponseGroup(sID) {
    this.ID = sID;

    this.Responses = new Array();
    this.Field = null;

    // When the response group has radio button/checkbox set the minimum number
    // of items that must be selected.
    this.SelectMinimum = 0;

    // When the response group has radio button/checkbox set the maximum number
    // of items that must be selected. If the value is less than zero, then
    // the maximum is unbounded.
    this.SelectMaximum = -1;

    this.ToText = function (oInputResponseGroup) {
        if (oInputResponseGroup != null) {
            var strText = "";
            for (var i = 0; i < this.Responses.length; i++) {
                var answer = this.Responses[i].ToText(oInputResponseGroup.GetResponse(this.Responses[i].ID));
                if (strText.length > 0 && answer.length > 0) {
                    strText += ", ";
                }
                strText += answer;
            }
            if (strText.length == 0) {
                strText = "(No input provided)";
            }

            return strText + "\n";
        }
        else {
            return "";
        }
    }

    this.ToHtml = function (oInputResponseGroup) {
        if (oInputResponseGroup != null) {
            var strHtml = "";
            for (var i = 0; i < this.Responses.length; i++) {
                var answer = this.Responses[i].ToText(oInputResponseGroup.GetResponse(this.Responses[i].ID));
                if (this.Responses[i].Type == "ResponseOption" && answer.length > 0) {
                    if (strHtml.length > 0) {
                        strHtml += ", ";
                    }
                    strHtml += stripParagrahpTags(answer);
                }

                else if (this.Responses[i].Type == "ResponseText" && answer.length > 0) {
                    if (strHtml.length > 0) {
                        strHtml += "<BR>";
                    }
                    strHtml += answer;
                }
                else if (this.Responses[i].Type == "ResponseDropDown" && answer.length > 0) {
                    if (strHtml.length > 0) {
                        strHtml += "<BR>";
                    }
                    strHtml += answer;
                }
            }
            if (strHtml.length == 0) {
                strHtml = "(No input provided)"
            }
            return "<table width='100%'><tr>" +
                    "<td width='1'><img src='" + smallAnswerImage + "' style=\"width:16px;height:16px\"></td>" +
                    "<td valign='center' width='100%'>" + strHtml + "</td>" +
                    "</tr></table>";

        }
        else {
            return "";
        }
    }

    this.ToXml = function () {
        var strXml = "";
        if (this.Responses.length > 0) {
            strXml = "<ResponseGroup id=\"" + XmlEncode(this.ID) + "\"";
            if (this.Field != null && this.Field.length > 0) {
                strXml += " field=\"" + XmlEncode(this.Field) + "\"";
            }
            if (this.SelectMaximum != -1) {
                strXml += " selectMin=\"" + this.SelectMinimum + "\" selectMax=\"" + this.SelectMaximum + "\"";
            }

            strXml += ">";

            for (var i = 0; i < this.Responses.length; i++) {
                strXml += this.Responses[i].ToXml();
            }

            strXml += "</ResponseGroup>";
        }
        return strXml;
    }

    function stripParagrahpTags(html) {
        return html.replace(/(<P[\s\S]+?>|<\/P>)/g, "").replace(/(<p[\s\S]+?>|<\/p>)/g, "");
    }
}

// WARNING: This code uses a global variable 'smallHyperlinkImage'
function HyperLink(sText, sUrl, sHelp) {
    this.Text = sText;
    this.Url = sUrl;
    this.Help = sHelp;
    this.ContentType = "Hyperlink";

    this.ToText = function () {
        return this.Text + " (" + this.Url + ")\n\n";
    }

    this.ToHtml = function () {
        return "<table width='100%'><tr>" +
                "<td width='1'><img src=\"" + smallHyperlinkImage + "\" style=\"width:16px;height:16px\"></td>" +
                "<td valign='center' width='100%'>" + XmlEncode(this.Text) + "</td>" +
                "</tr></table>";
    }

    this.ToXml = function () {
        var strXml = "<HyperLink><Text>" + XmlEncode(this.Text) + "</Text><Url>" + XmlEncode(this.Url) + "</Url>"
        if (this.Help != null && this.Help.length > 0) {
            strXml += "<Help>" + XmlEncode(this.Help) + "</Help>";
        }
        strXml += "</HyperLink>";
        return strXml;
    }
}

//
// WARNING: This code uses a global variable 'smallInformationImage'
function TextBlock(sText) {
    this.Text = sText;
    this.ContentType = "TextBlock";

    this.ToText = function () {
        return this.Text + "\n\n";
    }

    this.ToHtml = function () {
        return "<table width='100%'><tr>" +
                "<td width='1'><img src=\"" + smallInformationImage + "\" style=\"width:16px;height:16px\"></td>" +
                "<td valign='center' width='100%'>" + this.Text + "</td>" +
                "</tr></table>";
    }

    this.ToXml = function () {
        return "<TextBlock><Text>" + XmlEncode(this.Text) + "</Text></TextBlock>";
    }
}
//
// A 'question' type of content in a Section (Page). 
//
// seealso TextBlock
// seealso Hyperlink
function Question() {
    this.ContentType = "Question";
    this.Text = null;
    this.Help = null;
    this.ResponseGroups = new Array();

    this.ToText = function (oSectionData) {
        var strText = this.Text + "\n";

        for (var i = 0; i < this.ResponseGroups.length; i++) {
            strText += this.ResponseGroups[i].ToText(oSectionData.GetResponseGroup(this.ResponseGroups[i].ID));
            if (i + 1 < this.ResponseGroups.length) {
                strText += "\n";
            }
        }

        return strText;
    }

    this.ToHtml = function (oSectionData) {
        var strHtml = "<table width='100%'><tr>" +
                "<td width='1'><img src='" + smallQuestionImage + "' style=\"width:16px;height:16px;\"></td>" +
                "<td valign='center' width='100%'>" + XmlEncode(this.Text) + "</td>" +
                "</tr></table>";

        for (var i = 0; i < this.ResponseGroups.length; i++) {
            strHtml += this.ResponseGroups[i].ToHtml(oSectionData.GetResponseGroup(this.ResponseGroups[i].ID));
        }

        return strHtml;
    }

    this.ToXml = function () {
        var strXml = "<Question><Text>" + XmlEncode(this.Text) + "</Text>";

        if (this.Help != null && this.Help.length > 0) {
            strXml += "<Help>" + XmlEncode(this.Help) + "</Help>";
        }

        for (var i = 0; i < this.ResponseGroups.length; i++) {
            strXml += this.ResponseGroups[i].ToXml();
        }

        strXml += "</Question>";
        return strXml;
    }
}


//
// The top level contain for sections (pages). The data is populated at export
// time in code that generates these data structures. This data is readonly
// and isn't changed at runtime.
//
function Section(sID) {
    // The unique id of the section
    this.ID = sID;

    // An array of Question, TextBlock & Hyperlink
    this.Content = new Array();

    this.ToText = function (oSectionData) {
        var strText = "";
        for (var i = 0; i < this.Content.length; i++) {
            strText += this.Content[i].ToText(oSectionData);
            if (this.Content[i].ContentType == "Question" && i + 1 < this.Content.length) {
                strText += "\n";
            }

        }
        return strText + "\n";
    }

    this.ToHtml = function (oSectionData) {
        var strHtml = "";
        for (var i = 0; i < this.Content.length; i++) {
            strHtml += this.Content[i].ToHtml(oSectionData);
            if (i + 1 < this.Content.length) {
                strHtml += "<br>";
            }
        }
        return strHtml;
    }

    this.ToXml = function () {
        var strXml = "<Section id=\"" + XmlEncode(this.ID) + "\">"

        for (var i = 0; i < this.Content.length; i++) {
            strXml += this.Content[i].ToXml();
        }

        strXml += "</Section>";
        return strXml;
    }
}



///////////////////////////////////////////////////////////////////////
//
//  Dynamic 'data' related objects - those that change at run time
//


// A ResponseOptionData stores state from checkboxs and radio buttons. It is
// put in the 'Responses' field of a ResponseGroupData
//
// see ResponseTextData
function ResponseOptionData(sResponseOptionID, bSelected) {
	this.Type = "ResponseOptionData";
	this.ResponseOptionID = sResponseOptionID;
	this.Selected = bSelected;

	DEBUG && console.assert(bSelected != null, "Invalid button state for %s", sResponseOptionID); 

	
	this.ToXml = function() {
		return "<ResponseOption refID=\"" + XmlEncode( this.ResponseOptionID ) + "\" selected=\"" + this.Selected + "\"/>";
    }

    // Return the state of the response text. If it has a default false
    // value then don't return anything.
    this.ToState = function () {
        if (this.Selected) {
            return {
                "id": this.ResponseOptionID,
                "t": "o",
                "v": this.Selected
            };
        } else {
            return null;
        }
    }
}

// A ResponseTextData stores state from text input fields. It is
// put in the 'Responses' field of a ResponseGroupData
//
// see ResponseOptionData
function ResponseTextData(sResponseTextID, sValue) {
	this.Type = "ResponseTextData";
	this.ResponseTextID = sResponseTextID;
	this.Value = sValue;
	
	this.ToXml = function() {
		if ( this.Value.length > 0 ) { 
			return "<ResponseText refID=\"" + XmlEncode( this.ResponseTextID ) + "\">" +
                    "<Value>" + XmlEncode( this.Value ) + "</Value>" +
                    "</ResponseText>";
		}
		else {
			return "<ResponseText refID=\"" + XmlEncode( this.ResponseTextID ) + "\"><Value/></ResponseText>";
		}
	}

    // Return the state of the response text. If it has a default empty
    // value then don't return anything.
	this.ToState = function () {
	    if (this.Value != null && this.Value.length > 0) {
	        return {
	            "id": this.ResponseTextID,
	            "t": "t" /* short version of 'responsetextdata' */,
	            "v": this.Value
	        };
	    }
	    else {
	        return null;
	    }
	}
}

// A ResponseDropDownData stores state from text input fields. It is
// put in the 'Responses' field of a ResponseGroupData
//
// see ResponseOptionData
function ResponseDropDownData(sResponseDropDownID, sValue) {
    this.Type = "ResponseDropDownData";
    this.ResponseDropDownID = sResponseDropDownID;
    this.Value = sValue;

    this.ToXml = function () {
        if (this.Value.length > 0) {
            return "<ResponseDropDown refID=\"" + XmlEncode(this.ResponseDropDownID) + "\">" +
                    "<SelectedValue>" + XmlEncode(this.Value) + "</SelectedValue>" +
                    "</ResponseDropDown>";
        }
        else {
            return "<ResponseDropDown refID=\"" + XmlEncode(this.ResponseDropDownID) + "\"><SelectedValue/></ResponseDropDown>";
        }
    }

    // Return the state of the response text. If it has a default empty
    // value then don't return anything.
    this.ToState = function () {
        if (this.Value != null && this.Value.length > 0) {
            return {
                "id": this.ResponseDropDownID,
                "t": "l" /* short version of 'responsedropdowndata' */,
                "v": this.Value
            };
        }
        else {
            return null;
        }
    }
}

//
//  A collection item of type ResponseOptionData or ResponseTextData.
//
function ResponseGroupData(sResponseGroupID) {
    this.ResponseGroupID = sResponseGroupID;

    // see ResponseTextData
    // see ResponseOptionData
    this.Responses = new Array();

    this.GetResponse = function (strID) {
        for (var i = 0; i < this.Responses.length; i++) {
            if ((this.Responses[i].Type == "ResponseOptionData" &&
                    this.Responses[i].ResponseOptionID == strID) ||
                    (this.Responses[i].Type == "ResponseTextData" &&
                        this.Responses[i].ResponseTextID == strID) ||
                            (this.Responses[i].Type == "ResponseDropDownData" &&
                                this.Responses[i].ResponseDropDownID == strID)) {
                return this.Responses[i];
            }
        }
        return null;
    }

    this.ToXml = function () {
        var strXml = "<ResponseGroup refID=\"" + XmlEncode(this.ResponseGroupID) + "\">";

        for (var i = 0; i < this.Responses.length; i++) {
            strXml += this.Responses[i].ToXml();
        }

        strXml += "</ResponseGroup>";
        return strXml;
    }

    // Get the current state as a simple JSON like object for serialisation.
    this.ToState = function () {
        var responses = new Array();
        for (var i = 0; i < this.Responses.length; i++) {
            var response = this.Responses[i].ToState();
            if (response != null) {
                responses.push(response);
            }
        }
        return { "rg": { "id": this.ResponseGroupID, "r": responses} };
    }
}


/*
* Dynamic information about a page
*/
function SectionData(sSectionID, sName, iSequence) {
    // The id of the section. This is used to find the static Section ('page')
    // see DocumentSchema.Sections
    this.SectionID = sSectionID;

    // see ResponseGroupData
    this.ResponseGroups = new Array();
    this.Sequence = iSequence;
    this.Name = sName;

    this.GetResponseGroup = function (strID) {
        for (var i = 0; i < this.ResponseGroups.length; i++) {
            if (this.ResponseGroups[i].ResponseGroupID == strID) {
                return this.ResponseGroups[i];
            }
        }
        return null;
    }

    this.ToXml = function () {
        if (this.ResponseGroups.length > 0) {
            var strXml = "<Section refID=\"" + XmlEncode(this.SectionID) + "\" sequence=\"" + this.Sequence + "\">";

            for (var i = 0; i < this.ResponseGroups.length; i++) {
                strXml += this.ResponseGroups[i].ToXml();
            }

            strXml += "</Section>";
            return strXml;
        }
        else {
            return "<Section refID=\"" + XmlEncode(this.SectionID) + "\" sequence=\"" + this.Sequence + "\" />";
        }
    }

    // Get the current state as a simple JSON like object for serialisation.
    //
    // The sequence number and the name don't need to be serialised.
    this.ToState = function () {
        var groups = new Array();
        for (var i = 0; i < this.ResponseGroups.length; i++) {
            groups[i] = this.ResponseGroups[i].ToState();
        }
        return { "sd" : { "id": this.SectionID, "g": groups} };
    }
}


///////////////////////////////////////////////////////////////////////
//
//  Top level container objects
//

/*
* Static information recorded about the scripted FAQ. This information is
* initialised by the main application with information from the project file.
*/
function DocumentInfo(sTitle, sDescription) {
    this.Title = sTitle;
    this.Description = sDescription;

    this.ToText = function () {
        return this.Title + "\n" + this.Description + "\n\n";
    }

    this.ToXml = function () {
        return "<DocumentInfo><Title>" + XmlEncode(this.Title) + "</Title>" +
                "<Description>" + XmlEncode(this.Description) + "</Description></DocumentInfo>";
    }
}


/*  
* Static information about the pages ('sections') in the scripted FAQ. This
* is the static part of the 'model'.
* 
* see SessionManager
*/
function DocumentSchema(docInfo) {
    // The name and description of the scripted FAQ
    this.DocumentInfo = docInfo;

    // A non-empty list of sections ('pages') of type Section.
    this.Sections = new Object();


    this.AddSection = function (oSection) {
        this.Sections[oSection.ID] = oSection;
        DEBUG && console.debug("Adding section '%s'", oSection.ID);
    }

    // Get static section data from the session manager by id.
    //
    // returns: An object of type Section
    this.GetSection = function (id) {
        DEBUG && console.debug("Get section '%s'", id);
        return this.Sections[id];
    }

    this.ToXml = function () {
        var strXml = "<DocumentSchema>";

        strXml += this.DocumentInfo.ToXml();
        for (key in this.Sections) {
            strXml += this.Sections[key].ToXml();
        }

        strXml += "</DocumentSchema>";
        return strXml;
    }
}

/*
* The top level object that stored both the dynamic state data, and the static 
* schema information.
*/
function SessionManager() {
    // The static data that describes the FAQ doucment.
	var documentSchema = new DocumentSchema(new DocumentInfo(null, null));

	// Dynamic information about each section ('page'). As a page
	// is visited the stack of pages is changed. Details on the page
	// can be obtained in the schema section data (the static infomation).
	//
	// Logically the current page is part of this stack, but it is
	// no physically included in this list.
	//
	// see SectionData
    // see Section
	var sectionData = new Array();

	// An array of objects of type DomSection that provide behaviours
    // for manupulating the document.
	var domSections = new Array();

	this.SetDocumentInfo = function (info) {
	    DEBUG && console.debug("Info '%s' - '%s'", info.Title, info.Description);
	    documentSchema.DocumentInfo = info;
    }

    // The statically generated javascript code lays down an instance
    // of a Section and calls this method. This is the  mechanism by
    // which the model is built up.
    this.AddDocumentSchemaSection = function (oSection) {
        DEBUG && console.debug("Adding section '%s'", oSection.ID);
        documentSchema.AddSection(oSection);
    }

    // Get static section data from the session manager by id.
    //
    // returns: An object of type Section
    // seealso DocumentSchema
    this.GetSection = function (id) {
        DEBUG && console.debug("Getting section '%s'", id);
        return documentSchema.GetSection(id);
    }

    // Add a section to the list of known sections. These sections are
    // of type 'DomSection'. These form the interface with the view.
    // These objects are generated by the export XSLT.
    //
    // seealso this.GetDomSection
    this.AddDomSection = function (id, domSection) {
        DEBUG && console.debug("Adding DOM section '%s'", id);
        domSections[id] = domSection;
    }

    this.GetDomSection = function (id) {
        return domSections[id];
    }


    // Access to the section data (page data) as a stack. 
    // seealso iSectionCounter
    this.AddSectionData = function (oSectionData) {
	    DEBUG && console.debug("Adding section data '%s'", oSectionData.SectionID);
	    sectionData.push(oSectionData);	
	}

    // Access to the section data as an array
	// seealso iSectionCounter
	this.GetSectionData = function (iIndex) { 
		return sectionData[ iIndex ];
	}

    // Access to the section data (page data) as a stack. 
    // seealso iSectionCounter
	this.PopSectionData = function () {
	    var sd = sectionData.pop();
	    DEBUG && console.info("Removing section data '%s', count %d", sd.SectionID, sectionData.length);
	    return sd;
	}

	this.GetSessionSummaryHtml = function () {
	    var strHtml = "";

        // Format all but the current section (page).
	    for (var i = 0; i < sectionData.length; i++) {
	        var data = sectionData[i];
	        var section = this.GetSection(data.SectionID);
	        if (section != null) {
	            strHtml += section.ToHtml(data);

                // For all but the last item, add a dividing line
	            if (i + 1 < sectionData.length) {
	                strHtml += "<img src=\"" + lineImage + "\" style=\"width:508px;height:2px;margin-top:10px;margin-bottom:10px;\">";
	            }
	        } else {
	            DEBUG && console.error("No such section '%s'", data.SectionID);
	        }
	    }

	    // Add the current section (page) data, as it won't be present in the
        // section data array.
	    if (objCurrentSection != null) {
	        strHtml += "<img src=\"" + lineimage + "\" style=\"width:508px;height:2px;margin-top:10px;margin-bottom:10px;\">";

            // Get the data values from the DOM
	        var data = this.GetDomSection(objCurrentSection.id).Save();
	        strHtml += documentSchema.Sections[data.SectionID].ToHtml(data);
	    }

	    return strHtml;
	}

	this.GetSessionSummaryText = function() {
		var strText = documentSchema.DocumentInfo.ToText();
		
		for( var i = 0; i < sectionData.length; i ++ ) { 
			var data = sectionData[ i ];
			strText += documentSchema.Sections[ data.SectionID ].ToText( data );
		}
		
		if ( objCurrentSection != null ) {
		    var data = this.GetDomSection(objCurrentSection.id).Save();
		    strText += documentSchema.Sections[data.SectionID].ToText(data);
		}
		
		return strText;
    }

    //
    // Get the answer state for the first 'n' sections. 
    //
    this.GetStateForSteps = function (sectionCount) {
        var states = new Array();
        for (var i = 0; i < sectionCount; i++) {
            if (i < sectionData.length) {
                states[i] = sectionData[i].ToState();
            } else if (objCurrentSection != null) {
                states[i] = this.GetDomSection(objCurrentSection.id).Save().ToState();
            }
            else {
                DEBUG && console.warn("Invalid section index");
            }
        }
        return { "states" : states };
    }

	this.GetSessionSummaryXml = function() {
		var strXml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
                "<ScriptedFaqSession " +
                "xmlns=\"http://www.answerpath.com/answerpath/schemas/AnswerPathSession\" " +
                "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
                "xsi:schemaLocation=\"http://www.answerpath.com/answerpath/schemas/AnswerPathSession http://www.answerpath.cm/answerpath/schemas/AnswerPathSession.xsd\">";
		strXml += documentSchema.ToXml();
		strXml += "<Data>";
		for( var i = 0; i < sectionData.length; i ++ ) { 
			strXml += sectionData[ i ].ToXml();
		}


        if (objCurrentSection != null) {
            strXml += this.GetDomSection(objCurrentSection.id).Save().ToXml();
		}
		
		strXml += "</Data></ScriptedFaqSession>";
		return strXml;		
	}

	this.SendSessionXmlHttpPost = function(sUrl, sTarget) {
		var form = document.createElement("form");
		document.body.appendChild(form);
		form.name = "form1";
		form.id = "form1";
		form.innerHTML = "<input name='xml' id='xml' type='hidden'/>";
		var input = document.getElementById('xml');
		form.method = "POST";
		form.action = sUrl;	
		form.target = sTarget;	
		input.value = this.GetSessionSummaryXml();			
		form.submit();
		document.body.removeChild(form);
	}
}

function XmlEncode(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}





///////////////////////////////////////////////////////////////////////
//
//  Misc code
//


function EndRequest() {
    // Hide the breadcrumbs and expand the right container
    document.getElementById("leftContainer").style.display = "none";
    document.getElementById("rightContainer").style.width = "95%";

    //Save last section
    AddSectionToHistory(sessionManager.GetDomSection(objCurrentSection.id).Save());

    bCurrentSectionAddedToHistory = true;

    if (objCurrentSection != null) {
        objCurrentSection.style.display = "none";
    }

    // Reset the current page (section) - there is no current page.
    objCurrentSection = null;

    var summarySection = document.getElementById("summary");
    if (summarySection != null) {
        summarySection.style.display = "";
    }

    bSummaryDisplayed = true;

    document.getElementById("btnPrevious").style.display = "none";
    document.getElementById("btnNext").style.display = "none";
    document.getElementById("btnEndRequest").style.display = "none";

    document.getElementById("summaryHtml").innerHTML = sessionManager.GetSessionSummaryHtml();
}


function Next() {
    if (objCurrentSection != null) {
        sessionManager.GetDomSection(objCurrentSection.id).ExecLogic();
        scrollTo(0, 0);
    }
    else {
        DEBUG && console.warn("No current section (page)");
    }
}

function Previous() {
    if (iSectionCounter > 0) {
        DEBUG && console.info("Navigation previous");

        // Get the state of the page that is about to be navigated to.
        var previousSectionData = sessionManager.PopSectionData();
        iSectionCounter--;
        OpenSection(previousSectionData.SectionID, previousSectionData);
        scrollTo(0, 0);
    } else {
        DEBUG && console.warn("Can't navigation previous - at the first second already");
    }
}

function Reset() {
    if (confirm('Are you sure you want to start at the beginning again?')) {
        if (urlParams.reset == 1) {
            location.reload();
        }
        else {
            location.assign((location + '').split('?')[0]);
        }
    }
}

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformUrlParamsToJson(prmstr) : {};
}

function transformUrlParamsToJson(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function AddSectionToHistory(objSectionData) {
    sessionManager.AddSectionData(objSectionData);
    iSectionCounter++;
}

// Open a section (page) by id. Iff the sectionData is non-null then
// restore the control state based on the section data, otherwise leave
// the controls in their default state.
//
// strSectionId - the id of the section to open
// sectionData - OPTIONAL section data to restore into the section
//   after it is open. If null/not present then empty UI values will
//   be presented to the user.
function OpenSection(strSectionId, sectionData) {
    var domSection = sessionManager.GetDomSection(strSectionId);

    var bIsRedirectUrlSpecified = domSection.IsRedirectUrlSpecified();
    if (bIsRedirectUrlSpecified) {
        domSection.RedirectPage();
        return;
    }

    // Setup the UI controls/inputs
    domSection.ClearInputs();
    if (sectionData != null) {
        DEBUG && console.info("Input controls restored for section '%s'", strSectionId);
        domSection.Restore(sectionData);
    } else {
        DEBUG && console.info("Input controls cleared for section '%s'", strSectionId);
    }

    // Check if it is the last section (page). If so then the button behaviour
    // changes.
    var bIsLast = domSection.IsLast();
    if (bIsLast == true) {
        objButton = document.getElementById("btnNext");
        //objButton.style.display = "none";
        objButton.disabled = true;
        objButton = document.getElementById("btnEndRequest");
        objButton.style.display = "";
    }
    else {
        objButton = document.getElementById("btnNext");
        //objButton.style.display = "";
        objButton.disabled = false;
        objButton = document.getElementById("btnEndRequest");
        objButton.style.display = "none";
    }

    if (iSectionCounter == 0) {
        objButton = document.getElementById("btnPrevious");
        //objButton.style.display = "none";
        objButton.disabled = true;
    }
    else {
        objButton = document.getElementById("btnPrevious");
        //objButton.style.display = "";
        objButton.disabled = false;
    }

    if (objCurrentSection != null) {
        objCurrentSection.style.display = "none";
    }

    // Set the 'current' page to the div with the id 'SectionXX'
    objCurrentSection = document.getElementById(strSectionId);
    DEBUG && console.debug("Setting the section to " + strSectionId);
    bCurrentSectionAddedToHistory = false;
    if (objCurrentSection != null) {
        objCurrentSection.style.display = "";
    }
    else {
        alert("The next page to display (with ID '" + strSectionId + "') could not be found.\nUnable to continue.");
        return;
    }
    GenerateBreadCrumbs();
}

//
// Replace the set of breadcrum links with a new set based
// on the current state of the sections and current section.
//
// Each breadcrumb link has the full state of it's page and all
// previous pages. This means that we can use the link to restore
// the full state of a browser page.
//
// It is important to note that URL's have a practical maximum
// length of 2k characters.
//
// seealso http://www.boutell.com/newfaq/misc/urllength.html
function GenerateBreadCrumbs() {
    if (showBreadcrumbs) {
        DEBUG && console.log('Generating breadcrumbs');

        var currentSectionData = sessionManager.GetDomSection(objCurrentSection.id).Save();

        // Clear the current set of breadcrums
        var breadcrumbs = $('#breadcrumbs');
        breadcrumbs.empty();

        // If there is a current section (page), then show an extra breadcrumb for the current
        // page. Given the current page is delt with as a special case there is a bit of
        // fudging to make it look like the other breadcrumbs.
        var count;
        var currentSectionName;
        if (objCurrentSection != null ) {
            count = iSectionCounter + 1;
            currentSectionName = sessionManager.GetDomSection(objCurrentSection.id).Save().Name;
        } 
        else {
            count = iSectionCounter;
            currentSectionName = "";
        }

        for (var i = 0; i < count; i++) {
            var state = sessionManager.GetStateForSteps(i + 1);
            var url = $.param.fragment("", state);
            var name = (i < iSectionCounter) ? sessionManager.GetSectionData(i).Name : currentSectionName;
            DEBUG && console.debug('Breadcrumb: ' + name + ', length: ' + url.length + ', url: ' + url );
            DEBUG && console.debug(state);
            AddBreadcrumbLink(url, name, 'JumpToSection(' + i + '); return false;');
        }
    }
}

// Attempt to restore the FAQ state from a URL fragment.
//
// returns: true if successful.
//
function RestoreFromBreadcrumb(fragmentState) {
    DEBUG && console.debug(fragmentState);
    if (fragmentState != null &&
        fragmentState.states != null &&
        fragmentState.states.length > 1) {

        DEBUG && console.dir(fragmentState);

        // Add 'n -1' sections to the section data stack. 
        var lastSectionData;
        for (var sectionIndex = 0; sectionIndex < fragmentState.states.length; sectionIndex++) {
            var sd = fragmentState.states[sectionIndex].sd;
            if (sd != null && sd.id != null) {
                // Get the section by 'id' from the session manager;
                var domSection = sessionManager.GetDomSection(sd.id);
                if (domSection != null) {
                    var sectionData = domSection.Save();
                    DEBUG && console.debug("Restoring section '%s'", sd.id);

                    // Traverse the serialised data structure and populate the SectionData
                    var sectionId = sd.id;

                    if (sd.g != null) {
                        for (var responseGroupIndex = 0; sd.g != null && responseGroupIndex < sd.g.length; responseGroupIndex++) {
                            var responseGroup = sd.g[responseGroupIndex].rg;
                            if (responseGroup.r != null) {
                                for (var responseIndex = 0; responseIndex < responseGroup.r.length; responseIndex++) {
                                    var response = responseGroup.r[responseIndex];
                                    if (response.t == 't') {
                                        var responseData = sectionData.GetResponseGroup(responseGroup.id).GetResponse(response.id);
                                        responseData.Value = response.v;
                                    } else if (response.t == 'o') {
                                        var responseData = sectionData.GetResponseGroup(responseGroup.id).GetResponse(response.id);
                                        responseData.Selected = response.v;
                                    } else {
                                        DEBUG && console.error("Unexpected response type '%s'", response.t);
                                    }
                                }
                            }
                        }
                    }

                    // Apply the data to the document controls
                    domSection.Restore(sectionData);
                    if ((sectionIndex + 1) == fragmentState.states.length) {
                        lastSectionData = sectionData;
                    } else {
                        ++iSectionCounter;
                        sessionManager.AddSectionData(sectionData);
                    }
                }
                else {
                    DEBUG && console.warn("Can't find section '%s'", sd.id);
                    return false;
                }
            }
            else {
                DEBUG && console.warn("Section document is invalid");
                return false;
            }
        }

        //  Use the last section to set the current page.
        objCurrentSession = sessionManager.GetDomSection(lastSectionData.SectionID);
        OpenSection(lastSectionData.SectionID, lastSectionData);

        return true;
    } else {
        DEBUG && console.info("No FAQ state information to restore");
    }
    return false;
}


// Append a single breadcrumb link to the page.
function AddBreadcrumbLink(href, name, jscode) {
    $('#breadcrumbs').append('<a class="breadcrumblink" href="' + href + '" onclick="' + jscode + '" >' + name + '</a><br>');
}

// Nagigate to a page by numeric index of the number of pages
// in the history.  It is equivalent to a function like:
//
//    NavigateBack( iSectionCounter - index);
//
// see also iSectionCounter
function JumpToSection(iIndex) {
    if (iIndex >= iSectionCounter) {
        return;
    }

    var data = sessionManager.GetSectionData(iIndex);
    for (var i = iSectionCounter; i > iIndex; i--) {
        sessionManager.PopSectionData();
    }

    iSectionCounter = iIndex;
    OpenSection(data.SectionID, data);
}


//
// jQuery selectors must have dots ('.') and colon (':') escaped otherwise
// expressions like the following won't work:
//    $('#mybox.3')
// see 
//   http://stackoverflow.com/questions/6386920/select-elements-with-periods-in-id-using-jquery
//   http://docs.jquery.com/Frequently_Asked_Questions#How_do_I_select_an_element_by_an_ID_that_has_characters_used_in_CSS_notation.3F
function MakeIdSelector(id) {
    return '#' + id.replace(/(:|\.)/g, '\\$1');
}

//
//  TODO: Move all this 'stuff' out of the global namespace. Abstract this file into
//  TODO: an object
//


//
// Initialise the document information 
//
// The session manager is used along with 'iSectionCounter' and 'objCurrentSection'
//
var sessionManager = new SessionManager();


/**
* The current question section DIV in HTML. This will be null if
* there isn't a current page (which could be that we are showing the summary.
*
* The assumption made by the code is that there is a javascript variable
* of type 'Section' with the same id as the id of the DIV.
*
* TODO: Look to remove the binding through have the sections being defined
* in the global namespace, and get the code to query the SessionManger for
* a section with the given name (because the Sessionmanager should have the
* section).
*
* see SessionManager.GetDomSession(id)
*/
var objCurrentSection = null;

/**
* The index of the current section
*/
var iSectionCounter = 0;

