// ==UserScript==
// @name        Notification Restore
// @namespace   nope
// @include     http://www.overclock.net/*
// @version     1
// @grant       none
// @require     http://code.jquery.com/jquery-1.6.4.js
// ==/UserScript==

(function() {
    var privateMessagesCount = $(".messages .notification-counter").first().text().replace(/\s+/, "");
    var subscriptionsCount = $(".subscriptions .notification-counter").first().text().replace(/\s+/, "");
        
    var notificationModule  = $("<div/>", {
        css: {
            "height": "35px"
        }
    });
    
    var messagesContainer = $("<a/>", {
        href: "http://www.overclock.net/messages",
        text: "Private Messages ",
        css: {
            "display": "block"
        }
    });
    
    var messagesCounter = $("<span/>", {
        text: privateMessagesCount,
        css: {
            "background-color": "#9C393D",
            "display": "inline-block",
            "height": "15px",
            "min-width": "15px",
            "text-align": "center",
            "font-size": "10px",
            "line-height": "15px",
            "color": "#FFF",
            "border-radius": "2px"
        }
    });
    
    var subsContainer = $("<a/>", {
        href: "http://www.overclock.net/users/subscriptions/",
        text: "Subscriptions ",
        css: {
            "display": "block"
        }
    });
    
    var subsCounter = $("<span/>", {
        text: subscriptionsCount,
        css: {
            "background-color": "#9C393D",
            "display": "inline-block",
            "height": "15px",
            "min-width": "15px",
            "text-align": "center",
            "font-size": "10px",
            "line-height": "15px",
            "color": "#FFF",
            "border-radius": "2px"
        }
    });
    
    
    if(privateMessagesCount > 0) messagesContainer.append(messagesCounter);
    if(subscriptionsCount > 0) subsContainer.append(subsCounter);
    
    notificationModule.append(messagesContainer);
    notificationModule.append(subsContainer);
    
    $("#sidebar").prepend(notificationModule);

})();
