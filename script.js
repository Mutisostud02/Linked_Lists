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
    function firstElement() {
        let current = head;
            return current;
    
    }
    function tailElement() {
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
        if (head === null) {
            return null;
        }
        if (head.next === null) {
            let popped = head;
            head = null;
        }
        let current = head;
        while(current.next.next !== null) {
            current = current.next;
        }
        let popped = current.next;
        current.next = null;        
    }
    // used this to initially check my list
    // function toString() {
    //     let current = head;
    //     let result = '';
    //     while (current !== null) {
    //         result += `(${current.value}) -> `;
    //         current = current.next;
    //     }
    //     result += 'null';
    //     return result;
    // }
    function contains(value) {
        if(head === null) {
            return false;
        }
        if (head.next === null && head.value !== value) {
            return false;
        } 
        if (head.next === null && head.value === value) {
            return true;
        }
        let current = head;
        while(current.next !== null){
            current = current.next;
            if(current.value === value) {
                return true;
            } 
        }
        return false;
    }
    function find(value) {
        let count = 0;
        let current = head;
        while(current !== null) {
            if(current.value === value) {
                return count;
            }
            current = current.next;
            count++;
        }
        return null;
 
    }
    function toString() {
        let current = head;
        let ourString = '';
        while(current !== null) {
            let currentValue = current.value;
            ourString += currentValue + ' -> ';
            current = current.next;
        }
        return ourString + 'null';
    }
    function insertAt(value, index) {
        let current = head;
        let count = 0;
        while(current !== null){
            if (count === index) {
                let previousCurrent = current.next;
                current.next = previousCurrent;
                current.value = value;
            }         
            current = current.next;
            count++;   
        }
        
    }
    return {append, prepend, size, firstElement, tailElement, at, pop, contains, find, toString, insertAt}
}


const list = Linkedlist();
list.append('cat');
list.append('dog');
list.insertAt('cow',1)
console.log(list.toString());