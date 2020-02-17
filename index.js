class Node{
   constructor(data, next = null){
      this.data = data;
      this.next = next;
   }
}

class LinkedList{
   constructor(head){
      this.head = head;
      this.length = 0;
   }

   // Insert first node
   insertFirst(data){
      this.head = new Node(data,this.head);
      this.length++;
   }

   // Insert last node
   insertLast(data){
      let node = new Node(data);
      let current;
      if(!this.head)
      {
         this.head = node;
      }
      else
      {
         current = this.head;
         while(current.next){
            current = current.next;
         }
         current.next = node;
      }

      this.length++;
   }

   // Insert at index
   insertAtIndex(data, index){
      if(index > 0 && index > this.length){
         return;
      }

      if(index === 0){
         this.insertFirst(data);
         // this.head = new Node(data,this.head);
         return;
      }

      const node = new Node(data);
      let current, previous;

      current = this.head;
      let count = 0;

      while(count < index){
         previous = current;
         count++;
         current = current.next;
      }

      node.next = current;
      previous.next = node;
      
      this.length++;
   }

   // Get at index
   getAtIndex(index){
      let current = this.head;
      let count = 0;

      while(current){
         if(count == index){
            console.log(current.data);
         }
         count++;
         current = current.next;
      }

      return null;
   }

   // Remove at index
   removeAtIndex(index){
      if(index > 0 && index > this.length ){
         return;
      }

      let current = this.head;
      let previous;
      let count = 0;

      if(index === 0){
         this.head = current.next;
      }
      else
      {
         while(count < index){
            count++;
            previous = current;
            current = current.next;
         }
         
         previous.next = current.next;
      }

      this.length--;
   }

   // Clear list
   clearList(){
      this.head = null;
      this.length = 0;
   }

   // Print list data
   printList(){
      let current = this.head;
      while(current){
         console.log(current.data);
         current = current.next;
      }
   }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAtIndex(500,0);
ll.getAtIndex(2);
// ll.removeAtIndex(2);
// ll.clearList();
ll.printList();
