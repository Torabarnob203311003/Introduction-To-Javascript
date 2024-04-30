// we can find  some thing in string by includes and index of 

 const lyrics = ' tumi Bondhu kala pakhi a i jno ki';
  const  doesExsits = 'Bondhu';
  const lyricsLowercase = lyrics.toLowerCase()

   console.log(lyricsLowercase.includes(doesExsits.toLowerCase()));// it will return true

    // we can also find by its index 

    console.log(lyrics.indexOf('kala'));

    if(lyrics.indexOf('kala') !== -1){

        console.log('this is available')
    }
    else{

        console.log('this is not available')
    }

    //  also use start with and ends with  method //