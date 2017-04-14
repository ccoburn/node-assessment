const users = require('./users.js')


module.exports = {

    readAll: function() {
      var userList = users.find()
      return userList;
    },

    findUserById: function(userID) {
      return users.findOne('id', userID)
    },

    getAdmins: function() {
      return users.find('type', 'admin')
    },

    getNonAdmins: function() {
      return users.find('type', 'user')
    },

    getUsersByFavorite: function(favorite) {
      console.log(favorite)
      var favoriteList = [];
      var userList = users.find();
      for (var i = 0; i < userList.length; i++) {
        for (var j = 0; j < userList[i].favorites.length; j++) {
          if (favorite === userList[i].favorites[j]) {
            favoriteList.push(userList[i])
        }
        }
      }
      return favoriteList
    },

    getUsersByAgeLimit: function(age) {
      var ageList = [];
      var userList = users.find();
      for (var i = 0; i < userList.length; i++) {
        if (userList[i].age < age) {
          ageList.push(userList[i])
        }
      }
      return ageList
    },

    findUserByQuery: function(term, value) {
      var userList = users.find();
      var lastNames = [];
      var stateUsers = [];
      var emails =[];
      if (term === "last_name") {
        for (var i = 0; i < userList.length; i++) {
          if (userList[i].last_name === value) {
            lastNames.push(userList[i])
          }
        }
        return lastNames;
      }
      if (term === "email") {
        for (var k = 0; k < userList.length; k++) {
          if (userList[k].email === value) {
            emails.push(userList[k])
          }
        }
        return emails;
      }
      if (term === "state") {
        for (var j = 0; j < userList.length; j++) {
          if (userList[j].state === value) {
            stateUsers.push(userList[j])
          }
        }
        return stateUsers;
    }
  },

  createUser: function(user) {
    return users.add(user);
  },

  updateUser: function(userId, obj) {
    return users.update("id", userId, obj)
  },

  // removeUser: function(userId) {
  //   return users.remove("id", userId);
  // }




}
