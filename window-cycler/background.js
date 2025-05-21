const OPEN_INTERVAL = 5000; // 5秒ごとに開く
const CLOSE_DELAY = 2000; // 開いたウィンドウを閉じるまでの時間

async function openAndClose() {
  const windowInfo = await chrome.windows.create({
    url: 'about:blank',
    type: 'popup',
    width: 1,
    height: 1,
    left: 9999,
    top: 9999,
    focused: false,
  });

  setTimeout(() => {
    if (windowInfo.id) {
      chrome.windows.remove(windowInfo.id);
    }
  }, CLOSE_DELAY);
}

setInterval(openAndClose, OPEN_INTERVAL);
