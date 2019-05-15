
var myCar = {

    maxSpeed: 70, 
    driver: "Cat Woman", 
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(30, "dog Man");
var myCar3 = new Car(80, "P Man");
var myCar4 = new Car(40, "Spider Man");

myCar.drive(30,5);
myCar3.logDriver();

