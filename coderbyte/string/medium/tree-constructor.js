/*
Tree Constructor
Have the function TreeConstructor(strArr) take the array of strings stored in strArr,
which will contain pairs of integers in the following format: (i1,i2),
where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1.
For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
which you can see forms a proper binary tree.
Your program should, in this case, return the string true because a valid binary tree can be formed.
If a proper binary tree cannot be formed with the integer pairs, then return the string false.
All of the integers within the tree will be unique,
which means there can only be one node in the tree with the given integer value.
Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
*/

//the following method throws out trees that fail any of three tests: i) is there only one top node, ii) does any node have more
//than 2 children, or iii) are any node values repeated.  If it passes all of these tests, then it should represent a binary tree.

function TreeConstructor(strArr) {
    //remove spaces from input (one of the tests had bad input)
    strArr = strArr.map(val => val.replace(/s/g, ''));
    let regExChildPattern = /((d+),d+)/;
    let regExParentPattern = /(d+,(d+))/;
    let children = strArr.map(val => regExChildPattern.exec(val)[1]);
    let parents = strArr.map(val => regExParentPattern.exec(val)[1]);
    //check to make sure all children are unique
    let childSet = new Set(children);
    if (children.length !== childSet.size) {
        return false;
    }
    //test whether any parent node has more than 2 children
    let parentObj = {};
    parents.forEach(val => {
        if (!parentObj[val]) {
            parentObj[val] = 1;
        } else {
            parentObj[val]++;
        }
    })
    for (let myKey in parentObj) {
        if (parentObj[myKey] > 2) return false;
    }
    //make certain there is one, and only one, top dog
    let uniqParents = Array.from(new Set(parents))
    let topDogs = uniqParents.filter(val => !children.includes(val));
    if (topDogs.length !== 1) return false;
    return true;
}

// Approach 2
function treeConstructor2(strArr) {
    // (child, parent) pairs
    var pairs = strArr.map(pair => pair.match(/\d+/g));
    var tree = {};
    // construct a tree
    for (var pair of pairs) {
        var child = pair[0];
        var parent = pair[1];
        // a node on a tree has its value as the key and the node itself as the value
        tree[child] = tree[child] || { parent: null, children: [] };
        tree[parent] = tree[parent] || { parent: null, children: [] };
        tree[child].parent = parent;
        tree[parent].children.push(child);
    }
    // a valid binary tree has only one root with no parent
    // and every node has <= 2 children
    if (Object.values(tree).every(node => node.children.length <= 2) &&
        Object.values(tree).filter(node => node.parent === null).length === 1) {
        return true;
    } else return false;
}