function search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  loop:
  for (i = 0; i < tr.length; i++) {
    var td1 = tr[i].getElementsByTagName("td")[1];
    var td2 = tr[i].getElementsByTagName("td")[4];
    for (td of [td1, td2]) {
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          continue loop;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
