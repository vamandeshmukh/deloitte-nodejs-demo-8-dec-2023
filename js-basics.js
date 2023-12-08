
// console.log('start');

// const getInfo = () => {
//     setTimeout(() => {
//         return 'Job done!';
//     }, 2000);
// };

// let update = getInfo();

// console.log(update);



// // old js 
// function fun2() { }

// // modern js 
// const fun1 = () => { };



// const fun = (arg) => {
//     console.log(arg * 2); // number 
//     // console.log(arg.info); // object  
// };

// fun(2); // anonymous variable 

// let num = 3; // named variable 
// fun(num);

// // fun({ info: 'some value' });
// // fun(() => { });

// const fun = (arg) => {
//     console.log('fun function called');
//     // console.log(arg * 2); // number 
//     // console.log(arg.info); // object  
//     arg(); // function as argument to this funciton - function call 
// };

// // fun(2); // anonymous variable
// // let num = 3;
// // fun(num);
// // fun({ info: 'some value' });

// const callBackFun = () => {
//     console.log('callback function called');
// };

// fun(callBackFun);

// // fun(() => { });


// const fun = (arg) => {
//     console.log('fun function called');
//     arg();
// };

// // const callBackFun = () => {
// //     console.log('callback function called');
// // };
// // fun(callBackFun);

// fun(() => { console.log('anonymous funciton called'); });


// console.log('start');

// const getInfo = () => {
//     setTimeout(() => {
//         return 'Job done!';
//     }, 2000);
// };

// let update = getInfo();

// console.log(update);


// JS is an asynchronous language 

// ===========================
// problems of asynchronous JS 
// ===========================

// const getInfo = () => {
//     setTimeout(() => {
//         return { info: 'Job done!' };
//     }, 2000);
// };

// let update = getInfo();
// console.log(update.info);
// // TypeError: Cannot read properties of undefined (reading 'info')


// ===============================================
// solution to asynchronous JS - callback function  
// ===============================================

const getInfo = (arg) => {
    setTimeout(() => {
        arg({ info: 'Job done!' });
    }, 2000);
};

getInfo((abc) => { console.log(abc.info); });




// Node == NodeJS 
// Express == ExpressJS 
// React == ReactJS 

// Angular =! AngularJS 


















