function search(){
document.write("<li>");
document.write("<form method=\"GET\" action=\"http://www.google.de/search\">");
document.write("<input TYPE=\"text\" style=\"width:135px;\" name=\"q\" maxlength=\"90\">");
document.write("<input TYPE=\"hidden\" name=\"q\" value=\"site:www.psychometrica.de\">");
document.write("<input TYPE=\"hidden\" name=\"hl\" value=\"de\">");
document.write("<input type=\"submit\" name=\"btnG\" VALUE=\"Suche\" style=\"width:45px;\">");
document.write("</form>");
document.write("</li>");
}

