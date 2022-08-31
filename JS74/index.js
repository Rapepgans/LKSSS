let map = new map();

map.set('mango', 'pencit');
map.set('Banana', 'gedang');
map.set('score', 100);

console.log(map);

for (let el of map){
    console.log(el);
}

console.log(map.has('yahaha'));

map.delete('Banana');
console.log(map);

console.log(map.values());
console.log(map.keys());

map.clear();
console.log(map);