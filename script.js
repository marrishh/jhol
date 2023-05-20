function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

while( 0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex --;
      [array[currentIndex],array[randomIndex]] = [
        array[currentIndex],
        array[currentIndex],
      ];
    }
    return array
}
function spin(){
    // wheel.play();

    const element = document.getElementById('mainbox');
    let SelectedItem = '';


    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110 , 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let POG = shuffle([1570, 1930, 2290]);
    let Phone = shuffle([1320,1800,1200,1450]);

    let results = shuffle([
        AC[0],
        Camera[0],
        Zonk[0],
        PS[0],
        Headset[0],
        Drone[0],
        POG[0],
        Phone[0],
    ])
     
     if(AC.includes(results[0])) SelectedItem = 'депозит х 5';
     if(Camera.includes(results[0])) SelectedItem = '1000 евро';
     if(Zonk.includes(results[0])) SelectedItem = '2500 евро';
     if(PS.includes(results[0])) SelectedItem = 'депозит х 5';
     if(Headset.includes(results[0])) SelectedItem = '1000 евро';
     if(Drone.includes(results[0])) SelectedItem = 'Суперприз ';
     if(POG.includes(results[0])) SelectedItem = '2500 евро';
     if(Phone.includes(results[0])) SelectedItem = 'депозит х 5';

   element.style.setProperty("transition", 'all ease 5s');
     element.style.transform = 'rotate('+ results[0] + 'deg)';
     element.classList.remove('animate');
     setTimeout(function(){
        element.classList.add('animate');
     },5000)
     
     setTimeout(function(){
      
        Swal.fire({
            html:"Поздравляю,вы выиграли  " + SelectedItem + ' | ' + '<a target=_blank href= https://wingame.zone/>Получить приз на сайте</a>'
        })
     }, 5500)
     setTimeout(function(){
        element.style.setProperty('transition','initial');
        element.style.transform = 'rotate(90deg)';
     },6000)

}