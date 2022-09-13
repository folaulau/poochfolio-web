var script = document.createElement("script");

export const onSupport = () => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "b424bc94-6112-4bda-aee5-5896f32a8763";
    window.CRISP_TOKEN_ID = '';

    script.src = "https://client.crisp.chat/l.js";
    script.async = 1;

    document.getElementsByTagName("head")[0].appendChild(script);
    window.$crisp.push(["set", "user:nickname", ['visitor']]);
    // window.$crisp.push(["set", "user:email", email]);
    window.$crisp.push(["do", "chat:hide"]);
}

export const onShowLiveChat = () => {
    window.$crisp.push(["do", "chat:show"]);
    window.$crisp.push(['do', 'chat:open']);
    window.$crisp.push(["do", "message:read"])
    window.$crisp.push(["on", "chat:closed", function () {
        window.$crisp.push(["do", "chat:hide"]);
    }])
}