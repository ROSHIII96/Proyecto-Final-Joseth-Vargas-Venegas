class Queue 
{
    constructor() 
    {
      this.items = [];
    }
  
    // Método para insertar un elemento en la cola
    enqueue(element) 
    {
      this.items.push(element); 
    }
  
    // Método para eliminar y devolver el primer elemento de la cola
    dequeue() 
    {
      if (this.isEmpty()) 
        {
        return "La cola está vacía";
        }
      return this.items.shift();
    }
  
    // Método para leer el primer elemento de la cola sin eliminarlo
    peek() 
    {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  
    // Método para verificar si la cola está vacía
    isEmpty() 
    {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la cola
    size() 
    {
      return this.items.length;
    }
  
    printQueue()  ///Este lo agregue yo para ver el foreach
   {
        this.array.forEach(element => {
            console.log(element);
        });
   }
    // Método para imprimir la cola
    print() 
    {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Ejemplo de uso
  const queue = new Queue();
  
  // Inserción de elementos en la cola
  queue.enqueue("1");
  queue.enqueue("2");
  queue.enqueue("3");
  queue.enqueue("4");
  queue.enqueue("5");
  queue.enqueue("6");

   // Impresión de la cola
   console.log("Cola actual:", queue.print());
  
   // Lectura del primer elemento de la cola
   console.log("Primer elemento de la cola:", queue.peek());
   
   // Eliminación del primer elemento de la cola
   console.log("Elemento eliminado:", queue.dequeue());
   
   // Impresión de la cola después de la eliminación
   console.log("Cola actualizada:", queue.print());


function access() 
  {
    document.getElementById("output").innerText = "Access operation performed";
  }
  
  function search() 
  {
    Queue.enqueue
    document.getElementById("output").innerText = "Search operation performed";
  }
  
  function insertion() 
  {
    document.getElementById("output").innerText = "Insertion operation performed";
  }
  
  function deletion() 
  {
    document.getElementById("output").innerText = "Deletion operation performed";
  }
