 

var ELEMENTS = [
    { name: "Actinium", symbol: "Ac" },
    { name: "Silver", symbol: "Ag" },
    { name: "Aluminium", symbol: "Al" },
    { name: "Americium", symbol: "Am" },
    { name: "Argon", symbol: "Ar" },
    { name: "Arsenic", symbol: "As" },
    { name: "Astatine", symbol: "At" },
    { name: "Gold", symbol: "Au" },
    { name: "Boron", symbol: "B" },
    { name: "Barium", symbol: "Ba" },
    { name: "Beryllium", symbol: "Be" },
    { name: "Bohrium", symbol: "Bh" },
    { name: "Bismuth", symbol: "Bi" },
    { name: "Berkelium", symbol: "Bk" },
    { name: "Bromine", symbol: "Br" },
    { name: "Carbon", symbol: "C" },
    { name: "Calcium", symbol: "Ca" },
    { name: "Cadmium", symbol: "Cd" },
    { name: "Cerium", symbol: "Ce" },
    { name: "Californium", symbol: "Cf" },
    { name: "Chlorine", symbol: "Cl" },
    { name: "Curium", symbol: "Cm" },
    { name: "Copernicium", symbol: "Cn" },
    { name: "Cobalt", symbol: "Co" },
    { name: "Chromium", symbol: "Cr" },
    { name: "Caesium", symbol: "Cs" },
    { name: "Copper", symbol: "Cu" },
    { name: "Dubnium", symbol: "Db" },
    { name: "Darmstadtium", symbol: "Ds" },
    { name: "Dysprosium", symbol: "Dy" },
    { name: "Erbium", symbol: "Er" },
    { name: "Einsteinium", symbol: "Es" },
    { name: "Europium", symbol: "Eu" },
    { name: "Fluorine", symbol: "F" },
    { name: "Iron", symbol: "Fe" },
    { name: "Flerovium", symbol: "Fl" },
    { name: "Fermium", symbol: "Fm" },
    { name: "Francium", symbol: "Fr" },
    { name: "Gallium", symbol: "Ga" },
    { name: "Gadolinium", symbol: "Gd" },
    { name: "Germanium", symbol: "Ge" },
    { name: "Hydrogen", symbol: "H" },
    { name: "Helium", symbol: "He" },
    { name: "Hafnium", symbol: "Hf" },
    { name: "Mercury", symbol: "Hg" },
    { name: "Holmium", symbol: "Ho" },
    { name: "Hassium", symbol: "Hs" },
    { name: "Iodine", symbol: "I" },
    { name: "Indium", symbol: "In" },
    { name: "Iridium", symbol: "Ir" },
    { name: "Potassium", symbol: "K" },
    { name: "Krypton", symbol: "Kr" },
    { name: "Lanthanum", symbol: "La" },
    { name: "Lithium", symbol: "Li" },
    { name: "Lawrencium", symbol: "Lr" },
    { name: "Lutetium", symbol: "Lu" },
    { name: "Livermorium", symbol: "Lv" },
    { name: "Mendelevium", symbol: "Md" },
    { name: "Magnesium", symbol: "Mg" },
    { name: "Manganese", symbol: "Mn" },
    { name: "Molybdenum", symbol: "Mo" },
    { name: "Meitnerium", symbol: "Mt" },
    { name: "Nitrogen", symbol: "N" },
    { name: "Sodium", symbol: "Na" },
    { name: "Niobium", symbol: "Nb" },
    { name: "Neodymium", symbol: "Nd" },
    { name: "Neon", symbol: "Ne" },
    { name: "Nickel", symbol: "Ni" },
    { name: "Nobelium", symbol: "No" },
    { name: "Neptunium", symbol: "Np" },
    { name: "Oxygen", symbol: "O" },
    { name: "Osmium", symbol: "Os" },
    { name: "Phosphorus", symbol: "P" },
    { name: "Protactinium", symbol: "Pa" },
    { name: "Lead", symbol: "Pb" },
    { name: "Palladium", symbol: "Pd" },
    { name: "Promethium", symbol: "Pm" },
    { name: "Polonium", symbol: "Po" },
    { name: "Praseodymium", symbol: "Pr" },
    { name: "Platinum", symbol: "Pt" },
    { name: "Plutonium", symbol: "Pu" },
    { name: "Radium", symbol: "Ra" },
    { name: "Rubidium", symbol: "Rb" },
    { name: "Rhenium", symbol: "Re" },
    { name: "Rutherfordium", symbol: "Rf" },
    { name: "Roentgenium", symbol: "Rg" },
    { name: "Rhodium", symbol: "Rh" },
    { name: "Radon", symbol: "Rn" },
    { name: "Ruthenium", symbol: "Ru" },
    { name: "Sulfur", symbol: "S" },
    { name: "Antimony", symbol: "Sb" },
    { name: "Scandium", symbol: "Sc" },
    { name: "Selenium", symbol: "Se" },
    { name: "Seaborgium", symbol: "Sg" },
    { name: "Silicon", symbol: "Si" },
    { name: "Samarium", symbol: "Sm" },
    { name: "Tin", symbol: "Sn" },
    { name: "Strontium", symbol: "Sr" },
    { name: "Tantalum", symbol: "Ta" },
    { name: "Terbium", symbol: "Tb" },
    { name: "Technetium", symbol: "Tc" },
    { name: "Tellurium", symbol: "Te" },
    { name: "Thorium", symbol: "Th" },
    { name: "Titanium", symbol: "Ti" },
    { name: "Thallium", symbol: "Tl" },
    { name: "Thulium", symbol: "Tm" },
    { name: "Uranium", symbol: "U" },
    { name: "(Ununoctium)", symbol: "Uuo" },
    { name: "(Ununpentium)", symbol: "Uup" },
    { name: "(Ununseptium)", symbol: "Uus" },
    { name: "(Ununtrium)", symbol: "Uut" },
    { name: "Vanadium", symbol: "V" },
    { name: "Tungsten", symbol: "W" },
    { name: "Xenon", symbol: "Xe" },
    { name: "Yttrium", symbol: "Y" },
    { name: "Ytterbium", symbol: "Yb" },
    { name: "Zinc", symbol: "Zn" },
    { name: "Zirconium", symbol: "Zr" }
];

