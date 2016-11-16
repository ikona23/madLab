export function getName(){
  const stores = ['Blue Store ', 'Green Store ', 'Pink Store ', 'Yello Store']
  return stores
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
