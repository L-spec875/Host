document.title = "Infinite Campus"

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://waukeganil.infinitecampus.org/favicon.ico';

var HMR3_optionText = [
    "Please Choose", 
    "Custom URL",
    "EaglerCraft 1.12 WASM",
    "Pokemon Unbound",
    "Pokemon GS Chronicles",
    "Pokemon Emerald",
    "Pokemon Leafgreen",
    "Pokemon Platinum",
    "New Super Mario Bros.",
    "Mario Kart DS",
    "Kirby & The Amazing Mirror",
    "Kirby: Nightmare in Dreamland"
];
var HMR3_optionValue = [
    "#", 
    "customlink",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Eaglercraft%201.12.2.html",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Pokemon%20Unbound%20(v2.1.1.1).zip",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Pokemon%20GS%20Chronicles.zip",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Pokemon%20-%20Emerald%20Version%20(USA%2C%20Europe).zip",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Pokemon%20-%20LeafGreen%20Version%20(USA%2C%20Europe)%20(Rev%201).zip",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/3541%20-%20Pokemon%20Platinum%20Version%20(US)(XenoPhobia).7z",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/0434%20-%20New%20Super%20Mario%20Bros.%20(U)(Psyfer).7z",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/0168%20-%20Mario%20Kart%20DS%20(U)(SCZ).7z",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Kirby%20%26%20The%20Amazing%20Mirror%20(USA).zip",
    "https://rawcdn.githack.com/L-spec875/Host/d8dfb5b32489b8d2973baa57af08cdcc7500f5ad/games/Kirby%20-%20Nightmare%20in%20Dreamland%20(U)%20%5B!%5D.zip"

];

var flashgames = [

]

var HMR3_nds = [
    "Pokemon Platinum",
    "New Super Mario Bros.",
    "Mario Kart DS"
]

var HMR3_arcade = [
 
]

var HMR3_N64 = [

]

var HMR3_NES = [

]

var HMR3_SNES = [


]

var HMR3_SEGAMS = [
    
]

var HMR3_HTML = [
     "EaglerCraft 1.12 WASM"
    

]

var HMR3_Multifile = [

]


