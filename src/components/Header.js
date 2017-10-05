const { Composite, TextView} = require('tabris');

const DATA = 'HEADER';
module.exports = class Header extends Composite {
    constructor(properties) {
        super(properties);

        this._createUI();
        this._applyLayout();
    }

    _createUI() {
        this.append(
            new TextView({id: 'headerTitle', text: DATA})
        );
    }

    _applyLayout() {
        this.apply({
            '#headerTitle': { background: 'black', alignment: 'center', textColor: 'blue'}
        });
    }

};
