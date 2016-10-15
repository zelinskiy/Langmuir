

var ELEMENTS = [
    "Ac","Ag", "Al", "Am", "Ar", "As", "At", "Au", "B", "Ba", "Be", "Bh", "Bi", "Bk", "Br", "C", "Ca", "Cd", "Ce", "Cf",
    "Cl","Cm", "Cn", "Co", "Cr", "Cs", "Cu", "Db", "Ds", "Dy", "Er", "Es", "Eu", "F", "Fe", "Fl", "Fm", "Fr", "Ga", "Gd",
    "Ge", "H", "He", "Hf", "Hg", "Ho", "Hs", "I", "In", "Ir", "K", "Kr", "La", "Li", "Lr", "Lu", "Lv", "Md", "Mg", "Mn",
    "Mo", "Mt", "N", "Na", "Nb", "Nd", "Ne", "Ni", "No", "Np", "O", "Os", "P", "Pa", "Pb", "Pd", "Pm", "Po", "Pr", "Pt",
    "Pu", "Ra", "Rb", "Re", "Rf", "Rg", "Rh", "Rn", "Ru", "S", "Sb", "Sc", "Se", "Sg", "Si", "Sm", "Sn", "Sr", "Ta",
    "Tb", "Tc", "Te", "Th", "Ti", "Tl", "Tm", "U", "Uuo", "Uup", "Uus", "Uut", "V", "W", "Xe", "Y", "Yb", "Zn", "Zr"
];

function onElementSelected() {
    alert();
}

function inputChangeHandler(e) {
    filterElements(e.originalEvent.srcElement.value);
}


//TODO: Proper search
function filterElements(pattern) {

    $("#elemsList").html("");
    var elements = ELEMENTS.slice();
    if (pattern !== undefined && pattern !== "") {
        elements = elements.filter(function(el) {
            return el.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
        });
    }
    for (var i = 0; i < elements.length; i++) {
        $("#elemsList")
            .append('<button type="button" class="list-group-item hasHtmlAppendableToFormula">' + elements[i] + '</a>');
    }
    reloadHandlers();
}

var reloadHandlers = function () {};
$(document)
    .ready(function () {

        var outp = new OutputFormula();
        outp.setup("formulaOutput", "");

        $("#revertButton").on("click", outp.revertChange);
        $("#addSubscriptButton").on("click", outp.addSubscript);
        $("#autoCompleteInput").on("input", inputChangeHandler);

        filterElements();
        reloadHandlers = function() {
            $(".hasHtmlAppendableToFormula")
               .each(function (i, node) {
                   $(node).on("click",
                       function (e) {
                           outp.addSymbol(e.delegateTarget.innerHTML);
                       });
               });
        }
        reloadHandlers();


    });