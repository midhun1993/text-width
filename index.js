const  { JSDOM } = require('jsdom');
const {createCanvas } = require('canvas');
class WidthAnalyzer {
    constructor(text,config) {
        this.text = text;
        this.config = config;
        let canvas = createCanvas(100, 100);
        this.ctx = canvas.getContext('2d');
    }
    applyConfig() {
        let fontSize = 10;
        if(this.config.fontSize){
            fontSize = this.config.fontSize;
        }
        let font = 'Arial'
        if(this.config.font){
            font = this.config.font;
        }
        this.ctx.font = `${fontSize}px ${font}`;

    }
    getWidth(){
        this.applyConfig();
        return this.ctx.measureText(this.text).width
    }
}

module.exports = function(text, config = {}) {
    let wa = new WidthAnalyzer(text, config);
    return wa.getWidth();
}