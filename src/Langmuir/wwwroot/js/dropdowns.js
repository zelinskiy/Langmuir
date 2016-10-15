


$(document)
    .ready(function () {

        var outp = new OutputFormula();
        outp.setup("formulaOutput", "");

        $("#revertButton").on("click", outp.revertChange);
        $("#addSubscriptButton").on("click", outp.addSubscript);

        $(".hasHtmlAppendableToFormula")
            .each(function (i, node) {
                $(node).on("click",
                    function(e) {
                        outp.addSymbol(e.delegateTarget.innerHTML);
                    });
            });

    });