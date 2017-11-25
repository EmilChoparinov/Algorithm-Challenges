/**
 * Class representing Claire
 */
class Claire{
    /**
     * initializes claires position as 0,0
     */
    constructor(){
        this.x = 0;
        this.y = 0;
    }

    /**
     * get claires x location
     */
    xLocation(){
        return this.x;
    }

    /**
     * get claires y location
     */
    yLocation(){
        return this.y;
    }

    /**
     * reset claires x,y location to 0,0
     * @returns {this} class context
     */
    reset(){
        this.x = 0;
        this.y = 0;
        return this;
    }

    /**
     * moves claire x and y amount from her current position
     * @param {Number} xOffset move on x axis
     * @param {Number} yOffset move on y axis
     * @returns {this} class context
     */
    moveBy(xOffset, yOffset){
        this.x += xOffset;
        this.y += yOffset;
        return this;
    }
}

let claire = new Claire()
claire.reset().moveBy(1,-2).moveBy(3,1)
console.log(claire.xLocation(), claire.yLocation())