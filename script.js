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
    "Kirby: Nightmare in Dreamland",
    "Bad Time Simulator"
];
var HMR3_optionValue = [
    "#", 
    "customlink",
    "https://l-spec875.github.io/htmls.github.io/index.html",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20Unbound%20(v2.1.1.1).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20GS%20Chronicles.zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20-%20Emerald%20Version%20(USA%2C%20Europe).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20-%20LeafGreen%20Version%20(USA%2C%20Europe)%20(Rev%201).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/3541%20-%20Pokemon%20Platinum%20Version%20(US)(XenoPhobia).7z",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/0434%20-%20New%20Super%20Mario%20Bros.%20(U)(Psyfer).7z",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/0168%20-%20Mario%20Kart%20DS%20(U)(SCZ).7z",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Kirby%20%26%20The%20Amazing%20Mirror%20(USA).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Kirby%20-%20Nightmare%20in%20Dreamland%20(U)%20%5B!%5D.zip",
    "https://l-spec875.github.io/html2.github.io/index.html",
    
    

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
"Bad Time Simulator",

]

var HMR3_Multifile = [
"EaglerCraft 1.12 WASM",
    
]


