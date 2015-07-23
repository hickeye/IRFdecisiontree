
var urlParams = getSearchParameters();
        
var strFirstSectionId = "Section3";
    

var showBreadcrumbs = false;


var smallQuestionImage = "IRF Decision Tree_folder/images/smallQ.jpg";
var smallAnswerImage = "IRF Decision Tree_folder/images/smallA.jpg";
var smallHyperlinkImage = "IRF Decision Tree_folder/images/smallHyperlink.jpg";
var smallInformationImage = "IRF Decision Tree_folder/images/smallI.jpg";
var lineImage = "IRF Decision Tree_folder/images/line.jpg";


/*
 * This is called to start things off
 */
$(document).ready( function () {
  sessionManager.SetDocumentInfo(new DocumentInfo (
    "IRF Decision Tree",
    ""));

     DEBUG && console.info("AnswerPath - (c) Hindin Solutions 2014");

     // Set the no escape string so that the URL's are slightly human readable.
     // Without this the square brackets are escaped and it is need to impossible 
     // to read and the URL's are longer.
     $.param.fragment.noEscape("/,[]");

     if(urlParams.start != null && urlParams.start.length > 0)
     {
         var domSection = sessionManager.GetDomSection(urlParams.start);
         if(domSection != null)
         {
             strFirstSectionId = urlParams.start;
         }
     }

     // Display the url fragment parameters
     var parameters = $.deparam.fragment();          
     if (!RestoreFromBreadcrumb(parameters)) {
       // Open the first section with no pre-exisiting state
       OpenSection(strFirstSectionId)
     }
});

	
	
