/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let resultlist = [];
  // so now here we have to iterater over the transactions here 
  transactions.forEach(element => {
    // so now here we have to to find index 
    let checkindex = resultlist.findIndex(ele => ele.category == element.category);
    // so  now here if the index is present here 
    if(checkindex > -1){
      // so now here we have to add the value to the price here 
      resultlist[checkindex]["totalspend"] += element.price;
    }
    else{
      // so now here we have to create the new object and push it thier 
      let resultobject = {};
      resultobject["ctegory"] = element.category;
      resultobject["totalspend"] = element.price;
      resultlist.push(resultobject);
    }

    console.log(resultlist);

// so now here we have added the result here 
    return resultlist;
  });
}

module.exports = calculateTotalSpentByCategory;
