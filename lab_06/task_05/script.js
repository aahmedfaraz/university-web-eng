const calculateSupply = (age, amount) => {
  const maxAge = 100;
  if (age < maxAge) {
    const perYearAmount = amount / age;
    const amountForRestOfLifeRequired = (maxAge - age) * perYearAmount;
    console.log("===========================================================");
    console.log(`Given => Age : ${age}, Amount : ${amount}`);
    console.log(
      `You will need ${amountForRestOfLifeRequired} to last you\nuntil the ripe old age of ${maxAge}`
    );
  } else {
    console.log("Wrong Input");
  }
};

calculateSupply(20, 40);
calculateSupply(10, 90);
calculateSupply(50, 70);
