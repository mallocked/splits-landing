(function () {

  // Get list of tabs
  const tabList = document.querySelector('.dot-indicators')

  tabList.addEventListener('click', (e) => {
    // if a tab is clicked, find its corrisponding panel using event delegation
    let btn = e.target.closest('button')
    if (!btn) return;
    let tabToShow = btn.getAttribute('aria-controls');
    if (!tabToShow) return;

    // set all aria-selected to false
    let btnSiblingArray = btn.parentElement.children;
    useSetAttributes(btnSiblingArray, 'aria-selected', 'false')
    // set desired button aria-selected to true
    btn.ariaSelected = true;

    // target panel for showing an hiding
    let panel = document.querySelector(`#${tabToShow}`);
    if (!panel) return;

    // hide all panels
    let panelSiblingArray = panel.parentElement.children;
    useSetAttributes(panelSiblingArray, 'hidden', 'true')
    // show desired panel
    panel.hidden = false;
  })


  function useSetAttributes(HTMLCollection, attribute, value) {
    Array.from(HTMLCollection)
      .forEach((elm) => elm.setAttribute(attribute, value))
  }
  
}());