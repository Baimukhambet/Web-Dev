function checkSpam(string){
    return string.toLowerCase().includes('viagra') || string.toLowerCase().includes('xxx');
}

alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam("innocent rabbit"))