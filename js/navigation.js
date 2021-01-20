function menuTestverfahren(highlight) {
    var Menuepunkt = new Array("ELFE II", "Klasse 4", "PPVT-4");
	var Menuelinks = new Array("elfe2.html", "klasse4.html", "ppvt4.html");
	
    
	for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			
			
			if(highlight=="ELFE II"){
				menuElfe();
			}
			
			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}
	
}

function redirectHTTPS(url) {
    
	if (location.href != url)
		{
			location.href = url;
		}	
	
}

function menuAuswertungssoftware(highlight) {
    var Menuepunkt = new Array("Intelligenztests", "Sonstige Verfahren");
	var Menuelinks = new Array("auswertungssoftware1.html", "auswertungssoftware2.html");
	
    
	for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			if(highlight=="Intelligenztests"){
				menuIntelligenz();
			}
			if(highlight=="Sonstige Verfahren"){
				menuSonstige();
			}
			
			
						
			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}
	
}


function menuSonstige() {
	document.write("<ul><li><a href=\"et66r.html\">ET 6-6-R</a></li><li><a href=\"lernverlauf.html\">LVD-M</a></li><li><a href=\"rzd.html\">RZD 2-6</a></li><li><a href=\"wms4.html\">WMS-IV</a></li></ul>");
}

function menuIntelligenz() {
	document.write("<ul><li><a href=\"kabc2.html\">KABC-II</a></li><li><a href=\"wais4.html\">WAIS-IV</a></li><li><a href=\"wisc5.html\">WISC-V</a></li><li><a href=\"wppsi4.html\">WPPSI-IV</a></li></ul>");
}









function menuFreeware(highlight) {
    var Menuepunkt = new Array("Berechnung von Effektstärken", "cNORM", "Diagnose von Lernstörungen", "Interpolation von Normwerten", "Lesbarkeitsindex LIX", "Normwertrechner", "Signifikanztests bei Korrelationen", "Testkennwerte");
	var Menuelinks = new Array("effektstaerke.html", "cNorm.html", "tls.html", "interpolation.html", "lix.html", "normwertrechner.html", "korrelation.html", "testkennwerte.html");
	
    
	for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			
			
			if(highlight=="cNORM"){
				menuCNorm();
			}

			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}
	
}

function menuTLS() {
	document.write("<ul><li><a href=\"tls.html\">Überblick</a></li><li><a href=\"tls_help.html\">Bedienungsanleitung und Download</a></li></ul>");
}


	
function menuFoerderprogramme(highlight) {
    var Menuepunkt = new Array("conText", "Denkspiele<br> mit Elfe und Mathis", "Lesespiele<br> mit Elfe und Mathis", "Rechenspiele<br> mit Elfe und Mathis I", "Rechenspiele<br> mit Elfe und Mathis II");
	var Menuelinks = new Array("context.html", "denkspiele.html", "lesespiele.html", "rechenspiele1.html", "rechenspiele2.html");
	
    
	for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			
			
			if(highlight=="conText"){
				menuContext();
			}
			
			if(highlight=="Denkspiele<br> mit Elfe und Mathis"){
				menuDenkspiele();
			}
			
			if(highlight=="Lesespiele<br> mit Elfe und Mathis"){
				menuLesespiele();
			}
			
			if(highlight=="Rechenspiele<br> mit Elfe und Mathis I"){
				menuRechenspiele1();
			}
			
			if(highlight=="Rechenspiele<br> mit Elfe und Mathis II"){
				menuRechenspiele2();
			}
			
			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}	
	
	
}

