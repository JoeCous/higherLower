const highlow = require('../highlow.js'); 

test ('Number should be between 1 and 6', () => {
    expect(highlow.drawCard1).toBe >= 1; 
}); 

test ('Should contain clubs', () => {
    expect(highlow.deck).toContain('C'); 
}); 
