chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'https://ubg365.github.io/bitlife-life-simulator.html'
  });
  chrome.runtime.setUninstallURL('https://ubg365.github.io/bitlife-life-simulator.html')
});

chrome.action.onClicked.addListener((_reason) => {
  chrome.tabs.create({
      url: 'index.html'
  });
});