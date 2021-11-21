it('should calculate the monthly rate correctly', function() {
    let values = {
        amount: 10000,
        years: 20,
        rate: 10
    };
    expect(calculateMonthlyPayment(values)).toEqual('96.50');
});


it("should return a result with 2 decimal places", function() {
    let values = {
        amount: 10000,
        years: 20,
        rate: 10
    };
    expect(calculateMonthlyPayment(values)).toEqual('96.50');

});