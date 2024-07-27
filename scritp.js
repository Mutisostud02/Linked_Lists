// using factory functions
// using factory functions

function Node(value) {
   return {
    value : value,
    next : null,
    }
}
function Linkedlist() {
    let head = null;
    function append(val) {
        let newNode = Node(val);
        if (head === null) {
            head = newNode;
        }
        else {
            let current = head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    function prepend(val) {
        let newNode = Node(val);
        if(head === null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }
    function size() {
        let count = 0;
        let current = head;
        if (current !== null) {
            while(current !== null) {
                count ++;
                current = current.next
            }
        } 
        return count;
    }
    function head() {
        let current = head;
            return current
    
    }
    function tail() {
        let current = head;
        if(current === null) {
            return null;
        } else {
            while(current.next !== null) {
                current = current.next;
            }
        }
        return current;
    }
    function at(val) {
        let count = 0;
        let current = head;
  
        if (current !== null) {
            while(current !== null) {
                if(count === val) {
                    return current;
                }
                count ++;
                current = current.next
            }
        } 
        return null;
    }
    function pop() {
        let current = head;
        while(current !== null) {
            if(current.next === null) {
                current.next = null;
            }
        }
    }

    return {append, prepend, size, head, tail, at, pop}
}


const list = Linkedlist();
console.log(list.append('dog'))
console.log(list.append('cat'))