export function getName(){
  const stores = ['Regal Burger']
  for (var i = 0; i < stores.length; i++) {
  }
  return stores[0] + "," + stores[1]+ "," + stores[2]
}

export function getNow(){
  var currentdate = new Date();
  var datetime = "Checked in: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " @ "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();
                  return datetime
}

export function timeTo() {
  var currented = Date.now()
  return currented
}
