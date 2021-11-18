/**
 * Tab touch support, allows users to click-swipe or touch-swipe left
 * or right and have the aira-tabs move with the images
 */
(function () {
  const imageContainer = document.getElementById('imageContainer');
  let x0 = null

  imageContainer.addEventListener('touchmove', e => { e.preventDefault() }, false)

  function lock(e) {
    x0 = unify(e).clientX;
  };

  function move(e) {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0, s = Math.sign(dx);

      const tabs = imageContainer.nextElementSibling;
      const firstTab = tabs.firstElementChild;
      const lastTab = tabs.lastElementChild;
      const selectedTab = tabs.querySelector('[aria-selected=true]')
      const nextTab = selectedTab.nextElementSibling;
      const prevTab = selectedTab.previousElementSibling;

      if ((s > 0)) {
        prevTab ? prevTab.click() : lastTab.click();
      }
      if ((s < 0)) {
        nextTab ? nextTab.click() : firstTab.click();
      }
      x0 = null
    }
  };
  
  function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  imageContainer.addEventListener('mousedown', lock, false);
  imageContainer.addEventListener('touchstart', lock, false);

  imageContainer.addEventListener('mouseup', move, false);
  imageContainer.addEventListener('touchend', move, false);
}());

/**
 * Click support for tabs, the touch support also uses this functionality
 */

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