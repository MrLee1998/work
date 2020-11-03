// for (let i=1; i<=5; i++) {
//     setTimeout( function timer() {
//     console.log( i );
//     }, i*1000 );
//     }

//     for (var i=1; i<=5; i++) {
//         (function(j) {
//         setTimeout( function timer() {
//         console.log( j );
//         }, j*1000 );
//         })( i );
//         }
//         for (let i=1; i<=5; i++) {
//             setTimeout( function timer() {
//             console.log( i );
//             }, i*1000 );
//             }

            function CoolModule() {
                var something = "cool";
                var another = [1, 2, 3];
                function doSomething() {
                console.log( something );
                }
                function doAnother() {
                console.log( another.join( " ! " ) );
                }
                return {
                doSomething: doSomething,
                doAnother: doAnother
                };
                }
                var foo = CoolModule();
                foo.doSomething(); // cool
                foo.doAnother(); // 1 ! 2 ! 3