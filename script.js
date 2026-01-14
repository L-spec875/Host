// document.title and favicon from your original file
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
    "Pokemon Too Many Types",
    "Pokemon Emerald",
    "Pokemon Leafgreen",
    "Pokemon Platinum",
    "Pokemon SoulSilver",
    "New Super Mario Bros.",
    "Mario Kart DS",
    "Kirby & The Amazing Mirror",
    "Kirby: Nightmare in Dreamland",
    "Kirby Super Star Ultra",
    "Bad Time Simulator",
    "Super Smash Flash",
    "The Binding Of Isaac",
    "Undertale Yellow",
    "Pokemon R.O.W.E",
    "2048",
    "Breaking the Bank",
    "Stealing the Diamond",
    "Escaping the Prison",
    "Run 3",
];

var HMR3_optionValue = [
    "#",
    "customlink",
    "https://l-spec875.github.io/htmls.github.io/index.html",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20Unbound%20(v2.1.1.1).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20GS%20Chronicles.zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@1ca1067c43d9f27e29783d60494e4e9af1dd4f29/games/Too%20many%20types.zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20-%20Emerald%20Version%20(USA%2C%20Europe).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Pokemon%20-%20LeafGreen%20Version%20(USA%2C%20Europe)%20(Rev%201).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/3541%20-%20Pokemon%20Platinum%20Version%20(US)(XenoPhobia).7z",
    "https://raw.githack.com/L-spec875/Host/851d85268402a8c20cf2231c837b1db6a633372e/games/Pokemon%20-%20SoulSilver%20Version%20(USA).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/0434%20-%20New%20Super%20Mario%20Bros.%20(U)(Psyfer).7z",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484ed3f942190791438340cddf41c8835/games/0168%20-%20Mario%20Kart%20DS%20(U)(SCZ).7z",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Kirby%20%26%20The%20Amazing%20Mirror%20(USA).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@b09bfabe9484f8219f2a4106b78285b1c7e533a5/games/Kirby%20-%20Nightmare%20in%20Dreamland%20(U)%20%5B!%5D.zip",
    "https://raw.githack.com/L-spec875/Host/851d85268402a8c20cf2231c837b1db6a633372e/games/Kirby%20Super%20Star%20Ultra%20(USA).zip",
    "https://l-spec875.github.io/html2.github.io/index.html",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@1ca1067c43d9f27e29783d60494e4e9af1dd4f29/games/SuperSmash.swf",
    "https://l-spec875.github.io/htmls.github.io/The%20Binding%20of%20Isaac.swf",
    "https://l-spec875.github.io/htmls.github.io/yellow.html",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@df0eff7f7b0938c993dc1ace38decb1aaa4fbb4e/games/Pok%C3%A9mon%20R.O.W.E.%20(2.0.8.1).zip",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@006bb55ac1ed9e814c139291c2943424711a25d1/games/2048.swf",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@006bb55ac1ed9e814c139291c2943424711a25d1/games/HS%20breaking%20the%20bank.swf",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@006bb55ac1ed9e814c139291c2943424711a25d1/games/Henry%20Stickmin%20Diamond.swf",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@006bb55ac1ed9e814c139291c2943424711a25d1/games/escape%20the%20prison%20HS.swf",
    "https://cdn.jsdelivr.net/gh/L-spec875/Host@006bb55ac1ed9e814c139291c2943424711a25d1/games/run3.swf",
];

var flashgames = [
    "Super Smash Flash",
    "The Binding Of Isaac",
    "2048",
    "Breaking the Bank",
    "Stealing the Diamond",
    "Escaping the Prison",
    "Run 3",
]

var HMR3_nds = [
    "Pokemon Platinum",
    "New Super Mario Bros.",
    "Mario Kart DS"
]

var HMR3_arcade = []

var HMR3_N64 = []

var HMR3_NES = []

var HMR3_SNES = []

var HMR3_SEGAMS = []

var HMR3_HTML = []

var HMR3_Multifile = [
    "EaglerCraft 1.12 WASM",
    "Bad Time Simulator",
    "Undertale Yellow",
]

// Populate dropdown when DOM is ready
function populateDropdown() {
    var container = document.getElementById('myDropdown');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    var count = Math.max(HMR3_optionText.length, HMR3_optionValue.length);
    for (var i = 0; i < count; i++) {
        var text = HMR3_optionText[i] || ('Option ' + (i+1));
        var value = HMR3_optionValue[i] || '#';

        var a = document.createElement('a');
        a.href = value === '#' ? '#' : value;
        a.textContent = text;
        a.dataset.value = value;
        // Prevent default navigation so we can handle "customlink" etc.
        a.addEventListener('click', function(e) {
            e.preventDefault();
            handleSelection(this.dataset.value, this.textContent);
        });
        container.appendChild(a);
    }
}

// Handle click on an item
function handleSelection(value, text) {
    if (!value) return;
    if (value === 'customlink') {
        var url = prompt('Enter a custom URL to open:');
        if (url) {
            // basic sanitize: add scheme if missing
            if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) url = 'https://' + url;
            window.open(url, '_blank');
        }
        return;
    }
    if (value === '#' || value === '') {
        // No-op or show message
        console.log('No URL for:', text);
        return;
    }
    // Open the selected URL in a new tab
    window.open(value, '_blank');
}

// Wait until the DOM is ready so getElementById('myDropdown') exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateDropdown);
} else {
    populateDropdown();
}
