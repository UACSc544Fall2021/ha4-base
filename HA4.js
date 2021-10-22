// YOUR CODE HERE (OPTIONAL)

window.addEventListener('load', function () {
    // YOUR CODE HERE


});


// YOUR CODE HERE (OPTIONAL)


let drawTree = function(tree) {
    // YOUR CODE HERE






}


// Modifies the input tree with x and y coordinates for each node based on
// the Reingold Tilford Tidy Tree layout.
//
// Parameters:
//   tree: a binary tree encodes as a JSON object. The object should have a
//     key called "nodes" which is an array of JSON objects with a
//     "left" key and "right" key. The latter two point to the array index of
//     the left and right child nodes, or null if no such child node exists.
//   vsep: the vertical separation between tree levels
//   hsep: the horizontal separation between tree levels
//
// Output:
//   An altered version of the input tree where each node object has x and y
//   values. Note each will also have left_contour and right_contour values.
let calculateRTLayout = function(tree, vsep, hsep) {


    // This is the main call to the tidy tree layout.
    //
    // Parameters:
    //   node: a node object as described above
    //   depth: the depth of that node object in the tree
    //
    // Output:
    //   No return value, but at the end of the function, the subtree rooted
    //   at the input node has a valid local layout (x, y, left, and right
    //   contours have been set)
    let _RTLayout = function(node, depth) {
	// YOUR CODE HERE





	_setInitialContours(node);
	
	let offset = _findOffset(node.left, node.right);
	_updateXValues(tree.nodes[node.right], offset);
	_updateContours(node.left, node.right);
	
	_setNodeCoordinates(node, depth);

	return node;
    }


    // Sets the left and right contour values for the next level of the tree
    // from the input node. 
    //
    // Parameters:
    //   node: a node object
    //
    // Output:
    //   No return value, but after running this function, the given node has
    //   its left_contour and right_contour set to the appropriate node IDs
    //   (or null if none exist).
    //
    // Recall: The left contour is the left-most node in the local subtree layout at
    // every depth. The right contour is the right-most node in the local
    // layout at every depth
    let _setInitialContours = function(node) {
	// YOUR CODE HERE
	
    }
    


    // Determines the offset by which to shift the right subtree of a given
    // node when assigning layout values.
    //
    // Parameters:
    //   left: the id of the root of the left subtree to compare
    //   right: the id of the root of the right subtree to compare
    //
    // Output:
    //   offset: the number of pixels by which to offset the subtree rooted at
    //   "right" from the subtree rooted at "left". 
    //
    // Note: You will need to check at each level using the contours to make
    // sure nodes don't get too close further down the tree.
    let _findOffset = function(left, right) {
	// YOUR CODE HERE
	
	
    }


    // Shifts the subtree rooted at the given node by the given offset
    //
    // Parameters:
    //   node: a node object
    //   offset: the amount in pixels to shift the x values of the subtree
    //
    // Output:
    //   No return value, but after running this function, the entire subtree
    //   rooted at node will have been shifted by the offset value in the x
    //   direction.
    let _updateXValues = function(node, offset) {
	// YOUR CODE HERE
	
	
    }
    

    // Update the contours of the newly joined left and right subtrees.
    //
    // Parameters:
    //   left: the id of the root of the left subtree being joined
    //   right: the id of the root of the right subtree being joined
    //
    // Output:
    //   No return value, but after running this function, the left and right
    //   contours of the the left and right subtrees are correct.
    let _updateContours = function(left, right) {
	// YOUR CODE HERE
	

    }


    // Sets the x and y coordinates of the given node.
    //
    // Parameters:
    //   node: a node object
    //   depth: the depth of that node object in the tree
    //
    // Output:
    //   No return value, but after running this function, the x and y
    //   properties of the input node will be set.
    //
    // Note: Assumes the children of the input node have already had their
    // coordinates set.
    let _setNodeCoordinates = function(node, depth) {
	// YOUR CODE HERE
	

    }

    

    // Run the layout from the root
    _RTLayout(tree.nodes[0], 0);

    // Return the tree with layout properties
    return tree
}
