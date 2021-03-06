var model = {
    numCreatures: 4,
    numPictures: 8,
    locations: 6,
    numletters: 26,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    horizontalWindow: function() {
      window.addEventListener("orientationchange", function (evt) {
      switch(window.orientation) {
          case 90: // landscape
      }
      }, false);
    },

    chooseCreatures: function() {
        var arrNumb = [];
        while (arrNumb.length < this.numCreatures) {
            var randomNumber = Math.ceil(Math.random() * this.numPictures)
            if (arrNumb.indexOf(randomNumber) > -1) continue;
            arrNumb[arrNumb.length] = randomNumber;
        }
        view.introductionCreature(arrNumb);
    },

    chooseLetters: function() {
        var arrLetters = [];
        while (arrLetters.length < this.numCreatures / 2) {
            var randomLetter = Math.floor(Math.random() * this.numletters)
            var letter = this.alphabet[randomLetter];
            if (arrLetters.indexOf(letter) > -1) continue;
            arrLetters[arrLetters.length] = letter;
        }
        view.myLetters(arrLetters);
    },


    coordinatePlacesHidden: function() {
        var getCoordinate = document.querySelectorAll(".places"),
            getCoordinateBody = document.body.getBoundingClientRect(),
            arrCoordinates = [];

            for (let i = 0; i < getCoordinate.length; i++) {
            var coordinate = getCoordinate[i],
                coordinates = coordinate.getBoundingClientRect(),
                heightPlaces = coordinate.clientHeight;
                arrCoordinates[arrCoordinates.length] = [coordinates.left, coordinates.top + heightPlaces];

      }
        model.choosePlacesHidden(arrCoordinates);
    },

    choosePlacesHidden: function(arrCoordinates) {
        var arrPlaces = [],
            mySet = new Set(),
            i = 0;
      // return function (arrPlaces) {
        while (arrPlaces.length < this.numCreatures) {
            var randomNumber = Math.floor(Math.random() * this.locations);
            var randomPlaces = arrCoordinates[randomNumber];
            mySet.add(randomPlaces);
            var arrPlaces = Array.from(mySet);
        }
    //    return arrPlaces;
    //    console.log(arrPlaces);
  //    }
        view.runHidding(arrPlaces);
      }
    }
