const profitGenerator = (recvPlan) => {
  let investedAmount = Number(invested);
  let standardPlanValue = (investedAmount * 6) / 100;
  let megaPlanValue = (investedAmount * 8) / 100;
  let deluxePlanValue = (investedAmount * 10) / 100;
  let vipPlanValue = (investedAmount * 15) / 100;

  let userPlan = recvPlan;
  // let generatedProfit = 0;

  if (investedAmount < 5100 && userPlan == "standard") {
    // generatedProfit = standardPlanValue;
    return { invPlan: recvPlan, value: standardPlanValue };
  }

  if (
    investedAmount >= 5100 &&
    investedAmount <= 10000 &&
    userPlan.toLowerCase() == "mega"
  ) {
    // generatedProfit = megaPlanValue;
    return { invPlan: recvPlan, value: megaPlanValue };
  }

  if (
    investedAmount >= 10100 &&
    investedAmount <= 20000 &&
    userPlan.toLowerCase() == "deluxe"
  ) {
    // generatedProfit = deluxePlanValue;
    return { invPlan: recvPlan, value: deluxePlanValue };
  }

  if (investedAmount > 21000 && userPlan.toLowerCase() == "vip") {
    // generatedProfit = vipPlanValue;
    return { invPlan: recvPlan, value: vipPlanValue };
  }
  // return { userPlan, generatedProfit };
};

const time = 1000 * 5;
let num = 0;
const intervalId = setInterval(() => {
  let data = profitGenerator("standard", (invested = 3000));

  console.log(data);
}, time);
