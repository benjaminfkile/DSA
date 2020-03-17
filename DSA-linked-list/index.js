
class _Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.nodes = []
    }

    insertFirst(item) {
        let newNode = new _Node(item, this.head);
        this.head = newNode;
        this.nodes.push(newNode)
        return this.nodes
    }

    add(item) {
        let newNode = new _Node(item, null)
        let lastItem = this.nodes[this.nodes.length - 1]
        lastItem.next = newNode
        this.nodes.push(newNode)
        return this.nodes
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            let newNode = new _Node(item, null)
            let lastItem = this.nodes[this.nodes.length - 1]
            lastItem.next = newNode
            this.nodes.push(newNode)
        }
        return this.nodes

    }

    find(list, input) {

        for (let i = 0; i < list.nodes.length; i++) {
            if (input === list.nodes[i].val) {
                return "Found " + input + " at position: " + i
            }
        }
        return "Not Found"
    }

    remove(list, item) {

        if (!list.head) {
            return "empty list"
        }
        if (list.head.val === item) {
            list.nodes.shift()
            list.head = list.head.next;
            return list
        } else {
            for (let i = 0; i < list.nodes.length; i++) {
                if (list.nodes[i].val === item) {
                    list.nodes[i].val = list.nodes[i + 1].val
                    list.nodes.splice(i, i)
                }
            }
        }
        return list
    }

}

const linkedList = new LinkedList()

linkedList.insertFirst('1')
linkedList.add('2')
linkedList.add('3')
linkedList.add('4')
linkedList.insertLast("5")


// console.log(linkedList.find(linkedList, '2'))

// console.log(linkedList.remove(linkedList, "3"))


