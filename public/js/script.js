// (()=>{"use strict";const e=document.getElementById("chat-form"),
//    n=document.querySelector(".chat-messages"),t=document.getElementById("room-name"),
   
//    s=document.getElementById("users"),o=Qs.parse(location.search,{ignoreQueryPrefix:!0}),
   
//    r=o.username,a=o.room,m=io();m.on("usernameError",e=>{alert(e),window.location.href="/"}),
   
//    m.emit("joinRoom",{username:r,room:a}),m.on("roomUsers",e=>{var n,o;n=e.room,t.innerHTML=n,
   
//    o=e.users,s.innerHTML=`\n    ${o.map(e=>`<li>${e.username}</li>`).join("")}\n  `}),
   
//    m.on("message",e=>{!function(e){const t=document.createElement("div");t.classList.add("message"),
   
//    t.innerHTML=`<p class="meta">${e.username} <span>${e.time}</span></p>\n   <p class="text">\n      
   
//    ${e.text}\n   </p>`,n.appendChild(t)}(e),n.scrollTop=n.scrollHeight}),e.addEventListener("submit",
   
//    e=>{e.preventDefault();const n=e.target.elements.namedItem("msg"),t=n.value;m.emit("chatMessage",t),
   
//    n.value="",n.focus()})})();

 (() => {
    "use strict";
    const e = document.getElementById("chat-form"),
        n = document.querySelector(".chat-messages"),
        t = document.getElementById("room-name"),
        s = document.getElementById("users"),
        o = Qs.parse(location.search, { ignoreQueryPrefix: !0 }),
        r = o.username,
        a = o.room,
        m = io();

    // Container ki styling update ki taaki messages ek ke niche ek aayen
    n.style.display = "flex";
    n.style.flexDirection = "column";
    n.style.alignItems = "flex-start";

    m.on("usernameError", e => { alert(e), window.location.href = "/" });

    m.emit("joinRoom", { username: r, room: a });

    m.on("roomUsers", e => {
        var n, o;
        n = e.room, t.innerHTML = n,
        o = e.users, s.innerHTML = `\n     ${o.map(e => `<li>${e.username}</li>`).join("")}\n   `
    });

    m.on("message", e => {
        !function(e) {
            const t = document.createElement("div");
            t.classList.add("message");

            // CSS styling jo background ko sirf text tak mahdood rakhti hai
            t.style.background = "#5bc0de"; // Blue color jo aapki image mein hai
            t.style.padding = "8px 12px";
            t.style.borderRadius = "10px";
            t.style.marginBottom = "10px";
            t.style.width = "fit-content";  // Sirf text jitni width lega
            t.style.maxWidth = "85%";       // Screen se bahar na jaye
            t.style.wordBreak = "break-word";

            t.innerHTML = `<p class="meta" style="font-weight:bold; font-size:12px; margin-bottom:4px;">${e.username} <span style="font-weight:normal; opacity:0.7;">${e.time}</span></p>\n    <p class="text" style="margin:0;">\n       \n    ${e.text}\n    </p>`, 
            n.appendChild(t)
        }(e), n.scrollTop = n.scrollHeight
    });

    e.addEventListener("submit", e => {
        e.preventDefault();
        const n = e.target.elements.namedItem("msg"),
            t = n.value;
        m.emit("chatMessage", t), n.value = "", n.focus()
    })
})();