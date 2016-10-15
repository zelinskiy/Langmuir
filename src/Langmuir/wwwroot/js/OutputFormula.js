function OutputFormula() {
    var self = this;
    var htmlNode;
    var savedStates = [];

    this.setup = function (nodeId, initText) {
        htmlNode = $("#" + nodeId);
        $("#" + nodeId).html(initText);
    }

    this.revertChange = function () {
        if (savedStates.length === 0) return;
        htmlNode.html(savedStates.pop());
    }

    this.addSymbol = function (symbol) {
        var oldState = htmlNode.html();
        var newState = oldState + symbol;
        savedStates.push(oldState);
        htmlNode.html(newState);
    }

    this.addSubscript = function () {
        var n = parseInt(prompt("Введите значение индекса"));
        if (!isNaN(n) && n > 1) {
            self.addSymbol("<sub>" + n + "</sub>");
        }
    }
}