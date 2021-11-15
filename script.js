let inputs = document.querySelectorAll('input');

let patterns = {
    username: /^[a-zA-Z0-9]{5,10}$/,
    password: /^[a-zA-Z0-9]{5,10}$/,
    telephone: /^\d{9}$/,
    fullname: /[A-Z][a-z]{1,10} [A-Z][a-z]{1,10}/,
    email: /^([a-z\d\._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
};


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
    });
});




// COMMENT FOR MYSELF / RAZLAGA KORAKOV

// 1. najprej smo ustvarili object patterns. Notri smo kot key-value paire
//    dodali imena polj za inpute, vsakemu smo dolocili svoj pattern-regex.

// 2. ustvarimo var. inputs, ki bo targetiral ALL input queries v HTMLju.

// 3. naslednji korak je dodajanje Eventlistenerja na vsak input
//    - ker je input fieldsov več, uporabimo array method .forEach
//    - torej za vsak input,
//    - dodaj Eventlistener keyup (pomeni zaznaj vsak vpisan char)
//    - (e) je parameter ki smo se ga sami izmislili, pomeni kao event
//    - ta e je ubistvu callback function
//    - naroči da ob VSAKEM keyup dogodku izvede to funkcijo ki sledi
//    - v tem primeru smo naročili:
//    - naj zalaufa validate funkcijo, ki jo gremo zdaj napisat:

// 4. napišemo validate funkcijo, ji damo 2 izmisljena parametra,
//    field in regex.
//    - field pomeni polje, torej al telephone, al name...
//    - regex pa bo pattern, ki sodi k temu fieldu in je v patterns objectu
//    - hočemo VALUE fielda(kar je v fieldu napisano) primerjati z regexom
//    - zato napišemo regex.test(field.value) - test method, ki nam vrne
//      true ali false.

// 5. to funkcijo moremo call-at spodaj, v (e) funkciji
//    - to pomeni da za vsak 'keyup' se bo callala ta funkcija.
//    - vsakič ko bo callana, bo validirala napisano
//    - moremo dat notri 2 parametra, torej value (napisano v polje)
//      in regex pattern , s katerim se bo value primerjal
//    - e.target bo naš field parameter
//    - e.target zazna kar je vnešeno v polje
//    - drugi parameter bo regex, ki je v patterns objectu
//    - za najt tapravi regex, uporabimo naslov
//      patterns[e.target.attributes.name.value].
//    - ta kača najde ime fielda in pol dobimo patterns[ime].

// 6. torej zdej trenutno ko vpisujemo stringe v input field,
//    se v ozadju to validata in funkcija sproducira TRUE ali FALSE
//    apmak trenutno se s tem se nic ne zgodi.
//    Zato nardimo še if statement:
//    - če bo value true (se ujema z regexom), dodamo inputu 
//      class = valid.
//    - če bo value false, inputu dodamo class = invalid.
//    - to nardimo z ukazom field.className = '...';

// 7. v CSSu lahko dodamo barve, ko je class valid, se obarva zeleno,
//    ko je invalid, se obarva rdece.
//    Ce hocemo da deluje, moremo v CSS v input tag dodati outline: none;

// 8. lahko tudi text pod fieldi skrijemo, da se pokaže samo ko
//     je value invalid, drugače pa da je skrit:
//    - v CSSju dodamo paragraf input + p {}
//    - ta bo stylal vse p-je ki so zraven input taga
//    - torej niso nestani v njemu, ampak so zraven.
//    - v ta paragraf nastimamo default parametre
//    - default bo opacity 0 (skrito) in height 0 (input fieldi
//      se bojo premaknili skupaj)
//    - pol pa spodaj naridmo class za input.invalid + p
//    - ta bo stylal vsak p zraven inputa, ki bo imel invalid class
//    - vanj vnesemo opacity 1 in height: auto
//    - ta 2 ukaza bosta overwritala default 0, ko bo class invalid
