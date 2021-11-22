// store image gallery data in obj
// id
// image src
// title
// caption

// loop through and craete panels

// loop through and create buttons for panels

(function () {
  const data = [{
    "id": "screenshot1-tab",
    "src": "./assets/screenshots/ss-dashboard.jpg",
    "alt": "Sound Splits user dashboard",
    "title": "Account dashboard",
    "caption": "Glimpse recent revenue, royalty reports and statements",
    "hidden": ""
  },
  {
    "id": "screenshot2-tab",
    "src": "./assets/screenshots/ss-sales.jpg",
    "alt": "Sales monitor screen",
    "title": "Sales monitor",
    "caption": "Understand trends in your music sales",
    "hidden": "hidden"
  },

  {
    "id": "screenshot3-tab",
    "src": "./assets/screenshots/ss-reportDashboard.jpg",
    "alt": "Monthly reports screen",
    "title": "Monthly reports",
    "caption": "View, send and mark statements as paid",
    "hidden": "hidden"
  },
  {
    "id": "screenshot4-tab",
    "src": "./assets/screenshots/ss-report.jpg",
    "alt": "Report statement screen",
    "title": "Report statement",
    "caption": "Check the details of your artist and publishers statements",
    "hidden": "hidden"
  },
  {
    "id": "screenshot5-tab",
    "src": "./assets/screenshots/ss-reportExample.png",
    "alt": "PDF statement example",
    "title": "Statements that look good",
    "caption": "An example PDF statement your artists and publishers will receive",
    "hidden": "hidden"
  }]
  const imageContainer = document.getElementById("imageContainer");

  function makeImagePanel(panel) {
    return `<div ${panel.hidden} role="tabpanel" id="${panel.id}">
        <div class="flex flex-col sm:flex-row sm:justify-evenly sm:items-center">
          <div class="max-w-lg select-none">
            <img class="shadow-md pointer-events-none" src="${panel.src}"
              alt="${panel.alt}">
          </div>
          <div class="mt-4 sm:text-left sm:mt-0 sm:ml-6 sm:self-center">
            <h4 class="font-bold text-lg select-none">${panel.title}</h4>
            <p class="text-sm select-none">${panel.caption}</p>
          </div>
        </div>
      </div>`
  }

  data.forEach(image => {
    imageContainer.innerHTML += makeImagePanel(image);
  })

  // Create tabs
  createTabs('imageTabs', data.length);

  function createTabs(containerId, dataLength) {
    const tabsContainer = document.getElementById(containerId);

    for (let i = 0; i < dataLength; i++) {
      let count = i + 1;
      tabsContainer.appendChild(createButton(count));
    }

    tabsContainer.firstElementChild.ariaSelected = true;
  }
  
  function createButton(count) {
    let button = document.createElement('button');
    button.role = "tab";
    button.tabIndex = "0";
    button.ariaSelected = false;
    button.setAttribute('aria-controls', `screenshot${count}-tab`)

    let span = document.createElement('span');
    span.classList.add('sr-only')
    span.innerText = `Screenshot ${count}`;
    button.appendChild(span);
    return button;
  }

}());

