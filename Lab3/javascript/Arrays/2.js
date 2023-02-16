let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length() / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rae", "Reggae");