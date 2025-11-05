const breakfastMenu = ['Pancakes-$12', 'Eggs Benedict-$22.9', 'Oatmeal-$15', 'Frittata'];
const mainCourseMenu = ['Steak-$13', 'Pasta-$20', 'Burger-$22', 'Salmon-$21'];
const dessertMenu = ['Cake-$7', 'Ice Cream-$5', 'Pudding-$12', 'Fruit Salad-$15'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;