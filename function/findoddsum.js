  function isLeapYear (year) {
    const remainder = year % 4;
    if (remainder === 0) {
      console.log(`Your year, , is a leap year.`);
    } else {
      console.log(`Your year, , is not a leap year.`);
    }
  }

  const years = [2025, 1960, 2024, 4568];
  years = isLeapYear();
  allyears.forEach(year => isLeapYear(year));


//  did not solve 