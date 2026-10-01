document.getElementById("applyRtl").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const targets = document.querySelectorAll('[dir="auto"]');

            targets.forEach(x => {
                x.setAttribute('dir', 'rtl');
            });
        }
    });
});

document.getElementById("reset").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const targets = document.querySelectorAll('[dir="rtl"]');

            targets.forEach(x => {
                x.setAttribute('dir', 'auto');
            });
        }
    });
});

