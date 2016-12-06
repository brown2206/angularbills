let billData = [
  { name: 'Capital One', paid: true },
  { name: 'Navy Federal', paid: false },
  { name: 'GM Financial ', paid: false }
]

angular
  .module("angryPay", [])
  .controller("billsCtrl", [ billController ])

function billController () {
  this.bills = billData
}
