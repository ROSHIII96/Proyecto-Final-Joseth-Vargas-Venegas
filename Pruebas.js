class Queue
{
    constructor()
    {
      this.itemsQueue = [];  //Se agrega el array item por medio del constructor
    }

    enqueue(element)   //Insertion ------------------
    {
      this.itemsQueue.push(element); 
    }
  
    dequeue()  //Deletetion--------------
    {
      if (this.isEmpty()) 
      {
      return "La cola está vacía";
      }

      return "Valor eliminado: " + this.itemsQueue.shift();  //Elimina el primer elemento y muestra
    }
  
    peek() // Método para leer el primer elemento de la cola sin eliminarlo
    {
      if (this.isEmpty()) 
        {
        return "La cola está vacía";
        }
      return this.itemsQueue[0];
    }
  
    isEmpty() // Validacion para saber si se encuentra vacio
    {
      return this.itemsQueue.length === 0;
    }
  
    size() // Método para obtener el tamaño de la cola
    {
      return this.itemsQueue.length;
    }
  
    // Método para imprimir la cola
    print()  //Read -----------------
    {
      let returnQueue = "";
      for (let i = 0; i < this.itemsQueue.length; i++) 
        {
          returnQueue += this.itemsQueue[i];
          if(i+1<this.itemsQueue.length)
            {
              returnQueue += ", ";
            }
        }
      return returnQueue;
    }
}
  
const queue = new Queue();
 
function StartProgram()
{
  document.getElementById("output2").innerText = "In Real Time  [" + queue.print() + "]";
}

function Read()  //Metodo para leer
  {
    document.getElementById("output").innerText = "Size: " + queue.size() + "  Queue: " + queue.print();
  }
  
  function searchFirst()  //Metodo para buscar el primero
  {
    document.getElementById("output").innerText = "First Element: " + queue.peek();
  }
  
  function deletion()  //Metodo para eliminar
  {
    document.getElementById("output").innerText = queue.dequeue();
    document.getElementById("output2").innerText = "In Real Time  [" + queue.print() + "]";
  }

  function addToQueue()  //Agregar al Queue
  {
    var number = parseInt(document.getElementById("inputNumber").value); // Obtenemos el número del cuadro de texto

    // Verificamos si el número es válido
    if (!isNaN(number)) 
      {
      queue.enqueue(number); // Agregamos el número a la cola
      alert("Se agrego correctamente el numero:  --->>>" + number);
      document.getElementById("output2").innerText = "In Real Time  [" + queue.print() + "]";
      } 
    else //Validacion en caso de que no se ingrese ningun numero
      { 
      alert("Por favor, ingresa un número.");
      }
  }


  function insertion() 
  {
    queue.enqueue("1");
    queue.enqueue("2");
    queue.enqueue("3");
    queue.enqueue("4");
    queue.enqueue("5");
    queue.enqueue("6");
    document.getElementById("output").innerText = "Insertion operation performed";
  }

   //Inserción de elementos en la cola
  queue.enqueue("1");
  queue.enqueue("2");
  queue.enqueue("3");
  queue.enqueue("4");
  queue.enqueue("5");
  queue.enqueue("6");

  // Impresión de la cola
   console.log("Cola actual:", queue.print());
  
   //Lectura del primer elemento de la cola
   console.log("Primer elemento de la cola:", queue.peek());
   
   //Eliminación del primer elemento de la cola
   console.log("Elemento eliminado:", queue.dequeue());
   
  // Impresión de la cola después de la eliminación
   console.log("Cola actualizada:", queue.print());

  