function menuCNorm() {
	document.write("<ul><li><a href=\"cNorm.html\">Überblick</a></li><li><a href=\"cNorm_installation.html\">Installation</a></li><li><a href=\"cNorm_preparation.html\">Datenaufbereitung</a></li><li><a href=\"cNorm_modeling.html\">Modellierung</a></li><li><a href=\"cNorm_validation.html\">Modellvalidierung</a></li><li><a href=\"cNorm_normtables.html\">Normtabellen</a></li><li><a href=\"cNorm_examples.html\">Beispiele</a></li><li><a href=\"cNorm_gui.html\">Grafische Oberfläche</a></li><li><a href=\"cNorm_jamovi.html\">Jamovi</a></li><li><a href=\"cNorm_faq.html\">Troubleshooting</a></li></ul>");
}

function menuContext() {
	document.write("<ul><li><a href=\"context.html\">Einführung</a></li><li><a href=\"context_ueberblick.html\">Überblick</a></li><li><a href=\"context_ansatz.html\">Trainingsinhalte</a></li><li><a href=\"context_lsa.html\">Latente Semantische Analyse</a></li><li><a href=\"context_effekt.html\">Effektivität</a></li><li><a href=\"context_materialien.html\">Downloads</a></li></ul>");
}

function menuDenkspiele() {
	document.write("<ul><li><a href=\"denkspiele.html\">Einführung</a></li><li><a href=\"denkspiele_ueberblick.html\">Überblick</a></li><li><a href=\"denkspiele_aufgaben.html\">Trainingsinhalte</a></li><li><a href=\"denkspiele_evaluation.html\">Effektivität</a></li><li><a href=\"denkspiele_materialien.html\">Downloads und Malvorlagen</a></li></ul>");
}

function menuLesespiele() {
	document.write("<ul><li><a href=\"lesespiele.html\">Einführung</a></li><li><a href=\"lesespiele_ueberblick.html\">Überblick</a></li><li><a href=\"lesespiele_spiele.html\">Trainingsinhalte</a></li><li><a href=\"lesespiele_evaluation.html\">Effektivität</a></li><li><a href=\"lesespiele_materialien.html\">Downloads und Malvorlagen</a></li></ul>");
}

function menuRechenspiele1() {
	document.write("<ul><li><a href=\"rechenspiele1.html\">Einführung</a></li><li><a href=\"rs1_ueberblick.html\">Überblick</a></li><li><a href=\"rs1_bereiche.html\">Trainingsinhalte</a></li><li><a href=\"rs1_evaluation.html\">Effektivität</a></li><li><a href=\"rs1_download.html\">Downloads und Malvorlagen</a></li></ul>");
}

function menuRechenspiele2() {
	document.write("<ul><li><a href=\"rechenspiele2.html\">Einführung</a></li><li><a href=\"rs2_ueberblick.html\">Überblick</a></li><li><a href=\"rs2_bereiche.html\">Trainingsinhalte</a></li><li><a href=\"rs2_evaluation.html\">Effektivität</a></li><li><a href=\"rs2_download.html\">Downloads und Malvorlagen</a></li></ul>");
}


 
function menuFreewareEnglisch(highlight) {
    var Menuepunkt = new Array("Effect Size", "cNORM", "Interpolation of Norm Values", "Norm Score Calculator", "Significance of Correlations", "Test Characteristics");
	var Menuelinks = new Array("effect_size.html", "cNorm_en.html", "interpolation_en.html", "normwertrechner_en.html", "correlation.html", "test_criteria_en.html");
	
    for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			
			if(highlight=="cNORM"){
				menuCNorm_en();
			}

			
									
			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}
	
}

function menuCNorm_en() {
	document.write("<ul><li><a href=\"cNorm_en.html\">Overview</a></li><li><a href=\"cNorm_installation_en.html\">Installation</a></li><li><a href=\"cNorm_preparation_en.html\">Data Preparation</a></li><li><a href=\"cNorm_modeling_en.html\">Data Modeling</a></li><li><a href=\"cNorm_validation_en.html\">Model Validation</a></li><li><a href=\"cNorm_normtables_en.html\">Norm Tables</a></li><li><a href=\"cNorm_examples_en.html\">Examples</a></li><li><a href=\"cNorm_gui_en.html\">Graphical User Interface</a></li><li><a href=\"cNorm_jamovi.html\">Jamovi</a></li><li><a href=\"cNorm_faq_en.html\">Troubleshooting</a></li></ul>");
}



