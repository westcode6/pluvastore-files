function sleekSidebar() {
  const $ = (el) => document.querySelector(el);

  function toggle(el, arg1, arg2, arg3) {
    return $(el).addEventListener("click", (e) => {
      $(".sidebar").classList.remove(arg1);
      $("#mainOverlay").classList.toggle(arg2);
      $(".sidebar").classList.add(arg3);
    });
  }

  toggle(".toggler", "hide-sidebar", "hidden", "reveal-sidebar");
  toggle("#mainOverlay", "reveal-sidebar", "hidden", "hide-sidebar");
}

/* 
    How TO Use?
    Import The styles and JS
    Import to wherever you want to use it
    Call sleekSidebar();

    Add ".sidebar" class to your sidebar element
    Remember to style the sidebar to your taste

    Add ".overlay", ".hidden" and "#mainOverlay" to
    a div

    Add ".toggler" to your toggle button
*/
