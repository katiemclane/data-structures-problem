//don't worry about code below this line
var fake_names = ['Shiloh', 'Alec', 'Sarah', 'Brock', 'Katie', 'Isaac', 'Sean', 'Parker', 'Mara', 'Leilani', 'Leila', 'Alex', 'Lane', 'Chell', 'GLADoS', 'John', 'Jordan'];
function randName() {
     return fake_names[Math.round(Math.random()*(fake_names.length-1))];
}
function randTime() {
     return Math.round((Math.random()*5000)+100);
}
function tick() {
	var name = randName();
	console.log('[SERVER]: user joining: '+name);
    window.new_user_joined(name);
    setTimeout(tick, randTime());
}
tick();
setInterval(window.assign_to_chatroom, 5000);