// var let const
// var a;
// var a = 'heloo';
// let a;
// let a = 'hedee';
// const a = 0;


//declaration and initialization

// var a; // declare 
// var a = 0; //declare and initialize

// var a = 10; 
// window me add karta hai
// function scoped hota hai
// aap firse declar kr sakte ho same name se and error nhi aayega

// let a ;
// let a = 10; //error

// var is global and function scoped
// let is global , block, function  scoped

// reassignment, redeclaration

// var a = 12;
// a = 43;

// let b = 445;
// b = 342;

/// temporal dead zone --> area jitne me js ko pata to ha ki variable exist karta hat par wo aapko value nahi de sakta

// console.log(a);

// // cannot access before initialization
// let a = 12 ;

// let c = 2;


/// Hoisting impact per type
// hoisting -> ek var ko jb js mein banaate hai to wo var do hisso me toot jaata hai and uska dclare part upparchala jata aht and uska init. part neeche reh jata hai

// var a = undefined; // top

// console.log(a);

// a = 12;



// console.log(a);
// var a = 32; // no error out: undefined


// console.log(a);
// let a = 4;  // error


// var x = 34;// global
// {
//     var x = 3; //block, but doesnot respect block
// }

// console.log(x);  // out: 3

// let a = 34;
// {
//     let a = 2;
//     console.log('inside',a);

    
// }

// console.log('outside',a);


//// data types


// primitives -> aisi saari values jiko copy karne par tume ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint


// reference -> inlo copy larne par real copy nahi milegi but ek reference milega - parent ka
// arrays, objects, function
//  []   ,  {}    ,  ()

//  let a = [1,2,3];
//  let b = a;

//  a.pop()

//  console.log(a);
//  console.log(b);


// '' - single quotes
// "" - double quotes
// `` - backticks

// // string 

// let a = 'heloo'

// // number

// let num = 45;
// num = 34.23;
// num = 45;

// // boolean

// let bo = true;
// bo = false;

// // null -> matlab hai aapne jaan boojh alr loi value nahi di

// let n = null;

// // undefined -> matlab ki aapne ek var banaya aur usey value nahi di to jjo value by default mill wo hai undefined

// let u;

// // symbole -> unique immutable value

// // future me hm koe libraries use karege ab is case me un lib. me kai baar kuchh fields hoti hai jisne similar hum bhi banaa dete hai aur galti se hamari banaai hi fiesds us lib ki original fields ko change kar dete hai

// let sym = Symbol('uid');

// // bigint 

// let b = 9007199254740991n;
// b = b+5n;
 

// // arrays - []

// let a = [1,2,3,4,5]
// let b = a;

// b.pop();

// // objects - {}

// let n = {
//     name: 'hello'
// }

// function - ()



// Dynaminc typing -> js me static type nhi  he and yaha par h dynamic typing jiska matlab hai app data ko change kar skte ho kyuki yaha par dynamic data type hai

// typeof quirks (e.g., typeof null === 'boject')

// type coercion ( == vs === )

// -> concept jisme aapka ek type automatically convert ho jayega

// truthy vs falsy values

// falsy --> 0 false '' null undefined NaN documents.all

// if (null){}

// truthy --> everthing else

// Predict teh result: ture + false, null + 1, 5 + '5' , !!undefined
//                          1   ,       1     ,  55     ,   false

////////////// why NaN is not a number but true
// typeof NaN === 'number'; // true

//////////undefined vs null

// let x;
// console.log(x); /// undefined

// let y = null;
// console.log(y); /// null


// '5' + 1 // '51'
// '5' - 1 // 4

//////////// operators 

// arithmetic , comparsion , logical, assignment , unary, turnary


//// arithmetic
// + - * / % **

// 1 + 2 = 3 
// '5' + 1 = 51

// 4/2 = 2
// 2*2 = 4
// 5%2 = 1 
// 12 - 2 = 10
// 2 ** 3 = 8 

///// comparsion
// == ===
// < > <= >= ! != !== !!

// 12 == 13 // false
// 12 == '12' // true
// 12 === '12' // false

// 12 != 13 // true
// 12 != '12' // false
// 12 !== '12' // true

// 12 > 11 // true
// 12 < 13 // true
// 12 > 11 // false
// 12 <= 12 // true

////////// assignment

// =  += -= *= /= %=

// let a = 12;
// a +=3; // 15
// a -= 2; // 13
// a *= 2 // 26
// a /= 2 // 13
// a %= 2 // 1


/////////// logical 

/// && || ! 

//  true && true -> true 
// false && ture -> false
// true && false -> false
// false && false -> false

// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! true -> false
// ! false -> true

///// unary 

///  + - ! typeof ++  --

// +'5' -> 5
// -5 -> -5
// !23 -> type inverted
// let a = 12;  ++a -> 13 a++ -> 12
// let a = 12; --a -> 11 a-- 12

////////  ternary

// ? :

// condition ?  ture : false;

// 12 > 13 ? true : fasle;



/////////////// typeof and instances


// typeof used with premitive dt
// instance used with references dt



//// typeof null === object
/// typeod [] === object
//// typeof NaN === number


//// let a = 12 
// a instanceof Array === ture
///  a inctanceof number == false
// let b = {} , b instanceof array === ture



