function onElementSelected() {
    alert();
}

function inputChangeHandler(e) {
    filterElements(e.originalEvent.srcElement.value);
}


//TODO: Proper search
//TODO: Переделать этот ужос
function filterElements(pattern) {

    $("#elemsList").html("");
    var elements = ELEMENTS.slice();
    if (pattern !== undefined && pattern !== "") {
        elements = elements.filter(function(el) {
                return el.symbol.toLowerCase().indexOf(pattern.toLowerCase()) +
                    el.name.toLowerCase().indexOf(pattern.toLowerCase()) !==
                    -2;
            })
            .sort(function (a, b) {
                return a.symbol.localeCompare(b.symbol);
            })
            .sort(function (a, b) {
                return a.symbol.length - b.symbol.length;
            });
            
            
            
    }
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        $("#elemsList")
            .append('<button type="button" onclick=\'appendElementToFormula(\"'
            + el.symbol
            + '\")\' class="list-group-item">'
            + el.symbol
            + "<span class=\"pull-right\">"
            + el.name
            + '</span></a>');
    }
}

var appendElementToFormula = function (elem){ }

$(document)
    .ready(function () {

        var outp = new OutputFormula();
        outp.setup("formulaOutput", "");

        $("#revertButton").on("click", outp.revertChange);
        $("#addSubscriptButton").on("click", outp.addSubscript);
        $("#autoCompleteInput").on("input", inputChangeHandler);

        filterElements();

        $(".hasHtmlAppendableToFormula")
            .each(function (i, node) {
                $(node).on("click",
                    function (e) {
                        outp.addSymbol(e.delegateTarget.innerHTML);
                    });
            });

        appendElementToFormula = function (symbol) {
            outp.addSymbol(symbol);
            $("#autoCompleteInput").val("");
            filterElements();
        }


    });