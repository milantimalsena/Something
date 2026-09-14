{
  var varVariable = "Initial var";
  let letVariable = "Initial let";
  const constVariable = "Initial const";

  // --- 1. Reassigning inside the block ---
  varVariable = "Updated var inside";     // Works: var can be reassigned
  letVariable = "Updated let inside";     // Works: let can be reassigned
  
  // constVariable = "Updated const inside"; 
  // TypeError: Assignment to constant variable.
}

// --- 2. Reassigning outside the block ---
varVariable = "Updated var outside";       // Works: var ignores block scope

// letVariable = "Updated let outside";     
// ReferenceError: letVariable is not defined

// constVariable = "Updated const outside"; 
// ReferenceError: constVariable is not defined