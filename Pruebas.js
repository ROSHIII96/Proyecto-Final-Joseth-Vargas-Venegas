//Enqueue, Dequeue, Peek, Empty

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Método para insertar un elemento en la cola
    enqueue(element) {
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
    peek() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  
    // Método para verificar si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la cola
    size() {
      return this.items.length;
    }

printQueue(){
    this.array.forEach(element => {
        console.log(element)
    })
}
  
    // Método para imprimir la cola
    print() {
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
  queue.enqueue("Read");
  queue.enqueue("Insertion");
  queue.enqueue("Deletion");
  
  // Impresión de la cola
  console.log("Cola actual:", queue.print());
  
  // Lectura del primer elemento de la cola
  console.log("Primer elemento de la cola:", queue.peek());
  
  // Eliminación del primer elemento de la cola
  console.log("Elemento eliminado:", queue.dequeue());
  
  // Impresión de la cola después de la eliminación
  console.log("Cola actualizada:", queue.print());
  




// class Queue {
//     constructor() {
//         this.items = {}
//         this.frontIndex = 0
//         this.backIndex = 0
//     }
//     enqueue(item) {
//         this.items[this.backIndex] = item
//         this.backIndex++
//         return item + ' es el #' + this.backIndex + ' agregado.'
//     }
//     dequeue() {
//         const item = this.items[this.frontIndex]
//         delete this.items[this.frontIndex]
//         this.frontIndex++
//         return 'Se elimino el # ' + item 
//     }
//     peek() {
//         return this.items[this.frontIndex]
//     }
//     get printQueue() {
//         return this.items;
//     }
// }
// const queue = new Queue()
// console.log(queue.enqueue(7))
// console.log(queue.enqueue(2))
// console.log(queue.enqueue(6))
// console.log(queue.enqueue(4))
// console.log(queue.dequeue())
// console.log(queue.peek())
// let str = queue.printQueue;
// console.log(str)



//Hecho por el profesor
// class Queue{

//     constructor()
//     {
//         this.array = [];
//     }

//     Enqueue(element)
//     {
//         this.array.push(element);
//     }

//    Dequeue()
//    {
//        this.array.shift(); 
//    }

//    printQueue()
//    {
//         this.array.forEach(element => {
//             console.log(element);
//         });
//    }
// }

// const cola = new Queue();
// cola.Enqueue(1);
// cola.Enqueue(2);
// cola.Enqueue(3);

// cola.Dequeue();

// cola.printQueue();