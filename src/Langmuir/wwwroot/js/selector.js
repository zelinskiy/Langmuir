﻿
function ElementsGroup(_name, _elements) {

    this.Name = _name;

    var elements = _elements.slice();
    var selectedIndex = 0;

    this.getSelected = function() {
        return elements[selectedIndex];
    }

    this.selectNext = function() {
        selectedIndex = 
            (selectedIndex + 1) 
            % elements.length;
    }

    this.selectPrev = function() {
        var n = (selectedIndex - 1);
        if (n < 0) n = elements.length - 1;
        selectedIndex = n % elements.length;
    }
}


function Selector(_showElementId, _showGroupNameId, _outputElementSelectCallback) {
    var self = this;
    var showElementId = _showElementId;
    var showGroupNameId = _showGroupNameId;
    var outputElementSelectCallback = _outputElementSelectCallback;
    var selectedGroupIndex = 0;

    var groups = [
        new ElementsGroup("Щелочные металлы", ["Li", "Na", "K"]),
        new ElementsGroup("Неметаллы", ["C", "O", "N"]),
        new ElementsGroup("Переходные металлы", ["Ti", "Fe", "Mn"])
    ]

    var showSelectedElem = function () {
        $("#" + showGroupNameId).html(groups[selectedGroupIndex].Name);
        $("#" + showElementId).html(groups[selectedGroupIndex].getSelected());
    }

    var constructor = function () {
        showSelectedElem();
    };

    this.AddToOutput = function() {
        outputElementSelectCallback(groups[selectedGroupIndex].getSelected());
    };


    this.Right = function() {
        selectedGroupIndex = (selectedGroupIndex + 1) % groups.length;
        showSelectedElem();
    };

    this.Left = function() {
        var n = (selectedGroupIndex - 1);
        if (n < 0) n = groups.length - 1;
        selectedGroupIndex = n % groups.length;
        showSelectedElem();
    };

    this.Up = function() {
        groups[selectedGroupIndex].selectPrev();
        showSelectedElem();
    };

    this.Down = function() {
        groups[selectedGroupIndex].selectNext();
        showSelectedElem();
    };

    constructor();
}

$(document)
    .ready(function () {
        var outp = new OutputFormula();
        outp.setup("formulaOutput", "");

        var selector = new Selector("selector", "groupNameLabel", outp.addSymbol);

        $("#upButton").on("click", selector.Up);
        $("#downButton").on("click", selector.Down);
        $("#leftButton").on("click", selector.Left);
        $("#rightButton").on("click", selector.Right);
        $("#addButton").on("click", selector.AddToOutput);

        $("#revertButton").on("click", outp.revertChange);
        $("#addSubscriptButton").on("click", outp.addSubscript);

        $(".hasHtmlAppendableToFormula")
            .each(function (i, node) {
                $(node).on("click",
                    function (e) {
                        outp.addSymbol(e.delegateTarget.innerHTML);
                    });
            });

    });