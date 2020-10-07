function cia_profile() {
  //JSON data
  var data={
    "awe_ico":["","","fas fa-map-marker-alt","fas fa-phone","fas fa-fax","fas fa-train","fas fa-envelope"],
    "address":["株式会社ガリレオ","〒460-0003","愛知県名古屋市中区錦1丁目6-36 N・A・Pビル5Ｆ",
        "052-205-6270","052-205-6271","最寄駅：地下鉄伏見駅１０番出口から徒歩７分",
        "<a href='mailto:kyujin@gally-tech.com'> kyujin@gally-tech.com</a>"]
    }
  // Put the data into a variable and format with HTML tags
  var output = "<h4 class='setLocation'>About us</h4>";
  output += "<ul id='list'>";
  // Loop through the artists
  for (var i in data.address) {
    output += "<li><i class='" + data.awe_ico[i] + "'></i> " + data.address[i];
  }
  output += "</ul>";
  // Output the data to the "artistlist" element
  document.getElementById("cia_list").innerHTML=output;
}
// Load the above function when the window loads
window.onload = cia_profile;