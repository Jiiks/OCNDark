// ==UserScript==
// @name        Notification Restore
// @namespace   nope
// @include     http://www.overclock.net/*
// @version     1
// @grant       none
// @require     http://code.jquery.com/jquery-1.6.4.js
// ==/UserScript==

(function() {
    
    
    $("<style type='text/css'> .jcounter { background-color:#399C41; display:inline-block; height:15px; min-width:15px; text-align:center; font-size:10px; line-height:15px; color:#FFF; border-radius:2px; } .jpadder { display:inline-block; height:15px; min-width:15px; text-align:center; font-size:10px; line-height:15px; color:#FFF; border-radius:2px; background-color:#9C393D; } </style>").appendTo("head");
    $("<style type='text/css'> .jncontainer { position:absolute; right:48px; height:38px; display:inline-block; top:27px; } .fixed-scroll-breakpoint .jncontainer { top:8px; } </style>").appendTo("head");
    $("<style type='text/css'> .jlink { font-size:12px; display:block !important; height:18px !important; color:#FFF !important; text-align:right !important; } .search-bar-outer, .ui-header-fixed ul#main-nav .search > a { right:165px !important; } .ui-header-fixed li.profile .user-avatar .notification-counter, .ui-header-fixed ul#main-nav li.messages, .ui-header-fixed ul#main-nav li.subscriptions { display:none; } </style>").appendTo("head");
    
    var privateMessagesCount = $(".messages .notification-counter").first().text().replace(/\s+/, "");
    var subscriptionsCount = $(".subscriptions .notification-counter").first().text().replace(/\s+/, "");
        
    var notificationModule  = $("<li/>", {
        class: "jncontainer",
        css: {
            "height": "35px"
        }
    });
    
    var messagesContainer = $("<a/>", {
        href: "http://www.overclock.net/messages",
        text: "Private Messages ",
        class: "jlink",
        css: {
            "display": "block"
        }
    });
    
    var messagesCounter = $("<span/>", {
        text: privateMessagesCount,
        class: "jcounter"
    });
    
    var subsContainer = $("<a/>", {
        href: "http://www.overclock.net/users/subscriptions/",
        text: "Subscriptions ",
        class: "jlink",
        css: {
            "display": "block"
        }
    });
    
    var subsCounter = $("<span/>", {
        text: subscriptionsCount,
        class: "jcounter"
    });
    
    
    if(privateMessagesCount > 0) messagesContainer.append(messagesCounter); else messagesContainer.append($("<span/>", { class:"jpadder", text: "0" }));
    if(subscriptionsCount > 0) subsContainer.append(subsCounter); else subsContainer.append($("<span/>", { class:"jpadder", text: "0" }));
    
    notificationModule.append(messagesContainer);
    notificationModule.append(subsContainer);
    notificationModule.insertBefore($("#main-nav .profile"));

})();
