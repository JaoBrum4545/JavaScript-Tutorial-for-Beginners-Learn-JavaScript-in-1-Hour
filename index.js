    // Comentario  

    //
    console.log('Hey hey hey') ;
    
    // Variavel
    let name = 'jaoo';
    console.log(name);

    //Numerico
    let valor = 4.5;
    valor = 6; 
    console.log(valor);

    //Constante
    const interestRate = 5.9;
    console.log(interestRate);

    //Primitives/value types:
    //String literal
    let name2 = 'mosh';
    //Number literal //There is one kind of numbers
    let age = 30;
    //Boolean Literal
    let isaprov = false;
    //Undefined
    let und = undefined;
    let und2;
    //Null, clear all value from a variable.
    let Selectcol = null;

    ////////////////////////////////////////////
    //Dynamic Typing 

    ////////////////////////////////////////////
    //Object

    //A type of referece type!!!

    let personObject = {
        name: 'Joao',
        age: 21
    };

    console.log(personObject);

    //Change proporties!

    personObject.name = 'Alcina';

    console.log(personObject.name);

    personObject['name'] = 'Mario';

    console.log(personObject.name);

    ////////////////////////////////////////////
    //Arrays

    Selectcol = ['red', 'Blue'];

    console.log(Selectcol);

    //Add elements

    Selectcol[Selectcol.length] = 'green';

    console.log(Selectcol);

    ////////////////////////////////////////////
    //Function

    //Perform a task

    function greet()
    {
        console.log('Olá, tudo bem?');
    }

    greet();

    function greetn(name)
    {
        console.log('Olá ' + name + ', tudo bem?');
    }

    greetn(personObject.name);

    ////////////////////////////////////////////
    //Types function

    function square(number)
    {
        return number*number;
    }

    let number = square(5);

    console.log(number)

    //End;



