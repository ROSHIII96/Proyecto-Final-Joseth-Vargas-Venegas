class Queue
{
    constructor()
    {
      this.itemsQueue = [];  //Se agrega el array por medio del constructor
    }

    enqueue(element)   //Insertion ------------------
    {
      this.itemsQueue.push(element); 
    }
  
    dequeue()  //Deletetion--------------
    {
      if (this.isEmpty()) 
        {
        return "The queue is empty";
        }
      return "Removed value: " + this.itemsQueue.shift(); //Elimina y muestra primer elemento
    }
  
    peek() // Método para leer el primer elemento de la cola sin eliminarlo
    {
      if (this.isEmpty()) {
        return "The queue is empty";
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
          returnQueue += this.itemsQueue[i]; //
          if(i+1<this.itemsQueue.length)
            {
              returnQueue += ", ";
            }
        }
      return returnQueue;
    }
}
  
const queue = new Queue(); //Instancia
 
function StartProgram()
{
  document.getElementById("output2").innerText = "In Real Time  [" + queue.print() + "]"; //Busca el elemento con este id y se actualiza
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
    
  if (!isNaN(number)) 
    {
      queue.enqueue(number); // Agregamos el número a la cola
      alert("Se agrego correctamente el numero  --->>>  " + number);
      document.getElementById("output2").innerText = "In Real Time  [" + queue.print() + "]";
    } 
    else 
    { 
      alert("Por favor, ingresa un número.");
    }
}

//Cambios finales realizados