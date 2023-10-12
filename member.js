function skillsMember() {
    var skills = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }

    for (var key in skills) {
        console.log(key + ': ' + skills[key]);
    }
}
