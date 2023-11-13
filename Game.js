function start()
{
    //creating die 1
    var die1 = 0

    //creating die 2
    var die2 = 0
    
    //making die one randon
    die1= Math.ceil(Math.random() * 6);

    //making die two randon
    die2= Math.ceil(Math.random() * 6);
    
    // finding the sum of two die
    var sum= die1+die2

    // telling what die one is
    document.write("Die 1 = " + die1)

    // adding space
    document.write("<br/>")

    //telling what die two is 
    document.write("Die 2 = " + die2)

    //adding space
    document.write("<br/>")

    // telling the sum
    document.write("sum = " + sum)

    // adding space
    document.write("<br/>")

}