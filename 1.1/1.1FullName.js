function callme(Fullname) {
  const firstname = "Ali";
  const lastname = "Ahmadi";
  Fullname(firstname, lastname);
}
callme(function Name(firstname, lastname) {
  console.log(`Fullname is : ${firstname} ${lastname}`);
});
