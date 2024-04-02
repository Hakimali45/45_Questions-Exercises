/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var myFriends = ["Yashal", "Ali", "Talib", "Usama"];
// 1st method with loop
for (var i = 0; i < myFriends.length; i++) {
    console.log("mr. ".concat(myFriends[i], "! you are invited to my dinner on suturday\n"));
}
// 2nd method using map()
myFriends.map(function (ib) {
    console.log("mr. ".concat(ib, "! you are invited to my dinner on suturday\n"));
});
