const nomorWhatsApp = "083193394842";
const usernameTelegram = "memaayu";

const searchInput = document.querySelector(".search-box input");
const categoryButtons = document.querySelectorAll(".category-item");
const productCards = document.querySelectorAll(".product-card");
const priceButtons = document.querySelectorAll(".product-price");

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalimg = document.getElementById("modalImg");
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

tncBtn.addEventListener("click", () => {
    tncModal.classList.add("show");
});

closeTncModal.addEventListener("click", () => {
    tncModal.classList.remove("show");
});

tncModal.addEventListener("click", (e) => {
    if (e.target === tncModal) {
        tncModal.classList.remove("show");
    }
});

rushBtn.addEventListener("click", () => {
    rushModal.classList.add("show");
});

closeRushModal.addEventListener("click", () => {
    rushModal.classList.remove("show");
});

    rushModal.addEventListener("click", (e) => {
    if (e.target === rushModal) {
        rushModal.classList.remove("show");
    }
});


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
        if (cocokKategori && cocokPencarian) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
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


const dataProduk = {
    "mytotebag": {
        recolor: "available recolor",
        pics: "-",
        orderForm: `Hi, Majia! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

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
        recolor: "unavailable recolor",
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
        recolor: "unavailable recolor",
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
        recolor: "unavailable recolor",
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

    "bearypinkish": {
        recolor: "unavailable recolor",
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

    "lovepack": {
        recolor: "unavailable recolor",
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
        recolor: "unavailable recolor",
        orderForm: `Hi, Memayu! I have read @sweetcardy's terms and conditions t.me/sweetcardy/3052 and would like to place an order. These are my order details. 

Buyer name : (wajib isi) 
Code : BELOVED ONE 
Price : 12.000 IDR 

♡゙ ADD REQUEST 
In rush : Yes (...)hour after pay/No
Text replace : Replace name only/Buyer/Seller (5.000 IDR) 
Payment : Qris

♡゙ REPLACE TEXT
- My beloved one : (max 3 words) 
- JAEHAN PRAMUDYA:
- I love you : (max 3 words) 
- You're my everything : (max 4 words) 
- Oca : (only 1 word) 
- You are the best part of my life, the one who makes my heart race and my soul feel at peace. i'm so blessed to have you, and i can't wait to see what the future holds for us... : (max 300 characters)`
    },

    "hellodonuts": {
        recolor: "unavailable recolor",
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
        recolor: "unavailable recolor",
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

    "purplies": {
        recolor: "unavailable recolor",
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

    "sunshineone": {
        recolor: "unavailable recolor",
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



}


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

        const encodedText = encodeURIComponent(orderFormText.textContent);
        waBtn.href = `https://wa.me/${nomorWhatsApp}`;
        teleBtn.href = `https://t.me/${usernameTelegram}`;

        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(orderFormText.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy Order Form";
        }, 2000);
    });
});