function menuElfe() {
	document.write("<ul><li><a href=\"elfe2.html\">Einführung</a></li><li><a href=\"elfe2_ueberblick.html\">Überblick</a></li><li><a href=\"elfe2_leseverstaendnis.html\">Leseverständnis</a></li><li><a href=\"elfe2_untertests.html\">Untertests</a></li><li><a href=\"elfe2_auswertung.html\">Auswertung</a></li><li><a href=\"elfe2_Migration.html\">Normen für Kinder mit Migrationshintergrund</a></li><li><a href=\"elfe2_downloads.html\">Tutorials, Downloads und Malvorlagen</a></li></ul>");
}


function menuBar(highlight){
	var name = new Array("TESTVERFAHREN", "AUSWERTUNGSSOFTWARE", "FÖRDERPROGRAMME", "FREEWARE", "SEMINARE", "SHOP", "IMPRESSUM");
	var links = new Array("testverfahren.html", "auswertungssoftware.html", "foerderprogramme.html", "freeware.html", "seminare.html", "bestellungen2.html", "impressum.html");
	var cellWidth = new Array(137, 200, 171, 104, 105, 81, 128);

	document.write("<table style=\"height:26px;\"><tr><td style=\"text-align:center; vertical-align:middle;cellpadding:2px 0px 2px 0px;width:16px;background:#ffffff;border:0px;\"></td>");
	
	for(var i = 0; i < name.length; i++){
		if(highlight==name[i]){
			document.write("<td style=\"text-align:center; vertical-align:middle;cellpadding:2px 0px 2px 0px;width:" + cellWidth[i] + "px;background:#5b969d;border:0px;\"><div id=\"startleiste\"><a href=" + links[i] + ">" + name[i] + "<br></a></div></td>");
		}else{
			document.write("<td style=\"text-align:center; vertical-align:middle;cellpadding:2px 0px 2px 0px;width:" + cellWidth[i] + "px;background:#ececec;border:0px;\"><a href=" + links[i] + ">" + name[i] + "<br></a></td>");
		}
		
		if(i < name.length -1 ){
			document.write("<td style=\"text-align:center; vertical-align:middle; cellpadding:2px 0px 2px 0px;width:0px; background:#aaaaaa; border:0px;\"></td>");
		}
	}

	document.write("<td style=\"text-align:center; vertical-align:middle;cellpadding:2px 0px 2px 0px;width:16px;background:#ffffff;border:0px;\"></td></tr></table><br><br><br>");
}
function menuBestellungen(highlight) {
    var Menuepunkt = new Array("conText", "Denkspiele mit Elfe und Mathis", "ELFE II - Normen für Migrationshintergrund", "ELFE II - Videoseminar");
	var Menuelinks = new Array("context.html", "denkspiele.html", "elfe2_migration.html", "elfe2_seminar.html");
	
    
	for(var i = 0; i < Menuepunkt.length; i++){
		if(highlight==Menuepunkt[i]){
			document.write("<li><a class=\"current\" href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a>");
			
			
			if(highlight=="conText"){
				menuContext();
			}
			
			if(highlight=="Denkspiele<br> mit Elfe und Mathis"){
				menuDenkspiele();
			}
			
			if(highlight=="Lesespiele<br> mit Elfe und Mathis"){
				menuLesespiele();
			}
			
			if(highlight=="Rechenspiele<br> mit Elfe und Mathis I"){
				menuRechenspiele1();
			}
			
			if(highlight=="Rechenspiele<br> mit Elfe und Mathis II"){
				menuRechenspiele2();
			}
			
			document.write("</li>");
			}
		else
			document.write("<li><a href=\"" + Menuelinks[i] + "\">" + Menuepunkt[i] + "</a></li>");
	}
	
}

