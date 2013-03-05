// ==UserScript==
// @name        webHelper
// @namespace   http://weibo.com/kalayama
// @description remove the ads from timeline of weibo。
// @include     http://weibo.com/*
// @grant       none
// @require http://code.jquery.com/jquery-latest.min.js
// @version     1
// ==/UserScript==

$("div[feedtype='ad']").html("")