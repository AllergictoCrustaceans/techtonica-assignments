
var findNum = function(phoneNumber, num) {
    return phoneNumber.length;
};

describe('findNum', function() {
    it('should find one particular number from the phoneNumber parameter', function() {
        expect(findNum(648439, 6).toBe(6));
    });
})


function laziestFunctionMade(phoneNumber, num) {
    if(phoneNumber.includes(num)) {
        return num;
    }
}