function ___Section1() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton1").checked = false;
    document.getElementById("RadioButton2").checked = false;
    document.getElementById("RadioButton3").checked = false;
    document.getElementById("RadioButton4").checked = false;
    document.getElementById("RadioButton6").checked = false;
    document.getElementById("RadioButton45").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section1", "Page1", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup2" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton1", 
        $(MakeIdSelector('RadioButton1')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton2", 
        $(MakeIdSelector('RadioButton2')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton3", 
        $(MakeIdSelector('RadioButton3')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton4", 
        $(MakeIdSelector('RadioButton4')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton6", 
        $(MakeIdSelector('RadioButton6')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton45", 
        $(MakeIdSelector('RadioButton45')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section1" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page1" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup2";
					    
    {
       var radioId = "RadioButton1";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton2";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton3";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton4";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton6";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton45";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton1").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section5");
      
      }
				  
      else if ((
        document.getElementById("RadioButton2").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section6");
      
      }
				  
      else if ((
        document.getElementById("RadioButton4").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section7");
      
      }
				  
      else if ((
        document.getElementById("RadioButton6").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section8");
      
      }
				  
      else if ((
        document.getElementById("RadioButton3").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section18");
      
      }
				  
      else if ((
        document.getElementById("RadioButton45").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section1").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section1 = new ___Section1();
sessionManager.AddDomSection( 'Section1', Section1 );

{
  var sectionSection1 = new Section( "Section1" );
  var textBlockSection1 = null;
  var hyperlinkSection1 = null;
  var questionSection1 = null;
  var responseGroupSection1 = null;
  var responseOptionSection1 = null;
  var responseTextSection1 = null;
  var responseDropDownSection1 = null;
  		
  questionSection1 = new Question();
  questionSection1.Text = "Select a diagnostic group";
  questionSection1.Help = "";
							
			  
  responseGroupSection1 = new ResponseGroup( "AnswerGroup2" );
  responseGroupSection1.Field = "";
				  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton1", "Central Nervous System (CNS)" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton2", "Orthopedic" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton3", "Burn" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton4", "Medically Intense" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton6", "Spinal Cord (With partial or complete loss of function)" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  responseGroupSection1.SelectMinimum = "0";
  responseGroupSection1.SelectMaximum = "1";
  responseOptionSection1 = new ResponseOption( "RadioButton45", "None of the Above" );
  responseGroupSection1.Responses.push( responseOptionSection1 );
						  
  questionSection1.ResponseGroups.push( responseGroupSection1 );
			  
  sectionSection1.Content.push( questionSection1 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection1 );
}
	
	
function ___Section3() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton7").checked = false;
    document.getElementById("RadioButton8").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section3", "Page0", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup6" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton7", 
        $(MakeIdSelector('RadioButton7')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton8", 
        $(MakeIdSelector('RadioButton8')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section3" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page0" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup6";
					    
    {
       var radioId = "RadioButton7";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton8";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton7").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section3").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section1");
      
      }
				  
      else if ((
        document.getElementById("RadioButton8").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section3").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section15");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section3 = new ___Section3();
sessionManager.AddDomSection( 'Section3', Section3 );

{
  var sectionSection3 = new Section( "Section3" );
  var textBlockSection3 = null;
  var hyperlinkSection3 = null;
  var questionSection3 = null;
  var responseGroupSection3 = null;
  var responseOptionSection3 = null;
  var responseTextSection3 = null;
  var responseDropDownSection3 = null;
  		
  questionSection3 = new Question();
  questionSection3.Text = "Is diagnoses within the past 30 days?";
  questionSection3.Help = "";
							
			  
  responseGroupSection3 = new ResponseGroup( "AnswerGroup6" );
  responseGroupSection3.Field = "";
				  
  responseGroupSection3.SelectMinimum = "0";
  responseGroupSection3.SelectMaximum = "1";
  responseOptionSection3 = new ResponseOption( "RadioButton7", "Yes" );
  responseGroupSection3.Responses.push( responseOptionSection3 );
						  
  responseGroupSection3.SelectMinimum = "0";
  responseGroupSection3.SelectMaximum = "1";
  responseOptionSection3 = new ResponseOption( "RadioButton8", "No" );
  responseGroupSection3.Responses.push( responseOptionSection3 );
						  
  questionSection3.ResponseGroups.push( responseGroupSection3 );
			  
  sectionSection3.Content.push( questionSection3 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection3 );
}
	
	
function ___Section5() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton9").checked = false;
    document.getElementById("RadioButton10").checked = false;
    document.getElementById("RadioButton11").checked = false;
    document.getElementById("RadioButton12").checked = false;
    document.getElementById("RadioButton13").checked = false;
    document.getElementById("RadioButton14").checked = false;
    document.getElementById("RadioButton37").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section5", "Page4", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup7" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton9", 
        $(MakeIdSelector('RadioButton9')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton10", 
        $(MakeIdSelector('RadioButton10')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton11", 
        $(MakeIdSelector('RadioButton11')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton12", 
        $(MakeIdSelector('RadioButton12')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton13", 
        $(MakeIdSelector('RadioButton13')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton14", 
        $(MakeIdSelector('RadioButton14')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton37", 
        $(MakeIdSelector('RadioButton37')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section5" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page4" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup7";
					    
    {
       var radioId = "RadioButton9";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton10";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton11";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton12";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton13";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton14";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton37";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton37").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section5").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else {
	      
          AddSectionToHistory(sessionManager.GetDomSection("Section5").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
			
   }
					
	
}
			
var Section5 = new ___Section5();
sessionManager.AddDomSection( 'Section5', Section5 );

{
  var sectionSection5 = new Section( "Section5" );
  var textBlockSection5 = null;
  var hyperlinkSection5 = null;
  var questionSection5 = null;
  var responseGroupSection5 = null;
  var responseOptionSection5 = null;
  var responseTextSection5 = null;
  var responseDropDownSection5 = null;
  		
  questionSection5 = new Question();
  questionSection5.Text = "Central Nervous System (CNS)";
  questionSection5.Help = "";
							
			  
  responseGroupSection5 = new ResponseGroup( "AnswerGroup7" );
  responseGroupSection5.Field = "";
				  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton9", "<FONT size=2 face=Calibri>Moderate to severe anoxic or traumatic brain injury (TBI)</FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton10", "<FONT size=2 face=Calibri>Status Post Craniotomy</FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton11", "<P style=\"MARGIN: 0in 0in 8pt\" class=MsoNormal><FONT face=Calibri><FONT size=2><SPAN style=\"mso-ansi-language: EN; mso-bidi-font-weight: bold\" lang=EN>Cerebrovascular Accident</SPAN><SPAN style=\"mso-ansi-language: EN\" lang=EN> (<SPAN style=\"mso-bidi-font-weight: bold\">CVA</SPAN>)</SPAN></FONT></FONT><?xml:namespace prefix = o ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></P>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton12", "<FONT size=2 face=Calibri>Intracranial or Subdural Hemorrhage</FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton13", "<FONT size=2 face=Calibri>Meningitis or Encephelitis</FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton14", "<FONT size=2 face=Calibri><P>Guillain-Barré</P></FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  responseGroupSection5.SelectMinimum = "0";
  responseGroupSection5.SelectMaximum = "1";
  responseOptionSection5 = new ResponseOption( "RadioButton37", "<FONT size=2 face=Calibri>None of the Above</FONT>" );
  responseGroupSection5.Responses.push( responseOptionSection5 );
						  
  questionSection5.ResponseGroups.push( responseGroupSection5 );
			  
  sectionSection5.Content.push( questionSection5 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection5 );
}
	
	
function ___Section6() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton15").checked = false;
    document.getElementById("RadioButton16").checked = false;
    document.getElementById("RadioButton17").checked = false;
    document.getElementById("RadioButton18").checked = false;
    document.getElementById("RadioButton38").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section6", "Page5", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup8" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton15", 
        $(MakeIdSelector('RadioButton15')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton16", 
        $(MakeIdSelector('RadioButton16')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton17", 
        $(MakeIdSelector('RadioButton17')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton18", 
        $(MakeIdSelector('RadioButton18')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton38", 
        $(MakeIdSelector('RadioButton38')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section6" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page5" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup8";
					    
    {
       var radioId = "RadioButton15";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton16";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton17";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton18";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton38";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton38").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section6").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else if ((
        document.getElementById("RadioButton15").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section6").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else if ((
        document.getElementById("RadioButton16").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section6").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else if ((
        document.getElementById("RadioButton17").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section6").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else if ((
        document.getElementById("RadioButton18").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section6").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section6 = new ___Section6();
sessionManager.AddDomSection( 'Section6', Section6 );

{
  var sectionSection6 = new Section( "Section6" );
  var textBlockSection6 = null;
  var hyperlinkSection6 = null;
  var questionSection6 = null;
  var responseGroupSection6 = null;
  var responseOptionSection6 = null;
  var responseTextSection6 = null;
  var responseDropDownSection6 = null;
  		
  questionSection6 = new Question();
  questionSection6.Text = "Orthopedic";
  questionSection6.Help = "";
							
			  
  responseGroupSection6 = new ResponseGroup( "AnswerGroup8" );
  responseGroupSection6.Field = "";
				  
  responseGroupSection6.SelectMinimum = "0";
  responseGroupSection6.SelectMaximum = "1";
  responseOptionSection6 = new ResponseOption( "RadioButton15", "Hip Fracture w/ Active Comorbid Medical Condition that requires daily monitoring but must be at low risk for medical instability." );
  responseGroupSection6.Responses.push( responseOptionSection6 );
						  
  responseGroupSection6.SelectMinimum = "0";
  responseGroupSection6.SelectMaximum = "1";
  responseOptionSection6 = new ResponseOption( "RadioButton16", "Arthritis failing trial of outpatient rehab - requires 24hr rehab nursing care - patient had course of therapy at outpatient rehabilitation facility w/out improvement. Does not include home w/ home health." );
  responseGroupSection6.Responses.push( responseOptionSection6 );
						  
  responseGroupSection6.SelectMinimum = "0";
  responseGroupSection6.SelectMaximum = "1";
  responseOptionSection6 = new ResponseOption( "RadioButton17", "Bilateral joint replacements w/ Active Comorbid Medical Condition that requires daily monitoring but must be at low risk for medical instability." );
  responseGroupSection6.Responses.push( responseOptionSection6 );
						  
  responseGroupSection6.SelectMinimum = "0";
  responseGroupSection6.SelectMaximum = "1";
  responseOptionSection6 = new ResponseOption( "RadioButton18", "Amputation (AKA, BKA, etc.) w/ Active Comorbid Medical Condition that requires daily monitoring but must be at low risk for medical instability." );
  responseGroupSection6.Responses.push( responseOptionSection6 );
						  
  responseGroupSection6.SelectMinimum = "0";
  responseGroupSection6.SelectMaximum = "1";
  responseOptionSection6 = new ResponseOption( "RadioButton38", "None of the Above" );
  responseGroupSection6.Responses.push( responseOptionSection6 );
						  
  questionSection6.ResponseGroups.push( responseGroupSection6 );
			  
  sectionSection6.Content.push( questionSection6 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection6 );
}
	
	
function ___Section7() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton19").checked = false;
    document.getElementById("RadioButton20").checked = false;
    document.getElementById("RadioButton21").checked = false;
    document.getElementById("RadioButton22").checked = false;
    document.getElementById("RadioButton43").checked = false;
    document.getElementById("RadioButton44").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section7", "Page6", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup9" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton19", 
        $(MakeIdSelector('RadioButton19')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton20", 
        $(MakeIdSelector('RadioButton20')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton21", 
        $(MakeIdSelector('RadioButton21')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton22", 
        $(MakeIdSelector('RadioButton22')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton43", 
        $(MakeIdSelector('RadioButton43')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton44", 
        $(MakeIdSelector('RadioButton44')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section7" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page6" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup9";
					    
    {
       var radioId = "RadioButton19";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton20";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton21";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton22";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton43";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton44";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton44").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section7").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else if ((
        document.getElementById("RadioButton43").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section7").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else {
	      
          AddSectionToHistory(sessionManager.GetDomSection("Section7").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
			
   }
					
	
}
			
var Section7 = new ___Section7();
sessionManager.AddDomSection( 'Section7', Section7 );

{
  var sectionSection7 = new Section( "Section7" );
  var textBlockSection7 = null;
  var hyperlinkSection7 = null;
  var questionSection7 = null;
  var responseGroupSection7 = null;
  var responseOptionSection7 = null;
  var responseTextSection7 = null;
  var responseDropDownSection7 = null;
  		
  questionSection7 = new Question();
  questionSection7.Text = "Medically Intense";
  questionSection7.Help = "";
							
			  
  responseGroupSection7 = new ResponseGroup( "AnswerGroup9" );
  responseGroupSection7.Field = "";
				  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton19", "Progressive CNS disease-failed outpatient - requires 24hr rehab nursing care - patient had course of therapy at outpatient rehabilitation facility w/out improvement. Does not include home w/ home health." );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton20", "Cardiac disease or surgery w/ Active Comorbid Medical Condition that requires daily monitoring but must be at low risk for medical instability." );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton21", "Multiple trauma" );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton22", "Malignancy that is not endstage." );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton43", "Systemic vasculitities-failed outpatient - requires 24hr rehab nursing care - patient had course of therapy at outpatient rehabilitation facility w/out improvement. Does not include home w/ home health." );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  responseGroupSection7.SelectMinimum = "0";
  responseGroupSection7.SelectMaximum = "1";
  responseOptionSection7 = new ResponseOption( "RadioButton44", "None of the Above" );
  responseGroupSection7.Responses.push( responseOptionSection7 );
						  
  questionSection7.ResponseGroups.push( responseGroupSection7 );
			  
  sectionSection7.Content.push( questionSection7 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection7 );
}
	
	
function ___Section8() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton23").checked = false;
    document.getElementById("RadioButton24").checked = false;
    document.getElementById("RadioButton25").checked = false;
    document.getElementById("RadioButton26").checked = false;
    document.getElementById("RadioButton46").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section8", "Page7", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup10" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton23", 
        $(MakeIdSelector('RadioButton23')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton24", 
        $(MakeIdSelector('RadioButton24')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton25", 
        $(MakeIdSelector('RadioButton25')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton26", 
        $(MakeIdSelector('RadioButton26')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton46", 
        $(MakeIdSelector('RadioButton46')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section8" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page7" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup10";
					    
    {
       var radioId = "RadioButton23";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton24";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton25";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton26";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton46";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton46").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section8").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      
          AddSectionToHistory(sessionManager.GetDomSection("Section8").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
			
   }
					
	
}
			
var Section8 = new ___Section8();
sessionManager.AddDomSection( 'Section8', Section8 );

{
  var sectionSection8 = new Section( "Section8" );
  var textBlockSection8 = null;
  var hyperlinkSection8 = null;
  var questionSection8 = null;
  var responseGroupSection8 = null;
  var responseOptionSection8 = null;
  var responseTextSection8 = null;
  var responseDropDownSection8 = null;
  		
  questionSection8 = new Question();
  questionSection8.Text = "Spinal Cord - With partial or complete loss of function";
  questionSection8.Help = "";
							
			  
  responseGroupSection8 = new ResponseGroup( "AnswerGroup10" );
  responseGroupSection8.Field = "";
				  
  responseGroupSection8.SelectMinimum = "0";
  responseGroupSection8.SelectMaximum = "1";
  responseOptionSection8 = new ResponseOption( "RadioButton23", "Traumatic Injury" );
  responseGroupSection8.Responses.push( responseOptionSection8 );
						  
  responseGroupSection8.SelectMinimum = "0";
  responseGroupSection8.SelectMaximum = "1";
  responseOptionSection8 = new ResponseOption( "RadioButton24", "Infection" );
  responseGroupSection8.Responses.push( responseOptionSection8 );
						  
  responseGroupSection8.SelectMinimum = "0";
  responseGroupSection8.SelectMaximum = "1";
  responseOptionSection8 = new ResponseOption( "RadioButton25", "Neoplasm" );
  responseGroupSection8.Responses.push( responseOptionSection8 );
						  
  responseGroupSection8.SelectMinimum = "0";
  responseGroupSection8.SelectMaximum = "1";
  responseOptionSection8 = new ResponseOption( "RadioButton26", "Spinal Surgery (e.g., spinal fusion, insertion of rods, compression fx, etc.) with new neurologic deficits." );
  responseGroupSection8.Responses.push( responseOptionSection8 );
						  
  responseGroupSection8.SelectMinimum = "0";
  responseGroupSection8.SelectMaximum = "1";
  responseOptionSection8 = new ResponseOption( "RadioButton46", "None of the Above" );
  responseGroupSection8.Responses.push( responseOptionSection8 );
						  
  questionSection8.ResponseGroups.push( responseGroupSection8 );
			  
  sectionSection8.Content.push( questionSection8 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection8 );
}
	
	
function ___Section9() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton27").checked = false;
    document.getElementById("RadioButton28").checked = false;
    document.getElementById("RadioButton29").checked = false;
    document.getElementById("RadioButton30").checked = false;
    document.getElementById("RadioButton31").checked = false;
    document.getElementById("RadioButton32").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section9", "Page8", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup11" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton27", 
        $(MakeIdSelector('RadioButton27')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton28", 
        $(MakeIdSelector('RadioButton28')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton29", 
        $(MakeIdSelector('RadioButton29')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton30", 
        $(MakeIdSelector('RadioButton30')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton31", 
        $(MakeIdSelector('RadioButton31')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton32", 
        $(MakeIdSelector('RadioButton32')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section9" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page8" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup11";
					    
    {
       var radioId = "RadioButton27";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton28";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton29";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton30";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton31";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton32";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton31").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else if ((
        document.getElementById("RadioButton32").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else if ((
        document.getElementById("RadioButton27").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section10");
      
      }
				  
      else if ((
        document.getElementById("RadioButton28").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section10");
      
      }
				  
      else if ((
        document.getElementById("RadioButton29").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section10");
      
      }
				  
      else if ((
        document.getElementById("RadioButton30").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section9").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section10");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section9 = new ___Section9();
sessionManager.AddDomSection( 'Section9', Section9 );

{
  var sectionSection9 = new Section( "Section9" );
  var textBlockSection9 = null;
  var hyperlinkSection9 = null;
  var questionSection9 = null;
  var responseGroupSection9 = null;
  var responseOptionSection9 = null;
  var responseTextSection9 = null;
  var responseDropDownSection9 = null;
  		
  questionSection9 = new Question();
  questionSection9.Text = "Prior Level of Function";
  questionSection9.Help = "";
							
			  
  responseGroupSection9 = new ResponseGroup( "AnswerGroup11" );
  responseGroupSection9.Field = "";
				  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton27", "Independent in the community - working, driving and/or active in the community." );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton28", "Independent in the home - able to complete ADLs and IADLs w/out assistance." );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton29", "Home w/ caregiver assistance - requires some assistance w/ ADLs or IADLs. Has willing and able caregiver." );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton30", "Assissted Living Facility (ALF)/Personal Care Home (PCH)" );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton31", "Long-term Care (LTC)/Custodial - dependent prior level of function." );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  responseGroupSection9.SelectMinimum = "0";
  responseGroupSection9.SelectMaximum = "1";
  responseOptionSection9 = new ResponseOption( "RadioButton32", "Cognitive impairment with inability to follow commands and learn new information." );
  responseGroupSection9.Responses.push( responseOptionSection9 );
						  
  questionSection9.ResponseGroups.push( responseGroupSection9 );
			  
  sectionSection9.Content.push( questionSection9 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection9 );
}
	
	
function ___Section10() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("AnswerGroup12.CheckboxInput1").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput2").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput3").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput4").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput5").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput6").checked = false;
    document.getElementById("AnswerGroup12.CheckboxInput7").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section10", "Page9", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup12" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput1", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput1')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput2", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput2')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput3", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput3')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput4", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput4')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput5", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput5')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput6", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput6')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup12.CheckboxInput7", 
        $(MakeIdSelector('AnswerGroup12.CheckboxInput7')).is(':checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section10" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page9" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup12";
					    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput1";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput2";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput3";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput4";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput5";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput6";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup12.CheckboxInput7";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("AnswerGroup12.CheckboxInput1").checked==true) && (
        document.getElementById("AnswerGroup12.CheckboxInput2").checked==true) && (
        document.getElementById("AnswerGroup12.CheckboxInput4").checked==true) && (
        document.getElementById("AnswerGroup12.CheckboxInput3").checked==true) && (
        document.getElementById("AnswerGroup12.CheckboxInput5").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section11");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput6").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput1").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput2").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput3").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput5").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput4").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup12.CheckboxInput7").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
				  
      else {
	      
          AddSectionToHistory(sessionManager.GetDomSection("Section10").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section19");
      
      }
			
   }
					
	
}
			
var Section10 = new ___Section10();
sessionManager.AddDomSection( 'Section10', Section10 );

{
  var sectionSection10 = new Section( "Section10" );
  var textBlockSection10 = null;
  var hyperlinkSection10 = null;
  var questionSection10 = null;
  var responseGroupSection10 = null;
  var responseOptionSection10 = null;
  var responseTextSection10 = null;
  var responseDropDownSection10 = null;
  		
  questionSection10 = new Question();
  questionSection10.Text = "Current Level of Function (Check All That Apply)";
  questionSection10.Help = "";
							
			  
  responseGroupSection10 = new ResponseGroup( "AnswerGroup12" );
  responseGroupSection10.Field = "";
				  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput1", "Able to follow directions and willing to participate in rehab - must be able to follow directions of at least 2 step commands." );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput2", "Able to participate in and needs 15 hours of therapy per week - if notes state poor endurance, fatigues easily, requires multiple rest breaks, gets shortness of breath w/ activity." );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput3", "Requires 2 or more therapy modalities including PT." );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput4", "<P>At minimal assistance level or requiring greater assistance - <FONT face=\"Times New Roman\">patient can performs 75% or more of tasks. </P></FONT>" );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput5", "LiveSafe total score average is between 25 and 50." );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput6", "Patient has restricted weight bearing status." );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  responseGroupSection10.SelectMinimum = "0";
  responseGroupSection10.SelectMaximum = "unbounded";
  responseOptionSection10 = new ResponseOption( "AnswerGroup12.CheckboxInput7", "N/A" );
  responseGroupSection10.Responses.push( responseOptionSection10 );
						  
  questionSection10.ResponseGroups.push( responseGroupSection10 );
			  
  sectionSection10.Content.push( questionSection10 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection10 );
}
	
	
function ___Section11() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton33").checked = false;
    document.getElementById("RadioButton34").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section11", "Page10", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup13" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton33", 
        $(MakeIdSelector('RadioButton33')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton34", 
        $(MakeIdSelector('RadioButton34')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section11" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page10" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup13";
					    
    {
       var radioId = "RadioButton33";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton34";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton33").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section11").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section12");
      
      }
				  
      else if ((
        document.getElementById("RadioButton34").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section11").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section12");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section11 = new ___Section11();
sessionManager.AddDomSection( 'Section11', Section11 );

{
  var sectionSection11 = new Section( "Section11" );
  var textBlockSection11 = null;
  var hyperlinkSection11 = null;
  var questionSection11 = null;
  var responseGroupSection11 = null;
  var responseOptionSection11 = null;
  var responseTextSection11 = null;
  var responseDropDownSection11 = null;
  		
  questionSection11 = new Question();
  questionSection11.Text = "Medical Complexity - Failed management at a lower level of care or repeated readmissions";
  questionSection11.Help = "";
							
			  
  responseGroupSection11 = new ResponseGroup( "AnswerGroup13" );
  responseGroupSection11.Field = "";
				  
  responseGroupSection11.SelectMinimum = "0";
  responseGroupSection11.SelectMaximum = "1";
  responseOptionSection11 = new ResponseOption( "RadioButton33", "Yes" );
  responseGroupSection11.Responses.push( responseOptionSection11 );
						  
  responseGroupSection11.SelectMinimum = "0";
  responseGroupSection11.SelectMaximum = "1";
  responseOptionSection11 = new ResponseOption( "RadioButton34", "No" );
  responseGroupSection11.Responses.push( responseOptionSection11 );
						  
  questionSection11.ResponseGroups.push( responseGroupSection11 );
			  
  sectionSection11.Content.push( questionSection11 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection11 );
}
	
	
function ___Section12() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton51").checked = false;
    document.getElementById("RadioButton52").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section12", "Page11", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup14" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton51", 
        $(MakeIdSelector('RadioButton51')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton52", 
        $(MakeIdSelector('RadioButton52')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section12" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page11" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup14";
					    
    {
       var radioId = "RadioButton51";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton52";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton51").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section12").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section16");
      
      }
				  
      else if ((
        document.getElementById("RadioButton52").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section12").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section12 = new ___Section12();
sessionManager.AddDomSection( 'Section12', Section12 );

{
  var sectionSection12 = new Section( "Section12" );
  var textBlockSection12 = null;
  var hyperlinkSection12 = null;
  var questionSection12 = null;
  var responseGroupSection12 = null;
  var responseOptionSection12 = null;
  var responseTextSection12 = null;
  var responseDropDownSection12 = null;
  		
  questionSection12 = new Question();
  questionSection12.Text = "Goals of Care: Requires interdisciplinary plan of care supervised by a physiatrist - organized oversight of multiple complex rehab and medical issues.";
  questionSection12.Help = "";
							
			  
  responseGroupSection12 = new ResponseGroup( "AnswerGroup14" );
  responseGroupSection12.Field = "";
				  
  responseGroupSection12.SelectMinimum = "0";
  responseGroupSection12.SelectMaximum = "1";
  responseOptionSection12 = new ResponseOption( "RadioButton51", "Yes" );
  responseGroupSection12.Responses.push( responseOptionSection12 );
						  
  responseGroupSection12.SelectMinimum = "0";
  responseGroupSection12.SelectMaximum = "1";
  responseOptionSection12 = new ResponseOption( "RadioButton52", "No" );
  responseGroupSection12.Responses.push( responseOptionSection12 );
						  
  questionSection12.ResponseGroups.push( responseGroupSection12 );
			  
  sectionSection12.Content.push( questionSection12 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection12 );
}
	
	
function ___Section13() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton58").checked = false;
    document.getElementById("RadioButton59").checked = false;
    document.getElementById("RadioButton60").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section13", "Page12", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup15" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton58", 
        $(MakeIdSelector('RadioButton58')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton59", 
        $(MakeIdSelector('RadioButton59')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton60", 
        $(MakeIdSelector('RadioButton60')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section13" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page12" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup15";
					    
    {
       var radioId = "RadioButton58";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton59";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton60";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton58").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section13").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section21");
      
      }
				  
      else if ((
        document.getElementById("RadioButton59").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section13").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section21");
      
      }
				  
      else if ((
        document.getElementById("RadioButton60").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section13").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section13 = new ___Section13();
sessionManager.AddDomSection( 'Section13', Section13 );

{
  var sectionSection13 = new Section( "Section13" );
  var textBlockSection13 = null;
  var hyperlinkSection13 = null;
  var questionSection13 = null;
  var responseGroupSection13 = null;
  var responseOptionSection13 = null;
  var responseTextSection13 = null;
  var responseDropDownSection13 = null;
  		
  questionSection13 = new Question();
  questionSection13.Text = "Is the appropriate level of care available?";
  questionSection13.Help = "";
							
			  
  responseGroupSection13 = new ResponseGroup( "AnswerGroup15" );
  responseGroupSection13.Field = "";
				  
  responseGroupSection13.SelectMinimum = "0";
  responseGroupSection13.SelectMaximum = "1";
  responseOptionSection13 = new ResponseOption( "RadioButton58", "<P style=\"MARGIN: 0in 0in 8pt\" class=MsoNormal><FONT face=Calibri>No lower level of care available in proximity offering necessary services.<?xml:namespace prefix = o ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></FONT></P>" );
  responseGroupSection13.Responses.push( responseOptionSection13 );
						  
  responseGroupSection13.SelectMinimum = "0";
  responseGroupSection13.SelectMaximum = "1";
  responseOptionSection13 = new ResponseOption( "RadioButton59", "<P style=\"MARGIN: 0in 0in 8pt\" class=MsoNormal><FONT face=Calibri>No lower level of care in proximity able to provide appropriate care w/ available capacity.<?xml:namespace prefix = o ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></FONT></P>" );
  responseGroupSection13.Responses.push( responseOptionSection13 );
						  
  responseGroupSection13.SelectMinimum = "0";
  responseGroupSection13.SelectMaximum = "1";
  responseOptionSection13 = new ResponseOption( "RadioButton60", "Yes - lower level of care available in proximity offering appropriate services with access." );
  responseGroupSection13.Responses.push( responseOptionSection13 );
						  
  questionSection13.ResponseGroups.push( responseGroupSection13 );
			  
  sectionSection13.Content.push( questionSection13 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection13 );
}
	
	
function ___Section15() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton35").checked = false;
    document.getElementById("RadioButton36").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section15", "Page 2.5", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup16" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton35", 
        $(MakeIdSelector('RadioButton35')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton36", 
        $(MakeIdSelector('RadioButton36')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section15" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page 2.5" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup16";
					    
    {
       var radioId = "RadioButton35";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton36";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton36").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section15").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else if ((
        document.getElementById("RadioButton35").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section15").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section1");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section15 = new ___Section15();
sessionManager.AddDomSection( 'Section15', Section15 );

{
  var sectionSection15 = new Section( "Section15" );
  var textBlockSection15 = null;
  var hyperlinkSection15 = null;
  var questionSection15 = null;
  var responseGroupSection15 = null;
  var responseOptionSection15 = null;
  var responseTextSection15 = null;
  var responseDropDownSection15 = null;
  		
  questionSection15 = new Question();
  questionSection15.Text = "Is this acute exacerbation of a chronic neurologic or muskoskeletal condition?";
  questionSection15.Help = "";
							
			  
  responseGroupSection15 = new ResponseGroup( "AnswerGroup16" );
  responseGroupSection15.Field = "";
				  
  responseGroupSection15.SelectMinimum = "0";
  responseGroupSection15.SelectMaximum = "1";
  responseOptionSection15 = new ResponseOption( "RadioButton35", "Yes" );
  responseGroupSection15.Responses.push( responseOptionSection15 );
						  
  responseGroupSection15.SelectMinimum = "0";
  responseGroupSection15.SelectMaximum = "1";
  responseOptionSection15 = new ResponseOption( "RadioButton36", "No" );
  responseGroupSection15.Responses.push( responseOptionSection15 );
						  
  questionSection15.ResponseGroups.push( responseGroupSection15 );
			  
  sectionSection15.Content.push( questionSection15 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection15 );
}
	
	
function ___Section16() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton39").checked = false;
    document.getElementById("RadioButton40").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section16", "Page15", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup17" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton39", 
        $(MakeIdSelector('RadioButton39')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton40", 
        $(MakeIdSelector('RadioButton40')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section16" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page15" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup17";
					    
    {
       var radioId = "RadioButton39";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton40";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton39").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section16").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section17");
      
      }
				  
      else if ((
        document.getElementById("RadioButton40").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section16").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section16 = new ___Section16();
sessionManager.AddDomSection( 'Section16', Section16 );

{
  var sectionSection16 = new Section( "Section16" );
  var textBlockSection16 = null;
  var hyperlinkSection16 = null;
  var questionSection16 = null;
  var responseGroupSection16 = null;
  var responseOptionSection16 = null;
  var responseTextSection16 = null;
  var responseDropDownSection16 = null;
  		
  questionSection16 = new Question();
  questionSection16.Text = "Potential for meaningful functional gains in a reasonable amount of time - has already begun to show functional gains during acute stay.";
  questionSection16.Help = "";
							
			  
  responseGroupSection16 = new ResponseGroup( "AnswerGroup17" );
  responseGroupSection16.Field = "";
				  
  responseGroupSection16.SelectMinimum = "0";
  responseGroupSection16.SelectMaximum = "1";
  responseOptionSection16 = new ResponseOption( "RadioButton39", "Yes" );
  responseGroupSection16.Responses.push( responseOptionSection16 );
						  
  responseGroupSection16.SelectMinimum = "0";
  responseGroupSection16.SelectMaximum = "1";
  responseOptionSection16 = new ResponseOption( "RadioButton40", "No" );
  responseGroupSection16.Responses.push( responseOptionSection16 );
						  
  questionSection16.ResponseGroups.push( responseGroupSection16 );
			  
  sectionSection16.Content.push( questionSection16 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection16 );
}
	
	
function ___Section17() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton41").checked = false;
    document.getElementById("RadioButton42").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section17", "Page16", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup18" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton41", 
        $(MakeIdSelector('RadioButton41')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton42", 
        $(MakeIdSelector('RadioButton42')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section17" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page16" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup18";
					    
    {
       var radioId = "RadioButton41";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton42";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton41").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section17").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section13");
      
      }
				  
      else if ((
        document.getElementById("RadioButton42").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section17").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section13");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section17 = new ___Section17();
sessionManager.AddDomSection( 'Section17', Section17 );

{
  var sectionSection17 = new Section( "Section17" );
  var textBlockSection17 = null;
  var hyperlinkSection17 = null;
  var questionSection17 = null;
  var responseGroupSection17 = null;
  var responseOptionSection17 = null;
  var responseTextSection17 = null;
  var responseDropDownSection17 = null;
  		
  questionSection17 = new Question();
  questionSection17.Text = "Can the patients needs be met in a lower level of care (e.g., SNF, Home with HH)?";
  questionSection17.Help = "";
							
			  
  responseGroupSection17 = new ResponseGroup( "AnswerGroup18" );
  responseGroupSection17.Field = "";
				  
  responseGroupSection17.SelectMinimum = "0";
  responseGroupSection17.SelectMaximum = "1";
  responseOptionSection17 = new ResponseOption( "RadioButton41", "Yes" );
  responseGroupSection17.Responses.push( responseOptionSection17 );
						  
  responseGroupSection17.SelectMinimum = "0";
  responseGroupSection17.SelectMaximum = "1";
  responseOptionSection17 = new ResponseOption( "RadioButton42", "No" );
  responseGroupSection17.Responses.push( responseOptionSection17 );
						  
  questionSection17.ResponseGroups.push( responseGroupSection17 );
			  
  sectionSection17.Content.push( questionSection17 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection17 );
}
	
	
function ___Section18() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("AnswerGroup19.CheckboxInput1").checked = false;
    document.getElementById("AnswerGroup19.CheckboxInput2").checked = false;
    document.getElementById("AnswerGroup19.CheckboxInput3").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section18", "Page17", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup19" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup19.CheckboxInput1", 
        $(MakeIdSelector('AnswerGroup19.CheckboxInput1')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup19.CheckboxInput2", 
        $(MakeIdSelector('AnswerGroup19.CheckboxInput2')).is(':checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "AnswerGroup19.CheckboxInput3", 
        $(MakeIdSelector('AnswerGroup19.CheckboxInput3')).is(':checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section18" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page17" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup19";
					    
    {
       var checkboxId = "AnswerGroup19.CheckboxInput1";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup19.CheckboxInput2";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
    {
       var checkboxId = "AnswerGroup19.CheckboxInput3";
       $(MakeIdSelector(checkboxId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(checkboxId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("AnswerGroup19.CheckboxInput2").checked==true) && (
        document.getElementById("AnswerGroup19.CheckboxInput1").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section18").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section9");
      
      }
				  
      else if ((
        document.getElementById("AnswerGroup19.CheckboxInput3").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section18").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      
          AddSectionToHistory(sessionManager.GetDomSection("Section18").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
			
   }
					
	
}
			
var Section18 = new ___Section18();
sessionManager.AddDomSection( 'Section18', Section18 );

{
  var sectionSection18 = new Section( "Section18" );
  var textBlockSection18 = null;
  var hyperlinkSection18 = null;
  var questionSection18 = null;
  var responseGroupSection18 = null;
  var responseOptionSection18 = null;
  var responseTextSection18 = null;
  var responseDropDownSection18 = null;
  		
  questionSection18 = new Question();
  questionSection18.Text = "Burns (Check Applicable)";
  questionSection18.Help = "";
							
			  
  responseGroupSection18 = new ResponseGroup( "AnswerGroup19" );
  responseGroupSection18.Field = "";
				  
  responseGroupSection18.SelectMinimum = "0";
  responseGroupSection18.SelectMaximum = "unbounded";
  responseOptionSection18 = new ResponseOption( "AnswerGroup19.CheckboxInput1", "Active medical comorbid condition." );
  responseGroupSection18.Responses.push( responseOptionSection18 );
						  
  responseGroupSection18.SelectMinimum = "0";
  responseGroupSection18.SelectMaximum = "unbounded";
  responseOptionSection18 = new ResponseOption( "AnswerGroup19.CheckboxInput2", "Requires specialized therapy services that cannot be delivered as an outpatient." );
  responseGroupSection18.Responses.push( responseOptionSection18 );
						  
  responseGroupSection18.SelectMinimum = "0";
  responseGroupSection18.SelectMaximum = "unbounded";
  responseOptionSection18 = new ResponseOption( "AnswerGroup19.CheckboxInput3", "N/A" );
  responseGroupSection18.Responses.push( responseOptionSection18 );
						  
  questionSection18.ResponseGroups.push( responseGroupSection18 );
			  
  sectionSection18.Content.push( questionSection18 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection18 );
}
	
	
function ___Section19() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return false;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton47").checked = false;
    document.getElementById("RadioButton48").checked = false;
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section19", "Page18", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup20" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton47", 
        $(MakeIdSelector('RadioButton47')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton48", 
        $(MakeIdSelector('RadioButton48')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section19" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page18" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup20";
					    
    {
       var radioId = "RadioButton47";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton48";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
					
  }

				

    this.ExecLogic = function() {
				  if ((
        document.getElementById("RadioButton47").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section19").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section11");
      
      }
				  
      else if ((
        document.getElementById("RadioButton48").checked==true)) {
					  
          AddSectionToHistory(sessionManager.GetDomSection("Section19").Save()); 
          // Open the section in it's default state (as we are navigating forward)
          OpenSection("Section20");
      
      }
				  
      else {
	      alert("None of the expected answers have been given in this section.\nEnsure all questions have been correctly answered.");
      }
				  
   }
					
	
}
			
var Section19 = new ___Section19();
sessionManager.AddDomSection( 'Section19', Section19 );

{
  var sectionSection19 = new Section( "Section19" );
  var textBlockSection19 = null;
  var hyperlinkSection19 = null;
  var questionSection19 = null;
  var responseGroupSection19 = null;
  var responseOptionSection19 = null;
  var responseTextSection19 = null;
  var responseDropDownSection19 = null;
  		
  questionSection19 = new Question();
  questionSection19.Text = "Patient able to maintain weight bearing status?";
  questionSection19.Help = "";
							
			  
  responseGroupSection19 = new ResponseGroup( "AnswerGroup20" );
  responseGroupSection19.Field = "";
				  
  responseGroupSection19.SelectMinimum = "0";
  responseGroupSection19.SelectMaximum = "1";
  responseOptionSection19 = new ResponseOption( "RadioButton47", "Yes" );
  responseGroupSection19.Responses.push( responseOptionSection19 );
						  
  responseGroupSection19.SelectMinimum = "0";
  responseGroupSection19.SelectMaximum = "1";
  responseOptionSection19 = new ResponseOption( "RadioButton48", "No" );
  responseGroupSection19.Responses.push( responseOptionSection19 );
						  
  questionSection19.ResponseGroups.push( responseGroupSection19 );
			  
  sectionSection19.Content.push( questionSection19 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection19 );
}
	
	
function ___Section20() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return true;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton53").checked = false;
    document.getElementById("RadioButton54").checked = false;
    document.getElementById("Textbox1").value = "";
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section20", "Page19", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup21" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton53", 
        $(MakeIdSelector('RadioButton53')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton54", 
        $(MakeIdSelector('RadioButton54')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
    responseGroupData = new ResponseGroupData( "AnswerGroup22" );
					    
    responseGroupData.Responses.push( 
      new ResponseTextData(
        "Textbox1", 
        $(MakeIdSelector('Textbox1')).prop('value')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section20" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page19" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup21";
					    
    {
       var radioId = "RadioButton53";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton54";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    var responseGroupId = "AnswerGroup22";
					    
    {
       var editboxId = "Textbox1";
       $(MakeIdSelector(editboxId)).prop('value', sectionData.GetResponseGroup(responseGroupId).GetResponse(editboxId).Value);
    }
  						    
					
  }

				

    this.ExecLogic = function() {
				  
   }
					
	
}
			
var Section20 = new ___Section20();
sessionManager.AddDomSection( 'Section20', Section20 );

{
  var sectionSection20 = new Section( "Section20" );
  var textBlockSection20 = null;
  var hyperlinkSection20 = null;
  var questionSection20 = null;
  var responseGroupSection20 = null;
  var responseOptionSection20 = null;
  var responseTextSection20 = null;
  var responseDropDownSection20 = null;
  		
  questionSection20 = new Question();
  questionSection20.Text = "May not be appropriate for IRF.\n Do you agree with this conclusion?";
  questionSection20.Help = "";
							
			  
  responseGroupSection20 = new ResponseGroup( "AnswerGroup21" );
  responseGroupSection20.Field = "";
				  
  responseGroupSection20.SelectMinimum = "0";
  responseGroupSection20.SelectMaximum = "1";
  responseOptionSection20 = new ResponseOption( "RadioButton53", "Yes" );
  responseGroupSection20.Responses.push( responseOptionSection20 );
						  
  responseGroupSection20.SelectMinimum = "0";
  responseGroupSection20.SelectMaximum = "1";
  responseOptionSection20 = new ResponseOption( "RadioButton54", "No" );
  responseGroupSection20.Responses.push( responseOptionSection20 );
						  
  questionSection20.ResponseGroups.push( responseGroupSection20 );
			  
  responseGroupSection20 = new ResponseGroup( "AnswerGroup22" );
  responseGroupSection20.Field = "";
				  
  responseTextSection20 = new ResponseText( "Textbox1", "Please provide any comments related to conclusion." );
  responseGroupSection20.Responses.push( responseTextSection20 );
						  
  questionSection20.ResponseGroups.push( responseGroupSection20 );
			  
  sectionSection20.Content.push( questionSection20 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection20 );
}
	
	
function ___Section21() {
  this.IsRedirectUrlSpecified = function() {
	  return "" != "";
  }

  this.RedirectPage = function() {
	  window.location = "";
  }

  this.IsLast = function() {
				  
    return true;
  }
			
  this.ClearInputs = function() {
				  
    document.getElementById("RadioButton55").checked = false;
    document.getElementById("RadioButton56").checked = false;
    document.getElementById("Textbox3").value = "";
  }
		
  // Save the document controls state to a 'SectionData' object
  // Returns: an object of type 'SectionData'
  this.Save = function() {
    var sectionData = new SectionData( "Section21", "Page20", iSectionCounter + 1 );
					
    var responseGroupData = null;
			    
    responseGroupData = new ResponseGroupData( "AnswerGroup23" );
					    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton55", 
        $(MakeIdSelector('RadioButton55')).prop('checked')));
							    
    responseGroupData.Responses.push( 
      new ResponseOptionData(
        "RadioButton56", 
        $(MakeIdSelector('RadioButton56')).prop('checked')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
    responseGroupData = new ResponseGroupData( "AnswerGroup24" );
					    
    responseGroupData.Responses.push( 
      new ResponseTextData(
        "Textbox3", 
        $(MakeIdSelector('Textbox3')).prop('value')));
							    
    sectionData.ResponseGroups.push( responseGroupData );
				    
					
    return sectionData;
  }

  // Restore the document controls state from a 'SectionData' object
  // Returns: nothing
  this.Restore = function(sectionData) {
    DEBUG && console.assert("Section21" == sectionData.SectionID, "Invalid section identifier %s", sectionData.SectionID); 
    DEBUG && console.assert("Page20" == sectionData.Name, "Invalid section name %s", sectionData.Name); 
					
			    
    var responseGroupId = "AnswerGroup23";
					    
    {
       var radioId = "RadioButton55";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    {
       var radioId = "RadioButton56";
       $(MakeIdSelector(radioId)).prop('checked', sectionData.GetResponseGroup(responseGroupId).GetResponse(radioId).Selected);
    }
							    
    var responseGroupId = "AnswerGroup24";
					    
    {
       var editboxId = "Textbox3";
       $(MakeIdSelector(editboxId)).prop('value', sectionData.GetResponseGroup(responseGroupId).GetResponse(editboxId).Value);
    }
  						    
					
  }

				

    this.ExecLogic = function() {
				  
   }
					
	
}
			
var Section21 = new ___Section21();
sessionManager.AddDomSection( 'Section21', Section21 );

{
  var sectionSection21 = new Section( "Section21" );
  var textBlockSection21 = null;
  var hyperlinkSection21 = null;
  var questionSection21 = null;
  var responseGroupSection21 = null;
  var responseOptionSection21 = null;
  var responseTextSection21 = null;
  var responseDropDownSection21 = null;
  		
  questionSection21 = new Question();
  questionSection21.Text = "May be appropriate for IRF.\n Do you agree with this conlsuion?";
  questionSection21.Help = "";
							
			  
  responseGroupSection21 = new ResponseGroup( "AnswerGroup23" );
  responseGroupSection21.Field = "";
				  
  responseGroupSection21.SelectMinimum = "0";
  responseGroupSection21.SelectMaximum = "1";
  responseOptionSection21 = new ResponseOption( "RadioButton55", "Yes" );
  responseGroupSection21.Responses.push( responseOptionSection21 );
						  
  responseGroupSection21.SelectMinimum = "0";
  responseGroupSection21.SelectMaximum = "1";
  responseOptionSection21 = new ResponseOption( "RadioButton56", "No" );
  responseGroupSection21.Responses.push( responseOptionSection21 );
						  
  questionSection21.ResponseGroups.push( responseGroupSection21 );
			  
  responseGroupSection21 = new ResponseGroup( "AnswerGroup24" );
  responseGroupSection21.Field = "";
				  
  responseTextSection21 = new ResponseText( "Textbox3", "Please provider any additional related comments." );
  responseGroupSection21.Responses.push( responseTextSection21 );
						  
  questionSection21.ResponseGroups.push( responseGroupSection21 );
			  
  sectionSection21.Content.push( questionSection21 );
		  
  sessionManager.AddDocumentSchemaSection( sectionSection21 );
}
	