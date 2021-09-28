const expect = require('chai').expect;
const funcs = require('../index');

/*const sum = require('../index');
const sub = require('../subtraction');
const squareOperations = require('../');
const squareArea = require('../squareArea');
const sumOfDigits = require('../sumOfDigits');
const vowels = require('../vowels');
const sumOfStr = require('../sumOfStr');
const longestWordArray = require('../longestWordArray');
const countNumbers = require('../countNumbers');
const revercer = require('../revercer');*/


it('should calculate sum of positives', ()=>{
    expect(funcs.sum(2,2)).eq(4)
});

it('should calculate sum of positives', ()=>{
    expect(funcs.sum(0, 0)).eq(0)
});

it('should calculate sum of positives', ()=>{
    expect(funcs.sum(-10, 2)).eq(-8)
});

it('should calculate sum of positives', ()=>{
    expect(funcs.sum(56,2)).eq(58)
})

it('should calculate sub of positives', ()=>{
    expect(funcs.sub(33,33)).eq(0)
})

it('should calculate sub of positives', ()=>{
    expect(funcs.sub(54,33)).eq(21)
})

it('should calculate sub of positives', ()=>{
    expect(funcs.sub(13,38)).eq(-25)
})

it('should calculate sub of positives', ()=>{
    expect(funcs.sub(20,30)).eq(-10)
})

it('should calculate squareOperations of positives', ()=>{
    expect(funcs.squareOperations(20,2)).eq(100)
})

it('should calculate squareOperations of positives', ()=>{
    expect(funcs.squareOperations(72,93)).eq(1)
})

it('should calculate squareOperations of positives', ()=>{
    expect(funcs.squareOperations(73,11)).eq(44)
})

it('should calculate squareOperations of positives', ()=>{
    expect(funcs.squareOperations(56,72)).eq(1)
})

it('should calculate squareArea of positives', ()=>{
    expect(funcs.squareArea(58,12)).eq(722)
})

it('should calculate squareArea of positives', ()=>{
    expect(funcs.squareArea(17,3)).eq(62)
})

it('should calculate squareArea of positives', ()=>{
    expect(funcs.squareArea(42,24)).eq(379)
})

it('should calculate squareArea of positives', ()=>{
    expect(funcs.squareArea(16,5)).eq(55)
})

it('should calculate sumOfDigits of positives', ()=>{
    expect(funcs.sumOfDigits(16)).eq(7)
})

it('should calculate sumOfDigits of positives', ()=>{
    expect(funcs.sumOfDigits(14)).eq(5)
})

it('should calculate sumOfDigits of positives', ()=>{
    expect(funcs.sumOfDigits(25)).eq(7)
})

it('should calculate sumOfDigits of positives', ()=>{
    expect(funcs.sumOfDigits(54)).eq(9)
})

it('should calculate vowels of positives', ()=>{
    expect(funcs.vowels('Hello world!')).eql('eoo')
})

it('should calculate vowels of positives', ()=>{
    expect(funcs.vowels('how to work')).eq('ooo')
})

it('should calculate vowels of positives', ()=>{
    expect(funcs.vowels('exports property')).eq('eooe')
})

it('should calculate vowels of positives', ()=>{
    expect(funcs.vowels('special property')).eq('eiaoe')
})

it('should calculate sumOfStr of positives', ()=>{
    expect(funcs.sumOfStr('16', '25')).eq('41')
})

it('should calculate sumOfStr of positives', ()=>{
    expect(funcs.sumOfStr('53', '14')).eq('67')
})

it('should calculate sumOfStr of positives', ()=>{
    expect(funcs.sumOfStr('58', '37')).eq('95')
})

it('should calculate sumOfStr of positives', ()=>{
    expect(funcs.sumOfStr('68', '46')).eq('114')
})

it('should calculate longestWordArray of positives', ()=>{
    expect(funcs.longestWordArray(['different', 'prisms'])).eq('different')
})

it('should calculate longestWordArray of positives', ()=>{
    expect(funcs.longestWordArray(['competitors', 'more'])).eq('competitors')
})

it('should calculate longestWordArray of positives', ()=>{
    expect(funcs.longestWordArray(['messages', 'exchanged'])).eq('exchanged')
})

it('should calculate longestWordArray of positives', ()=>{
    expect(funcs.longestWordArray(['communication', 'chatbackend'])).eq('communication')
})

it('should calculate countNumbers of positives', ()=>{
    expect(funcs.countNumbers([6, -12, 'abc', 0, 'bad'])).eq(3)
})

it('should calculate countNumbers of positives', ()=>{
    expect(funcs.countNumbers([23, 'gfd', 'abc', 0, '5'])).eq(2)
})

it('should calculate countNumbers of positives', ()=>{
    expect(funcs.countNumbers(['6', 34, 'vd', 14, 8, 'tyu', 'erg', 34])).eq(4)
})

it('should calculate countNumbers of positives', ()=>{
    expect(funcs.countNumbers(['vfk', 42, 98, 'rth', 5, '345', 51, 'dds', '12', 95])).eq(5)
})

it('should calculate revercer of positives', ()=>{
    expect(funcs.revercer(8625519)).eql(9155268)
})

it('should calculate revercer of positives', ()=>{
    expect(funcs.revercer(119784512)).eq(215487911);
})

it('should calculate revercer of positives', ()=>{
    expect(funcs.revercer(516653)).eq(356615)
})

it('should calculate revercer of positives', ()=>{
    expect(funcs.revercer(1494466)).eq(6644941)
})