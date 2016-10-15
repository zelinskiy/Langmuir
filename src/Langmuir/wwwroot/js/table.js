

$(document)
    .ready(function () {

        var outp = new OutputFormula();
        outp.setup("formulaOutput", "");

        $("#revertButton").on("click", outp.revertChange);
        $("#addSubscriptButton").on("click", outp.addSubscript);

        $("#periodicSystem tbody  td")
            .each(function (i, n) {
                
                $(n).addClass("btn");
                $(n).addClass("chemElem");
                $(n).addClass("btn-default");

                if ($(n).html() === "&nbsp;") {
                    $(n).addClass("disabled");
                } else {
                    $(n).addClass("hasHtmlAppendableToFormula");
                }
            });

        $(".hasHtmlAppendableToFormula")
            .each(function (i, node) {
                console.log(node);
                $(node).on("click",
                    function (e) {
                        outp.addSymbol(e.delegateTarget.innerHTML);
                    });
            });

    });