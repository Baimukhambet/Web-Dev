alert( null || 2 || undefined ); //result: 2
alert( alert(1) || 2 || alert(3) ); //result: 2
alert( 1 && null && 2 ); //result: null
alert( alert(1) && alert(2) ); //result: 1
alert( null || 2 && 3 || 4 ); //result: 3