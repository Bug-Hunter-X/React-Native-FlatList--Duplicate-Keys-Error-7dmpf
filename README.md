## React Native FlatList Duplicate Keys Bug

This repository demonstrates a common error in React Native's FlatList component: using duplicate keys for list items.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

**Problem:**  When keys are not unique, FlatList struggles to efficiently manage rendering. This can lead to incorrect item display, unexpected behavior, and even crashes. 

**Solution:**  Ensure each item has a unique and stable key.  The best approach is usually to use a unique identifier from your data source (e.g., a database ID).