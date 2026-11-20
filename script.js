const nomorWhatsApp = "083193394842";
const usernameTelegram = "memaayu";

const searchInput = document.querySelector(".search-box input");
const categoryButtons = document.querySelectorAll(".category-item");
const productGrid = document.getElementById("productGrid");

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalRecolor = document.getElementById("modalRecolor");
const modalPics = document.getElementById("modalPics");
const modalPrice = document.getElementById("modalPrice");
const orderFormText = document.getElementById("orderFormText");
const copyBtn = document.getElementById("copyBtn");
const waBtn = document.getElementById("waBtn");
const teleBtn = document.getElementById("teleBtn");

const tncBtn = document.getElementById("tncBtn");
const tncModal = document.getElementById("tncModal");
const closeTncModal = document.getElementById("closeTncModal");

const rushBtn = document.getElementById("rushBtn");
const rushModal = document.getElementById("rushModal");
const closeRushModal = document.getElementById("closeRushModal");

const dataProduk = {
    "mytotebag": {
        title: "My Tote Bag",
        category: "Flower Art",
        price: "Rp8.000",
        images: ["images/mytotebag.PNG", "images/61.PNG"],
        recolor: "Available recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MY TOTE BAG
Price : 8.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Flowers : Cream/Purple/Recolor+1.000 (drop ur color)
Text replace : Replace name only/Buyer/Seller+5.000
Payment : Qris
Note for seller : 

♡゙ REPLACE TEXT 
- Gift for my man : 
- Dear, Jaehan : 
- I just want to say that i love you and will always love you. In the future, I want to continue to be by your side... : (max 300 characters)
- Signed, Majia :`
    },

    "softbytes": {
        title: "Soft Bytes",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/softbytes.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : SOFT BYTES
Price : 6.000 IDR
Pics Required : 2 Pictures

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : 
Text replace : Replace name only/Buyer/Seller+4,000 IDR
Pict : Buyer/Seller+500 IDR
Payment : Qris
Note for seller : 

♡゙ NEW TEXT  
- Obsessed with you since day one : 
- All the beautiful moments we've shared will be safely preserved here :
- Memories : (max 1 word) 
- Archive : (max 1 word) 
- The best part of thus journey? We're not done yet! There are still so many empty pages waiting for us to fill with new adventures and new days. I love you! :`
    },

    "heartfelt": {
        title: "Heartfelt Notes",
        category: "Card Letter",
        price: "Rp8.000",
        images: ["images/heartfelt.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HEARTFELT NOTES
Price : 6.000 IDR
Pics Required : 2 Pictures

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : 
Text replace : Replace name only/Buyer/Seller+4,000 IDR
Pict : Buyer/Seller+500 IDR
Payment : Qris
Note for seller : 

♡゙ NEW TEXT  
- Some things are too heavy for a quick text, so I wrote them here instead.If I had to sum up my favorite plot twist in life, it would be finding someone who makes ordinary days feel like a weekend getaway... : 
- Bluffa & Jaehan : (max 3 words)`
    },

    "heartpaper": {
        title: "Heart Paper",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/heartpaper.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HEART PAPER
Price : 6.000 IDR
Pics Required : 2 Pictures

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse : 
Text replace : Replace name only/Buyer/Seller+4,000 IDR
Pict : Buyer/Seller+500 IDR
Payment : Qris
Note for seller : 

♡゙ NEW TEXT  
- MY HEART ON PAPER : 
- Loving you feels so peaceful. The way you notice the little things about me never fails to put a smile on my face : 

- I'm so grateful we found each other, and I honestly can't wait to build all our tomorrows together : 
- To, Yuma:`
    },

    "bearypinkish": {
        title: "Beary Pinkish",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/bearypinkish.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BEARY PINKISH
Price : 6.000 IDR
Pics Required : 2 Pictures

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : 
Text replace : Replace name only/Buyer/Seller+4,000 IDR
Pict : Buyer/Seller+500 IDR
Payment : Qris
Note for seller : 

♡゙ NEW TEXT  
- You Are Home : (max 3 words)
- Stuck With You : (max 3 words) 
- Written In Star : 
- Dika & Yuma : 
- Totally Madly In Love : 

- Loving you has brought so much color into my life. There's this warmth whenever we talk about how our days went, and a quiet peace whenever I'm beside you. I truly believe that one of the most genuine feelings I’ve ever known is loving you : 
- Forever and Always :`
    },

    "lovepacket": {
        title: "Love Packet",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/lovepacket.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE PACKET
Price : 7.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Type : Light/Dark
Text replace : Replace name only/Buyer
Payment : Qris
Note for seller : 

♡゙ REPLACE TEXT 
- To, Kalandra, my whole world : 
- Things I love about you : (max 5 words) 
- Your romantic side : (max 6 words) 
- You give the best advice : (max 6 words) 
- Make love feel easy and fun : (max 6 words) 
- You never give up on me : (max 6 words) 
- You always there for me : (max 6 words) 
- Being my safe place : (max 6 words)
- You’re one of the best things that ever happened to me. You’re my everything, now and always : 
- Still falling for you, Kalana :`
    },

    "belovedone": {
        title: "Beloved One",
        category: "Foods Art, Best Seller",
        price: "Rp12.000",
        images: ["images/belovedone.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BELOVED ONE 
Price : 12.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+(5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- My beloved one : (max 3 words) 
- JAEHAN PRAMUDYA:
- I love you : (max 3 words) 
- You're my everything : (max 4 words) 
- Oca : (only 1 word) 
- You are the best part of my life, the one who makes my heart race and my soul feel at peace. i'm so blessed to have you, and i can't wait to see what the future holds for us... : (max 300 characters)`
    },

    "blossom": {
        title: "Ppt-Blossom",
        category: "Ppt/Pdf, Mensive Edition, Best Seller",
        price: "Rp16.000",
        images: ["images/63.PNG", "images/63.1.PNG", "images/63.2.PNG", "images/63.3.PNG", "images/63.4.PNG", "images/63.5.PNG"],
        recolor: "Unavailable recolor",
        pics: "13 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PPT — BLOSSOM
Price : 16.000 IDR
Pict   : 6-13 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+4.000 IDR
Text replace : Replace name only/Buyer/Seller+12.000 IDR
Ppt name : 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
Replace slide 1
- HAPPY :
- Mensiversary :
- My love, Jaehan :
- I want to be with you always and forever. Nothing in this world can replace you in my heart... :

♡゙ REPLACE TEXT SLIDE 2
- YOU ARE MY OTHER HALF :
- Happiness entered my life as you began to fill a part of my days. little by little, I began to... :
- Dear my love :
- These aren’t just empty words meant to cheer you up, but words of love filled with sincerity from... :
- Our Potrait : 

♡゙ REPLACE TEXT SLIDE 3
- MY HOPES FOR US :
- With love, Achelya :
- Second :
- I hope we will always be honest with each other and trust one another. We won’t let others interfere in any... :
- Another hope is that we can be a comfortable home for each other. There won’t be any lingering suspicion that... :

♡゙ REPLACE TEXT SLIDE 4
- 9/4/2026 :
- I hope we can always overcome any obstacles in our relationship. May our love keep us together and help us... :
- Our Special Day :
- Achelya and Jaehan :

♡゙ REPLACE TEXT SLIDE 5
- Choosing you is a decision I will never regret. I would choose you again and again, no matter what. To me... :
- Love : (max 2 words) 
- Definition : (max 1 word) 
- Love is you and me :
- Thinking Out Loud :

♡゙ REPLACE TEXT SLIDE 6
- LAST BUT NOT LEAST :
- Once again, happy sweet mensiversary for us, my love. I’m truly happy to have you by my side. Thank you for being my safe haven, for always... :
- Achelya and Jaehan : (max 3 words) 
- Stay together :
- 9/4/2026 :`
},

    "hellodonuts": {
        title: "Hello Donuts",
        category: "Foods Art",
        price: "Rp10.000",
        images: ["images/hellodonuts.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HELLO DONUTS
Price : 10.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse + name : 
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller+5.000
Payment : Qris

♡゙ REPLACE TEXT 
- Wenjun : 
- You've been my love, my comfort, and the one person who truly understands me. Your love has been a constant source of happiness... : 
- I really love you :
- Sweet donuts :
- Warmly, Uffa :`
    },

    "mostamazing": {
        title: "Most Amazing",
        category: "Trophy, Best Seller",
        price: "Rp6.000",
        images: ["images/mostamazing.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MOST AMAZING
Price : 6.000 IDR
Pict   : 2 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+4.000 IDR
Payment : Qris

♡゙ REPLACE TEXT 
- MOST AMAZING PERSON : (max 3 words) 
- Every year : (max 2 words) 
- Special just for you, my love : 
- Lando :
- You are my heart, my soul, and my everything. Your love has brought so much light into my life. I'm so lucky to have, and i will always love you :
- Your girl, Oca :`
    },

    "purejoy": {
        title: "Pure Joy",
        category: "Mensive Edition",
        price: "Rp6.000",
        images: ["images/64.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : Pure Joy
Price : 6.000 IDR
Pics Required : 2 Pictures

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : 
Text replace : Replace name only/Buyer/Seller+4,000 IDR
Pict : Buyer/Seller+500 IDR
Payment : Qris
Note for seller : 

♡゙ NEW TEXT  
- Happy Monthsary : 
- Another month has gone by with you, and it’s been so wonderful. Thank you for being the safest and most comfortable place for me... : (max 400 characters) 
- Endless in love : 
- Jaehan :
- Crazy for you :
- Catya :
- Right back at you :`
    },

    "purplies": {
        title: "Purplies",
        category: "Mensive Edition, Best Seller",
        price: "Rp9.000",
        images: ["images/purplies.PNG"],
        recolor: "Unavailable recolor",
        pics: "3 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PURPLIES
Price : 9.000 IDR
Pict   : 3 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (1.000 IDR) 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- HAPPY MENSIVERSARY :
- Love! :
- I love you so much! :
- LOVE LETTER :
- You have the most beautiful heart, and I'm so thankful that it belongs to me. Your love is the sweetest thing I've ever known, and i promise to always cherish it... : (max 220 characters)
- Jaehan :
- Zocala :
- I'm addicted to you permanently :`
    },

    "moonlight": {
        title: "Pdf-Moonlight",
        category: "Ppt/Pdf, Best Seller",
        price: "Rp18.000",
        images: ["images/59.PNG", "images/59.1.PNG", "images/59.2.PNG", "images/59.3.PNG", "images/59.4.PNG", "images/59.5.PNG"],
        recolor: "Unavailable recolor",
        pics: "6 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PDF — MOONLIGHT 
Price : 18.000 IDR
Pict   : 6 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+2.000 IDR
Text replace : Replace name only/Buyer/Seller+12.000 IDR
Pdf name :
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Our memories :
- Oca and Jeje :
- I'm saving our memories in this digital book. And this will be the proof of our love journey : 

♡゙  REPLACE TEXT SLIDE 2
- Sweet letter :
- For my love, Jaehan :
- You are a sweet person. You make me fall in love every day endlessly... : (panjang text sesuaikan dengan yang di katalog)
- From your love, Zoca :
- I may often upset you unintentionally but i am the one who loves you the most... : (panjang text sesuaikan dengan yang di katalog)
- Sweet letter :

♡゙ REPLACE TEXT SLIDE 3
- We always do something fun! :
- You and me :
- Zocala :
- Jaehan :
- You and me :
- Beautiful potrait, i love it :

♡゙ REPLACE TEXT SLIDE 4
-The couple :
- Pretty :
- Cool :
- We always take care of each other. Arguing over things that sometimes don't really matter and often disagreeing. Yet, we still choose to stay together without getting tired... : (panjang text sesuaikan dengan yang di katalog)
- We are really match! :

♡゙ REPLACE TEXT SLIDE 5
- Sweet letter :
- First message :
- I want you to be yourself when you're around me. You dont need to took strong when in fact you're not okay... : (panjang text sesuaikan dengan yang di katalog)
- Second message :
- I hope our relationship will always be like this. Experiencing problems but still surviving. I will. continue to live you and hope you will always love me too... : (panjang text sesuaikan dengan yang di katalog)
- Sweet letter :

♡゙ REPLACE TEXT SLIDE 6
- Lastly, i will say : Thank you for always being by my side and never leaving me. Giving me many beautiful things that will always be the most beautiful memory in my life... : (panjang text sesuaikan dengan yang di katalog)
- With love :
- Oca and Jeje :`
    },

    "sunshineone": {
        title: "Sunshine One",
        category: "Cake Art,Bday Edition, Best Seller",
        price: "Rp10.000",
        images: ["images/sunshineone.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : SUNSHINE ONE 
Price : 10.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Muse : 
Text replace : Replace name only/Buyer/Seller (6.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- Birthday girl :
- Zocala :
- Happy birthday! You deserve every good thing that comes your way and may God bless you... :

- Let's enjoy today as the happiest day you've ever lived. Enjoy a sweet cake to complete your happy day... :

- Sweet cake for sweet person :
- Your love, Deon :`
    },

    "1": {
        title: "My Lovely",
        category: "Flower Art, Best Seller",
        price: "Rp9.000",
        images: ["images/1.PNG", "images/1.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MY LOVELY 
Price : 9.000 IDR 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- From, Oca :
- My lovely, Syahzania :
- Thanks for always being my side in any situation : 

♡゙ REPLACE TEXT 2
- My lovely, syahzania :
- We met without planning. Became unexpectadly close. The days we pass turn into memories even though some become forgotten dust... : (Max 400 characters) 

- Your bestie, Oca :`
    },

    "honeybox": {
        title: "Honey Box",
        category: "Foods Art",
        price: "Rp13.000",
        images: ["images/2.PNG", "images/2.2.PNG"],
        recolor: "Available recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HONEY BOX
Price : 13.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+4.000 IDR 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Let me give you lots of love : 
- Your happiness is my happiness too : 
- I want you to get feel like.the most loved person in the whole world so that many people want your position. It's pleasure to spend so much time with you : 

♡゙ REPLACE TEXT SLIDE 2
- I want you. All of you : 
- DEAR : (max 1 word) 
- KAIA : (max 1 word) 
- Thank you for being such a wonderful part of my life :`
    },

    "pawsititive": {
        title: "Pawsitive Joy",
        category: "Cake Art, Bday Edition",
        price: "Rp9.000",
        images: ["images/3.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PAWSITIVE JOY 
Price : 9.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Recolor : Yes+1.000/No
Text replace : Replace name only/Buyer
Payment : Qris
Note for seller : 

♡゙ REPLACE TEXT 
- HAPPY BIRTHDAY : (max 2 words) 
- Mayla : 
- I hope your special day is filled with laughter, love, and your favorite things. Remember to take a moment to look back at how far you have come and be proud... : 
- HBD : (max 3 characters) 
- Make it a good one : 
- Xoxo, Kelvin :`
    },

    "tiramisu": {
        title: "Ppt-Tiramisu Love",
        category: "Ppt/Pdf, Best Seller",
        price: "Rp18.000",
        images: ["images/58.PNG", "images/58.1.PNG", "images/58.2.PNG", "images/58.3.PNG", "images/58.4.PNG", "images/58.5.PNG"],
        recolor: "Unavailable recolor",
        pics: "8 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PPT — TIRAMISU LOVE 
Price : 18.000 IDR
Pict   : 8 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU)  
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+2.000 IDR
Text replace : Replace name only/Buyer/Seller+12.000 IDR
Ppt name : 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- So much love :
- For my beloved Jaehan :
- I just want you to know that you're the love of my life. I really love you :
- Omg! you're so handsome :
- From your love, Zocala :
- Gift for you :

♡゙ REPLACE TEXT SLIDE 2
- Top 5 reasons why :
- I love "JAEHAN" :
- You make me smile and laugh effortlessly :
- You always stay by my side in any situation :
- You're handsome and look stunning every day :
- You always treat me like a princess :
- You say "i love you" to me every day :
- Made with love :

♡゙ REPLACE TEXT SLIDE 3
- Die with a smile :
- Bruno mars feat lady gaga :
- 00.00 - 04.12 :
- Wherever you go, that’s where i'll follow. Nobody's promised tomorrow. So i'ma love you every night like it's the last time... :
- Jaehan and Zocala :
- Handsome :
- Beautiful :

♡゙ REPLACE TEXT SLIDE 4
- You're the best part :
- If anyone ever asks me what part of my life you are. I will say happily and loudly, "the best part"... : (panjang text sesuaikan dengan yang di katalog)
- I love you so much, Jeje :

♡゙ REPLACE TEXT SLIDE 5
- The romantic side of us :
- Jaehan and Zocala :
- I'm going to love you. I'm going to love you in your weakest moments to your strongest ones... : (panjang text sesuaikan dengan yang di katalog)

♡゙ REPLACE TEXT SLIDE 6
- Zocala loves Jaehan :
- Diagrams of my love for you :
- Spending time with you makes my love grow bigger than ever :
- Every second, minute, hour, day, month, that i spent with you seemed to go fast... : (panjang text sesuaikan dengan yang di katalog)`
    },

    "postcard02": {
        title: "Post Card-02",
        category: "Flipbook, Foods Art, Best Seller",
        price: "Rp15.000",
        images: ["images/4.PNG", "images/4.1.PNG","images/4.2.PNG", "images/4.3.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : FLIPBOOK—Post Card
Price : 15.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text Replace : Replace name only/Buyer/Seller+5.000 IDR 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Your Valentine's gift : (max 4 words) 
- 14 : 
- February : 
- Jaehan : 
- Rachel : 

♡゙ REPLACE TEXT SLIDE 2
- Happy Valentine's : 
- Rachel Allavara : 
- Thank you for being one of the most beautiful parts of my life. Actually, I don't need to wait until February 14 to tell you that I love you very much and that I am grateful to have you... :`
    },

    "teddy": {
        title: "Teddy Pouch",
        category: "Teddy Art, Best Seller",
        price: "Rp15.000",
        images: ["images/5.PNG", "images/5.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : TEDDY POUCH 
Price : 15.000 IDR 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller (7.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- You're everything to me and I love you. I know I can't give you the world, but I can give you my heart, my love, and my affection. I promise to stay true to you and hold on you to for as long as you let me... : (max 400 characters)

- I'll always love you, oca :
- With love, Jaehan : 
- LOVE LETTER : (max 2 words) 

♡゙ REPLACE TEXT SLIDE 2
- SPECIAL GIFT : (max 2 words) 
- For my girl, Oca :
- From your lover, Jaehan :
- You can cuddle the teddy every night :`
    },

    "candle": {
        title: "Candle Light",
        category: "Flower Art, Love Coupon, Best Seller",
        price: "Rp10.000",
        images: ["images/6.PNG", "images/6.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : CANDLE LIGHT
Price : 10.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- YOU ARE MINE FOREVER :
- FOREVERMORE :
- Jaehan :
- Zocala :
- My Sweetheart, your love is the music, that fills my soul, the song that plays in the background of my life. With you, I've found a love that is patient, kind, and unwavering, a love that i will cherish for all eternity :
- Made with love :
- Charming :
- Sunflower :

♡゙ REPLACE TEXT SLIDE 2
- YOU ARE MINE FOREVER :
- Love coupon :
- LOVE : (max. 1 word) 
- Coupon free hug :
- LOVE : (max. 1 word) 
- Coupon free kiss :
- Love coupon :
- Another gift :
- For my Jaehan : (max. 3 words) 
- I love you with all my heart, and that love grows stronger every day. You've brought so much happiness and meaning into my life, and I'm endlessly grateful for every moment we share... : (max 200 characters)
- Your oca :`
    },

    "superboo": {
        title: "Pdf-SuperBoo",
        category: "Ppt/Pdf",
        price: "Rp18.000",
        images: ["images/57.PNG", "images/57.1.PNG", "images/57.2.PNG", "images/57.3.PNG", "images/57.4.PNG", "images/57.5.PNG"],
        recolor: "Unavailable recolor",
        pics: "6 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PDF — SUPER BOO 
Price : 18.000 IDR
Pict   : 6 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+2.000 IDR
Text replace : Replace name only/Buyer/Seller+12.000 IDR
Pdf name :
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- 16/08/2025 :
- Happy birthday :
- My Lovely Shazania : 

♡゙  REPLACE TEXT SLIDE 2
- Pretty :
- Today we remember the day you were born :
- Girl : 

♡゙ REPLACE TEXT SLIDE 3
- Please read till the end :
- You are the most amazing person I have ever met in my life and today we celebrate your happy day with your new age. What I really want to say is, happy birthday!... :
- Shasa :
- Love sign, Oca :

♡゙ REPLACE TEXT SLIDE 4
- Hope that in your new age you are blessed by God, given more happiness than last year and surrounded by good people who help you to grow better :
- Si centil :

♡゙ REPLACE TEXT SLIDE 5
- I will always celebrate the smallest good thing you do. I will continue to be with you to help you grow into a better version of yourself :
- Oca :
- Shasa :
- I pray for many (good) things for you even outside of your birthday aka every day :

♡゙ REPLACE TEXT SLIDE 6
- Finally, for a small gift that I hope you like, I pray that you are always protected by God and given good health as long as you live... :`
    },

    "newpage": {
        title: "New Page",
        category: "Card Letter, Best Seller",
        price: "Rp7.000",
        images: ["images/7.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : NEW PAGE
Price : 7.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+7.000
Payment : Qris

♡゙ REPLACE TEXT 
- DEAR BOYFIE :
- I just wanna let you know that i'm thinking about you and you're always in my mind :
- NEW PAGE :
- Zocala loves Jaehan :
- I'm so lucky having you in my life and i'm so glad i found you. i love you more than word can say. Thank you for making me happy everyday, my Jae! :
- Jae :
- Oca :
- You're my whole world. You will always be the person i love the most in the world and i'm grateful everyday that i can call you mine... : (panjang text sesuaikan dengan yang di katalog)
- I LOVE YOU : (max 3 words) 
- Songs that remind me of Jaehan! :
1.
2.
3.
- For my Jae :
- From your Oca :`
    },

    "onlysunshine": {
        title: "Only Sunshine",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/8.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ONLY SUNSHINE
Price : 6.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (7.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- YOU'RE MY SUNSHINE :
- My only sunhine :
- You're the one and only! :
- Say cheese : 
- Zocala :
- Girlfie :
- Say cheese :
- Akash :
- Boyfie :
- I'm so happy to spend so much time with you and i cherish every moment. sometimes I wonder how come everything I do with you feels so much more exciting?... : (max 400 characters)`
    },

    "lovepage": {
        title: "Love Page",
        category: "Flower Art, Best Seller",
        price: "Rp10.000",
        images: ["images/9.PNG", "images/9.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE PAGE
Price : 10.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Special gift, delivered with love :
- For you, Akash :
- I love you :
- You are someone i always want to make happy. Thank you for still being here with me... : (Max 170 characters) 
- From me, Bluffa :
- This is you :
- So cute :
- Page 1 | soulmate :

♡゙ REPLACE TEXT SLIDE 2
- Special gift, delivered with love :
- Akash :
- You're my love :
- Bluffa :
- You're my heart :
- I think that there is nothing missing from our current relationship. We complement each other, always give encouragement... : (Max 400 characters)
- Our story :
- Page 2 | soulmate :`
    },

    "sweetsary": {
        title: "Pdf-Sweetsary",
        category: "Ppt/Pdf, Best Seller",
        price: "Rp18.000",
        images: ["images/56.PNG", "images/56.1.PNG", "images/56.2.PNG", "images/56.3.PNG", "images/56.4.PNG", "images/56.5.PNG"],
        recolor: "Unavailable recolor",
        pics: "8 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : PDF — SWEETSARY
Price : 18.000 IDR
Pict   : 8 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+2.500 IDR
Text replace : Replace name only/Buyer/Seller+12.000 IDR
Pdf name :
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- SWEETEST MENSIVERSARY :
- Zocala and Jaehan :
- I'm so excited to show you this gift. It's all about us. About me and you loving each other. About expressing love on our happy day : 
- My love for you :

♡゙  REPLACE TEXT SLIDE 2
- Hey, My Love :
- What I never expected was to be with you this far. I cherish every second, minute, and hour that I spend with you... :

♡゙ REPLACE TEXT SLIDE 3
- Zocala loves Jaehan :
- You and me will never be over :

♡゙ REPLACE TEXT SLIDE 4
- Beautiful girl, Loves cats a lot and Jaehan too!, Cries and laughs easily :
- Look at us!! we look so good together :
- Handsome man, Loves Zocala's silly behavior, Full of patience :

♡゙ REPLACE TEXT SLIDE 5
- Mensiversary Letter :
- For us : (max 2 words) 
- I hope we can stay together for a long time. Support each other and love each other under any circumstances... :
- From me : (max 2 words) 

♡゙ REPLACE TEXT SLIDE 6
- When I say I love you forever, I don't mean just on the good days when the sun shines and everything is easy... :
- THE END OF THIS PAGE :
- See you next month! :`
    },

    "bestgift": {
        title: "Best Gift",
        category: "Flower Art, Best Seller",
        price: "Rp8.000",
        images: ["images/10.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BEST GIFT
Price : 8.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Muse : 
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT
- This flower is so charming like you :
- I love you : (max 3 words)
- This is for you, Syahzania :
- Your presence in my life brings new things that i never thought of before... : (Max 300 characters)

- With love, Oca :
- Pretty girl!! :
- Your the best gift from. god to me :
- You give me the strength to continue living a life that is sometimes not what i imagined... : (Max 250 characters)`
    },

    "makeawish": {
        title: "Make A Wish",
        category: "Cake Art, Bday Edition, Best Seller",
        price: "Rp10.000",
        images: ["images/11.1.PNG", "images/11.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MAKE A WISH 
Price : 10.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller (4.000 IDR)
Type : Blue/Pink
Payment : Qris

♡゙ REPLACE TEXT 
- Happy birthday :
- Bluffa :
- Make a wish :
- Did you ever think that you could make it this far? you did your best and i'm so proud of you... : (Max 200 characters)

- Wish you all the best :
- From, Akash :`
    },

    "happypill": {
        title: "Happy Pill",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/12.PNG",],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HAPPY PILL
Price : 7.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- First and foremost, thank you for being in my life :
- Zocala :
- Jonathan :
- Thank you for always giving me so many things that I never got from other people. Giving me comfort, love and care. I love you and never thought of leaving you :
- Thank you for loving me so far, understanding me so well and sharing your stories with me so enthusiastically. I love you :`
    },

    "loveletter": {
        title: "Love Letter",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/13.PNG",],
        recolor: "Unavailable recolor",
        pics: "3 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE LETTER
Price : 7.000 IDR
Pict   : 3 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (1.000 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- Only for you :
- DEAREST, JOJO :
- For every care and every beautiful word you give me, bringing me to the clouds with a feeling of happiness. I am happy with you... : (Max 300 characters)

- Your love, Ocaca :`
    },

    "littlestar": {
        title: "Little Star",
        category: "Foods Art, V'Day Edition",
        price: "Rp12.000",
        images: ["images/62.PNG", "images/62.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm:`Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LITTLE STAR
Price : 13.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+4.000 IDR 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Will you be my Valentine? : (max 5 words) 
- To, Jaehan : 
- Made with love only for you, Sweetheart! : 

♡゙ REPLACE TEXT SLIDE 2
- For My Valentine : 
- Happy you : 
- Happy me : 
- My world is so much more colorful since you came into it. Thank you for choosing me and being the most precious person in my life. You are one of the reasons I believe that true love exists. You're the best, and I'm grateful to have you. Happy Valentine's Day, my other half. I love you. Still you, today and forever : 
- Love sign, Rachel : (max 4 words)`
    },

    "macarons": {
        title: "Macarons",
        category: "Foods Art, Best Seller",
        price: "Rp12.000",
        images: ["images/14.2.PNG", "images/14.1.PNG", "images/14.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MACARONS 
Price : 12.000 IDR 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/friend/fams/...)
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Payment : Qris

♡゙ REPLACE TEXT 
- For, Syahzania :
- Please be happy, love : (max 4 words) 
- i didn't expect our meeting to be this sweet. Every sentence you say gives me so much love and affection... :  (max 400 characters) 

- Zocala & Jaehan :
- I'll always love you and always be by ur side :`
    },

    "cutieflower": {
        title: "Cutie Flower",
        category: "Flower Art",
        price: "Rp8.000",
        images: ["images/15.1.PNG",],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : CUTIE FLOWER 
Price : 8.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Type : Pict x Chibi
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Payment : Qris

♡゙ REPLACE TEXT 
- For, Jaehan :
- Full of love : (max 5 words) 
- You gave me the meaning of life. Thank you for all the love and care you gave me sincerely. I ready love you and want to always be with you : 
- I'm not perfect but i will always be by ur side no matter what :
- Zocala :`
    },

    "cutieflower2": {
        title: "Cutie Flower",
        category: "Flower Art, Best Seller",
        price: "Rp8.000",
        images: ["images/15.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : CUTIE FLOWER 
Price : 8.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG
Type : Chibi x Chibi 
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Payment : Qris

♡゙ REPLACE TEXT 
- For, Jaehan :
- Full of love : (max 5 words) 
- You gave me the meaning of life. Thank you for all the love and care you gave me sincerely. I ready love you and want to always be with you : 
- I'm not perfect but i will always be by ur side no matter what :
- Zocala :`
    },

    "marked": {
        title: "Mrrked Gift",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/60.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm:`Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MARKED GIFT
Price : 7.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse + name : 
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller+5.000
Payment : Qris

♡゙ REPLACE TEXT 
- Happy Girlfriend's Day : 
- Marked by Zayad : 
- Dear My girl, Arabella : 
- Here's your gift : 
- Today everyone is celebrating gilrfriend's day. I will also celebrate it and show the world about my most beloved girlfriend which is you... : (max 350 characters)`
    },

    "homiest": {
        title: "Homiest",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/16.PNG", "images/16.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HOMIEST
Price : 6.000 IDR
Pict   : 2 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+4.000 IDR
Type : Navy/Maroon
Payment : Qris

♡゙ REPLACE TEXT
- MY BOYFIE :
- Love letter :
- From, Zocala :
- YOU'RE MY HOME :
- The feeling i get when i'm with you is one of security. I feel so safe that i wanna linger around you... : (max 250 characters) 
- To, Jaehan Pramudya :`
    },

    "myheart": {
        title: "My Heart",
        category: "Card Letter, Love Coupon, Best Seller",
        price: "Rp10.000",
        images: ["images/17.PNG", "images/17.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Majia! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MY HEART
Price : 10.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+7.000 IDR
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Who's someone important to Zocala? :
- JAEHAN PRAMUDYA :
- Someone who means a lot in my life. Someone who always listens to my stories, gives me a lot of attention, love, and also everything I need... : (max 300 characters)

- MY HANDSOME MAN :
- I don't want to say anything other than the fact that I really love you. I've always loved you and my feelings for you haven't changed a bit... : (max 300)

♡゙ REPLACE TEXT SLIDE 2
- What's did Jaehan get as his reward? :
- Free love coupon :
- Free kiss : (max 4 words) 
- Free hug : (max 4 words) 
- Anything you want : (max 4 words) 

- Thank you for your hard work. You did well, my love. I know you always give your best for everything you do and i'm so proud of you :

- Love sign, Zocala :`
    },

    "oneandonly": {
        title: "One And Only",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/55.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ONE AND ONLY 
Price : 6.000 IDR
Pict   : 1 picture required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pict : Buyer only 
Text replace : Replace name only/Buyer/Seller+4.000 IDR
Payment : Qris

♡゙ REPLACE TEXT
- You're one and only : (max 5 words) 
- Present to the most deserving person for this love letter :
- Yesterday until today, you have never changed. You are always full of affection... : (max 300 characters) 

- Handsome boyfie :
- Mine :
- Jaehan Pramudya :
- I love you and will always do :
- by, Zocala :`
    },

    "belongtoyou": {
        title: "Belong To You",
        category: "Icons Couple",
        price: "Rp13.000",
        images: ["images/18.PNG", "images/18.1.PNG",
            "images/18.2.PNG", "images/18.3.PNG"
        ],
        recolor: "Unavailable recolor",
        pics: "5 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ICONS — BELONG TO YOU
Price : 13.000 IDR
Pict   : 5 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (1.500 IDR) 
Text replace : Replace name only/Buyer/Seller (6.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Deondres :
- 100% owned by Zocala :

♡゙ REPLACE TEXT SLIDE 2
- Our polaroid memories :
- Deon and Oca :
- I love our love story. The ups, the downs, the twists and turns, the love that keeps us together through it all. I love knowing that time has made us stronger and brought us even closer together :

♡゙ REPLACE TEXT SLIDE 3
- Choose you :
- Again and again :
- My forever starts with you :
- I love our relationship. It feels safe, warm, and true. The best part? we make each other better... : (max 250 characters) 

♡゙ REPLACE TEXT SLIDE 4
- Zocalana :
- 100% owned by Deon :`
    },

    "violetlove": {
        title: "Violet Love",
        category: "Icons Couple",
        price: "Rp10.000",
        images: ["images/19.PNG", "images/19.1.PNG", "images/19.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "4 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ICONS — VIOLET LOVE
Price : 10.000 IDR
Pict   : 4 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+1.500 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- I'm a beautiful woman who is obsessed with my man. I found him at a time when i needed someone to always hug and love me. I love him :
- Alex :
- Charles's lovetaker :

♡゙ REPLACE TEXT SLIDE 2
- Charles and Alex : (Max 3 words) 
- My best part :
- Everything is very fun and also full of happiness because of you. I love you and want to be with you always. We will fine as long as we are together. So, stay with me :

♡゙ REPLACE TEXT SLIDE 3
- This handsome man is obsessed with his woman. Everything my woman does is amazing and it makes me love her even more :
- Charles :
- Alex's lovetaker :`
    },

    "bestaward": {
        title: "Best Award",
        category: "Certificate, Best Seller",
        price: "Rp6.000",
        images: ["images/20.PNG", "images/20.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : M/F — BEST AWARD
Price : 6.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer 
Payment : Qris

♡゙ REPLACE TEXT 
- PRADIPTA NAEL :
- BEING BLUFFA'S GUARDIAN ANGEL :
- Thanks for being there for me, for listening to me, for never giving up on me, for loving me. I love you to the moon and back :`
    },

    "certifies": {
        title: "Certifies",
        category: "Certificate",
        price: "Rp6.000",
        images: ["images/21.PNG", "images/21.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : M/F — CERTIFIES
Price : 6.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- GIRLFRIEND :
- Akash's lovebot :
- SYAHZANIA :
- You've done the best you could for your life. Thank you for your hard work and passion until now... : (Max 300 characters)`
    },

    "navylove": {
        title: "Navy Love",
        category: "Icons Couple, Best Seller",
        price: "Rp10.000",
        images: ["images/22.PNG", "images/22.1.PNG", "images/22.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ICONS — NAVY LOVE
Price : 10.000 IDR
Pict   : 2 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT SLIDE 1
- Achelya Zocalana :
- Jaehan's lovergirl :

♡゙ REPLACE TEXT SLIDE 2
- Jaehan :
- Zocala :
- MY SAFE PLACE :
- The feeling i get when i'm with you is one of security. I feel so safe that i want to linger around you... : (max 300 characters)

♡゙ REPLACE TEXT SLIDE 3
- Jaehan Pramudya :
- Zocala's loverboy :`
    },

    "sweetflower": {
        title: "Sweet Flower",
        category: "Flower Art, Best Seller",
        price: "Rp8.000",
        images: ["images/23.PNG", "images/23.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : SWEET FLOWER 
Price : 8.000 IDR 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Type : Pink/Purple
Payment : Qris

♡゙ REPLACE TEXT 
- SWEET LETTER : (max 2 words) 
- To, My love, Jaehan :
- For everything in the world you deserve a lot of genuine love. Every word that will be written, describe my feelings well... : (max 500 characters) 

- Love sign, Zocala :`
    },

    "lovedate": {
        title: "Love Date",
        category: "Mensive Edition, Best Seller",
        price: "Rp6.000",
        images: ["images/24.PNG", "images/24.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE DATE
Price : 6.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Type : Blue/Purple
Payment : Qris

♡゙ REPLACE TEXT
- I carry pieces of our past memories :
- Let's date again tonight :
- Jordan : 
- Handsome : 
- Bluffa : 
- Pretty : 
- I love you : (Max 3 words) 
- 14 :
- Happy mensiversary : (Max 3 words) 
- We meet again on the same date but with more and beautiful memory... : (Max 180 characters)

- Sincerely love from me, bluffa :`
    },

    "ticketies": {
        title: "Ticketies",
        category: "Love Coupon",
        price: "Rp5.000",
        images: ["images/25.PNG", "images/25.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : TICKETIES 
Price : 5.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer 
Type : Blue/Pink
Payment : Qris

♡゙ REPLACE TEXT 
- Send this ticket to Zocala :
- Only usable by Jaehan :
- One hundred kisses :
- I hope this ticket can make you feel happier. i love you more :`
    },

    "loveisus": {
        title: "Love Is Us",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/26.PNG", "images/26.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "3 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE IS US
Price : 7.000 IDR
Pict   : 3 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (1.000 IDR) 
Text replace : Replace name only/Buyer/Seller (7.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- Jaehan Pramudya :
- My lovely boy :
- Handsome :
- Love is you and me :
- 01 sept 2024 :
- The first time i saw you and the first time we started a conversation... : (Max 300 characters)
- Jaehan :
- Zocala :
- Boyfriend :
- Girlfriend :
- The thing that makes me most happy right now is the fact that you are already completely mine... : (Max 300 characters)`
    },

    "lovefolder": {
        title: "Love Folder",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/27.PNG", "images/27.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE FOLDER 
Price : 5.000 IDR
Picture : 2 pics required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Recolor : Yes+500p/No
Text replace : Replace name only/Buyer/Seller+3.000
Type : pink/blue
Payment : Qris
Note for seller : 

♡゙ REPLACE TEXT 
- You're someone who has a soft heart and warm embrace. You give me a lot of positive energy and encouragement. I'm lucky to have met you : 
- The love of my life : (max 4 words) 
- Kita mau kemana lagi? : 
- Ke toko eskrim kesukaan kamu! : 
- WE ARE : 
- Couple of the year :`
    },

    "lovestar": {
        title: "Love Star",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/28.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE STAR
Price : 5.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- THE LOVE OF MY LIFE :
- Zocala :
- Jae's pretty girl :
- Jaehan :
- Oca'a handsome boy :
- Everyone says that loving someone requires a reason. However, I love you for no reason, I admire you for no reason either. Even when I first saw you... : (max 200 characters)`
    },

    "yellowpage": {
        title: "Yellow Page",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/29.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : YELLOW PAGE
Price : 5.000 IDR

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pict : Buyer only 
Text replace : Replace name only/Buyer 
Payment : Qris

♡゙ REPLACE TEXT 
- National Girlfriend Day :
- Kajes : (Only 1 word) 
- Fr, Your bf, Javias :
- To the person i love the most who never gets tired of me. Always giving me comfort and sincerely love. I love you. I always love you :`
    },

    "bearcouple": {
        title: "Bear Couple",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/30.PNG", "images/30.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BEAR COUPLE
Price : 5.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Type : Blue/Pink
Payment : Qris

♡゙ REPLACE TEXT
- ZOCALA :
- You're my pumpkin :
- JAEHAN :
- You're my sweetiepie :
- Reasons why i love you :
- You always shine like the sun in the morning that gives warmth. You always love me beautifully... : (max 170 characters)`
    },

    "romanticlove": {
        title: "Romantic Love",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/31.PNG", "images/3.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "4 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ROMANTIC LOVE 
Price : 6.000 IDR
Pict   : 4 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller+1.500 IDR
Text replace : Replace name only/Buyer/Seller+4.000 IDR
Type : Blue/Pink
Payment : Qris

♡゙ REPLACE TEXT
- Jordan :
- Zocala :
- ROMANTIC LOVE :
- I feel safe when i'm with you. I also feel very loved at the same time. Thank you for being the best version of yourself... : (max 250 characters)`
    },

    "bluelove": {
        title: "Blue Love",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/32.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BLUE LOVE
Price : 6.000 IDR
Pict   : 2 pictures required

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- Mingyu :
- Handsome boy :
- Zocala :
- Pretty girl :
- My everything :
- You changed my persfective on love. I admire you every day :
- I love that we always try to keep in touch and feel sad when we have to end... : (max 150 characters)`
    },

    "textlove": {
        title: "Text Love",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/33.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : TEXT LOVE 
Price : 6.000 IDR
Pict   : 2 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller+500 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT
- I don't really have muct to say, it's just that i wanna keep sending you love messages :
- Your girlfie, Oca :
- My boyfie, Jaehan :
- I love you so bad :
- Chit chat wimme everyday :
- I know we've been trought a lot of time together but i still feel comfortable when i'm with you... : (max 250 characters)`
    },

    "adoreyou": {
        title: "Adore You",
        category: "Card Letter",
        price: "Rp4.000",
        images: ["images/34.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : ADORE YOU
Price : 4.000 IDR
Pict   : 1 picture required

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pict : Buyer only 
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- GISELLE :
- You are very beautiful. You are very kind. You are full of love and warmth. You are also full of sweet care... : (max 250 characters)`
    },

    "youandme": {
        title: "You And Me",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/35.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : YOU AND ME 
Price : 6.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- ABOUT YOU AND ME :
- Zocala's spooky bear :
- Jaehan's cutie bunny :
- Our list date 
  1. (max 5 words) 
  2.
  3.
  4.
  5.
  6.
- I didn't expect that we could still be together until now. We have done a lot of things including doing things... : (max 200 characters) 

- I really enjoyed my time with you. Going through many things while holding hands. I love you today, tomorrow and forever :`
    },

    "anot": {
        title: "A Not So Love Letter",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/36.PNG"],
        recolor: "Unavailable recolor",
        pics: "3 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : A NOT SO LOVE LETTER 
Price : 6.000 IDR
Pict   : 3 pictures required

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (1.000 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- A NOT SO LOVE LETTER :
- My love, bluffa :
- You didn't have to do anything to make me fall for you. I didn't fall. for you because of what you could or couldn't do for me... : (max 350 characters) 
- Your bf, Jaehyun :`
    },

    "aletter": {
        title: "A Letter",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/37.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : A LETTER
Price : 5.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- A LETTER TO YOU :
- From cala :
- To zidan :
- The first thing i want to say is thank you and the most i want to know is that i really love you... : (Max 350 character) 

- Friday, 22/09/23 :`
    },

    "lovecoupon": {
        title: "Love Coupon",
        category: "Love Coupon, Best Seller",
        price: "Rp5.000",
        images: ["images/38.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE COUPON 
Price : 5.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer 
Payment : Qris

♡゙ REPLACE TEXT 
- CUDDLE AND KISS : (max 3 words) 
- Only Jaehan can use this love coupon :
- Applies in various situations :
- WITH LOVE, ZOCALA :`
    },

    "mybeloved": {
        title: "My Beloved",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/39.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : MY BELOVED
Price : 6.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- My beloved, taehyung : (max 3 words)
- I will be grateful every day i have you in my life because so many things could have kept... : (max 300 characters) 

- Someone who’s grateful to have you :
- I'mm zocalana. I will be your best support system :
- Taehyung :
- You are the best gift from god for my life :
- I love you without a reason :`
    },

    "lovenotes": {
        title: "Love Notes",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/40.PNG", "images/40.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE NOTES 
Price : 7.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/fams/friend/etc) 
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- JAEHAN :
- Your lil kitten, Cala :
- This is how i feel about you :
- My prince : (max 2 kata) 
- Where shoukd i start? Umm okay i'll start form the beginning of my feelings for you... : (max 350 characters)`
    },

    "lovealbum": {
        title: "Love Album",
        category: "Card Letter, Best Seller",
        price: "Rp6.000",
        images: ["images/41.PNG"],
        recolor: "Unavailable recolor",
        pics: "6 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE ALBUM
Price : 6.000 IDR
Pict   : 6 pictures required

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller+2.000 IDR
Text replace : Replace name only/Buyer/Seller+6.000 IDR
Payment : Qris

♡゙ REPLACE TEXT
- LOVE ALBUM :
- BLUFFA :
- MARKIE :
- On this page i will tell you a little bit about my feelings. From the moment we met until today... : 
- When i am with you nothing else matters and there is only you and i : 
- Nothing in the world compares to our love because there is no one else like you on earth :`
    },

    "lovebear": {
        title: "Love Bear",
        category: "Card Letter",
        price: "Rp4.000",
        images: ["images/42.PNG", "images/42.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVE BEAR
Price : 4.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST (PILIH SALAH SATU) 
In rush : Yes (...)hour after pay/No
Pict : Buyer only
Type : Brown/Pink
Text replace : Replace name only/Buyer/Seller+5.000 IDR
Payment : Qris

♡゙ REPLACE TEXT 
- LOVE LETTER :
- I love you, i really do. I love you more than i have ever found a way to say to you. Meeting you become one of the most beautiful destiny for me... : (max 500 characters) 

- Zocala :
- From, Jaehan :`
    },

    "beatingheart": {
        title: "Beating Heart",
        category: "Card Letter",
        price: "Rp6.000",
        images: ["images/43.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BEATING HEART 
Price : 6.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer
Payment : Qris

♡゙ REPLACE TEXT 
- Beating heart :
- JAEHAN :
- ZOCALA :
- Sunshine
-  Sunshine protector :
- I love you so much. Today, tomorrow and forever :
- 14 january :
- First we meet : max 3 kata
- I still remember : max 3 kata
- I'm yours! No refunds. Sorry about that :
- I called the police the police because you steal my heart :`
    },

    "happyhappiest": {
        title: "Happy Happiest",
        category: "Bday Edition",
        price: "Rp6.000",
        images: ["images/44.PNG", "images/44.1.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : HAPPY HAPPIEST 
Price : 6.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse : 
Pict : Buyer only
Type : 1/2
Text replace : Replace name only/Buyer/Seller (4.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- Happy happy happiest birthday to the love of my life!! Today is your day. The day you come into existence... : (max 250 characters) 

- Your love, Zocala :
- JAYIE :`
    },

    "tictactoe": {
        title: "Tic Tac Toe",
        category: "Certificate, Best Seller",
        price: "Rp4.000",
        images: ["images/45.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : TIC TAC TOE
Price : 4.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/friend/fams/...)
Text replace : Replace name only/Buyer/Seller (2.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- JAEHAN PRAMUDYA :
- Thank you for being in this world. Give a lot of color in my life. I love you more more more bub! :

- From Zocala :`
    },

    "lovelysary": {
        title: "Lovelysary",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/46.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : LOVELYSARY 
Price : 5.000 IDR
Pict   : 2 picturea required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Pair : (name + muse) x (name + muse)
Pict : Buyer/Seller (500 IDR) 
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- LOVELY MENSIVERSARY :
- let us make a pledge to love each other until our last day. In love with you now and forever :

- i could not finish this letter if i described all my love for you... : (max 200 characters) 

- I love you :
- JAEHAN and ZOCALA :`
    },

    "mwite": {
        title: "M-White Letter",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/47.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : M — WHITE LETTER 
Price : 5.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse : 
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- You're important to me :
- JAEHAN :
- MY HANDSOME BOYFRIEND :
- I love you with all my heart and you mean the absolute world to me... : (max 400 characters) 

- My favourite letter J :`
    },

    "fwite": {
        title: "F-White Letter",
        category: "Card Letter",
        price: "Rp5.000",
        images: ["images/48.PNG"],
        recolor: "Unavailable recolor",
        pics: "1 pict required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : F — WHITE LETTER 
Price : 5.000 IDR
Pict   : 1 picture required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Muse : 
Pict : Buyer only
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT 
- ZOCALA :
- YOUR PRETTY GIRLFRIEND :
- I still have many flaws in me that sometimes make me feel bad for you... : (max 400 characters) 

- I love you unconditionally and endlessly my love! :`
    },

    "journaldate": {
        title: "Journal Date Ideas",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/49.PNG"],
        recolor: "Unavailable recolor",
        pics: "2 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : JOURNAL DATE IDEAS 
Price : 7.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/friend/fams/...)
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Buyer only 
Payment : Qris

♡゙ REPLACE TEXT 
- Everyday is sunday!! Weekend yappie :
- Food date :
- JENARA :
- Our date ideas :
- Loving mandu,cake and jaegar :
- Go out to get ice cream :
- Go for drive :
- Go to bakery :
- Watch a movie :
- Next, cook something together :
- JAEGAR :
- Coffee, jenara, jenara :`
    },

    "journalh": {
        title: "Journal Happily",
        category: "Card Letter",
        price: "Rp7.000",
        images: ["images/50.PNG"],
        recolor: "Unavailable recolor",
        pics: "3 pics required",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : JOURNAL DATE IDEAS 
Price : 7.000 IDR
Pict   : 2 pictures required 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/friend/fams/...)
Pair : (name + muse) x (name + muse) 
Pict : Buyer/Seller (500 IDR) 
Text replace : Buyer only 
Payment : Qris

♡゙ REPLACE TEXT 
- Everyday is sunday!! Weekend yappie :
- Food date :
- JENARA :
- Our date ideas :
- Loving mandu,cake and jaegar :
- Go out to get ice cream :
- Go for drive :
- Go to bakery :
- Watch a movie :
- Next, cook something together :
- JAEGAR :
- Coffee, jenara, jenara :`
    },

    "receiptifyy": {
        title: "Yellow Receiptify",
        category: "Receiptify, Best Seller",
        price: "Rp4.000",
        images: ["images/51.PNG", "images/51.1.PNG", "images/51.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : YELLOW RECEIPTIFY
Price : 4.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Buyer only 
Type : Blue/Pink/Purple
Payment : Qris

♡゙ REPLACE TEXT (ALL. CAPSLOCK PLEASE) 
FOR : 
DATE (mm/dd/yyyy) :
5 SONGS REMIND ME OF YOU
1. (TITTLE SONG) - (SINGER)
2.
3.
4.
5.`
    },

    "receiptifyw": {
        title: "White Receiptify",
        category: "Receiptify, Best Seller",
        price: "Rp4.000",
        images: ["images/52.PNG", "images/52.1.PNG", "images/52.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : WHITE RECEIPTIFY
Price : 4.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Buyer only 
Type : Blue/Pink/Yellow
Payment : Qris

♡゙ REPLACE TEXT (ALL. CAPSLOCK PLEASE) 
FOR : 
DATE (mm/dd/yyyy) :
5 SONGS REMIND ME OF YOU
1. (TITTLE SONG) - (SINGER)
2.
3.
4.
5.`
    },

    "top5y": {
        title: "Y-TOP5 ILY",
        category: "Reason ILY, Best Seller",
        price: "Rp.000",
        images: ["images/53.PNG", "images/53.1.PNG", "images/53.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : YELLOW TOP FIVE
Price : 4.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Relationship : BxG/BxB/GxG as (lover/friend/fams/...)
Text replace : Buyer only 
Type : Blue/Pink/Purple
Payment : Qris

♡゙ REPLACE TEXT (ALL CAPSLOCK PLEASE) 
FOR : 
DATE (mm/dd/yyyy) :
TOP 5 REASONS WHY I LOVE YOU
1.
2.
3.
4.
5.`
    },

    "top5w": {
        title: "W-TOP5 ILY",
        category: "Reason ILY, Best Seller",
        price: "Rp.000",
        images: ["images/54.PNG", "images/54.1.PNG", "images/54.2.PNG"],
        recolor: "Unavailable recolor",
        pics: "-",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : WHITE TOP FIVE
Price : 4.000 IDR

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Buyer only 
Type : Blue/Pink/Yellow
Payment : Qris

♡゙ REPLACE TEXT (ALL CAPSLOCK PLEASE) 
FOR : 
DATE (mm/dd/yyyy) :
TOP 5 REASONS WHY I LOVE YOU
1.
2.
3.
4.
5.`
    },

};

// 2. OTOMATIS RENDER SEMUA KARTU PRODUK
Object.keys(dataProduk).forEach(id => {
    const item = dataProduk[id];

    const imgTags = item.images.map((src, i) => 
        `<img src="${src}" alt="${item.title} ${i + 1}">`
    ).join("");

    const mainCategory = item.category.split(",")[0].trim();

    const cardHTML = `
        <div class="product-card" data-id="${id}" data-category="${item.category}">
            <div class="product-image">
                ${imgTags}
            </div>
            <div class="product-info">
                <div class="product-text">
                    <h3 class="product-title">${item.title}</h3>
                    <p class="product-category">${mainCategory}</p>
                </div>
            </div>
            <span class="product-price">${item.price}</span>
        </div>
    `;
    productGrid.insertAdjacentHTML("beforeend", cardHTML);
});

// Ambil elemen kartu & harga SETELAH kartu selesai dibuat di atas
const productCards = document.querySelectorAll(".product-card");
const priceButtons = document.querySelectorAll(".product-price");

// 3. FITUR CAROUSEL (SWIPE HP, HOVER LAPTOP, & TITIK INDIKATOR)
document.querySelectorAll(".product-image").forEach(imageBox => {
    const images = imageBox.querySelectorAll("img");

    if (images.length > 1) {
        const wrapper = document.createElement("div");
        wrapper.className = "image-slider-wrapper";
        imageBox.parentNode.insertBefore(wrapper, imageBox);
        wrapper.appendChild(imageBox);

        const dotsContainer = document.createElement("div");
        dotsContainer.className = "slider-dots";

        images.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.className = index === 0 ? "slider-dot active" : "slider-dot";
            
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                imageBox.scrollTo({
                    left: imageBox.clientWidth * index,
                    behavior: "smooth"
                });
            });

            dotsContainer.appendChild(dot);
        });

        wrapper.appendChild(dotsContainer);
        const dots = dotsContainer.querySelectorAll(".slider-dot");

        imageBox.addEventListener("scroll", () => {
            const activeIndex = Math.round(imageBox.scrollLeft / imageBox.clientWidth);
            dots.forEach((d, i) => {
                d.classList.toggle("active", i === activeIndex);
            });
        });

        wrapper.addEventListener("mouseenter", () => {
            if (window.matchMedia("(hover: hover)").matches) {
                imageBox.scrollTo({
                    left: imageBox.clientWidth,
                    behavior: "smooth"
                });
            }
        });

        wrapper.addEventListener("mouseleave", () => {
            if (window.matchMedia("(hover: hover)").matches) {
                imageBox.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
    }
});

// 4. FILTER KATEGORI & PENCARIAN
let kategoriAktif = "All Item";

function saringProduk() {
    const kataKunci = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const namaProduk = card.querySelector(".product-title").textContent.toLowerCase();

        const kategoriProduk = card.getAttribute("data-category")
            .split(",")
            .map(item => item.trim().toLowerCase());

        const cocokKategori = (kategoriAktif === "All Item") || (kategoriProduk.includes(kategoriAktif.toLowerCase()));
        const cocokPencarian = namaProduk.includes(kataKunci);
        
        card.style.display = (cocokKategori && cocokPencarian) ? "flex" : "none";
    });
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        kategoriAktif = button.textContent.trim();
        saringProduk();
    });
});

searchInput.addEventListener("input", saringProduk);

// 5. POP-UP MODAL PRODUK, TNC, & RUSH FEE
priceButtons.forEach(priceBtn => {
    priceBtn.addEventListener("click", () => {
        const card = priceBtn.closest(".product-card");
        const idProduk = card.getAttribute("data-id");
        const imgSrc = card.querySelector("img").src;
        const title = card.querySelector(".product-title").textContent;
        const category = card.getAttribute("data-category");
        const price = card.querySelector(".product-price").textContent;
        const detail = dataProduk[idProduk];

        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalCategory.textContent = `- ${category}`;
        modalPrice.textContent = price;

        if (detail) {
            modalRecolor.textContent = `- ${detail.recolor}`;
            modalPics.textContent = `- ${detail.pics}`;
            orderFormText.textContent = detail.orderForm;
        }

        waBtn.href = `https://wa.me/${nomorWhatsApp}`;
        teleBtn.href = `https://t.me/${usernameTelegram}`;

        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
});

tncBtn.addEventListener("click", () => tncModal.classList.add("show"));
closeTncModal.addEventListener("click", () => tncModal.classList.remove("show"));
tncModal.addEventListener("click", (e) => {
    if (e.target === tncModal) tncModal.classList.remove("show");
});

rushBtn.addEventListener("click", () => rushModal.classList.add("show"));
closeRushModal.addEventListener("click", () => rushModal.classList.remove("show"));
rushModal.addEventListener("click", (e) => {
    if (e.target === rushModal) rushModal.classList.remove("show");
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(orderFormText.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy Order Form";
        }, 2000);
    });
});