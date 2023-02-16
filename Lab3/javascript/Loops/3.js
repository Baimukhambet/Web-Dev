for (let i = 0; i < 5; i++) alert( i );
//----------------
for (let i = 0; i < 5; ++i) alert( i );
//both returns until 5, because condition is checked before increment thus pre/post
//fixes don't matter