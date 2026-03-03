// // Part 2 after 8:47:03
// // step 2
// // State create karne ke liye sabse pehle hume React se createContext import karna hoga
// import { createContext } from "react";
// // createContext ka use karke hum apna Context banate hain

// // Yaha TodoItemsContext ko Capital letters me isliye likha gaya hai
// // kyunki ise multiple jagah use aur export kiya jayega

// // aur future me ise component ki tarah bhi use kiya ja sakta hai
// export const TodoItemsContext = createContext([]);
// // Ab TodoItemsContext ko use karne ke liye hume Provider ka use karna hoga

// // Agar hume is context ko poori application me accessible banana hai,
// // to App.jsx ke andar <TodoItemsContext.Provider> wrap karna padega

// Part 3 after 8:52:52
// import { createContext } from "react";

// export const TodoItemsContext = createContext([]);

// part 5 after 8.56.16
// import { createContext } from "react";

// export const TodoItemsContext = createContext([]);

// part 6 9:00:00
// import { createContext } from "react";
// export const TodoItemsContext = createContext([]);

// 9.07.23
import { createContext } from "react";
// 9.10.7
// step 2
/*
  Yahan hum Context create kar rahe hain.

  createContext ke andar default value dete hain.
  Agar hum sirf empty array dete, to autocomplete me 
  functions ka suggestion nahi milta.

  Isliye hum ek object de rahe hain jisme:
  - todoItems (array)
  - addNewItem (function)
  - deleteItem (function)

  Isse:
  1. Better autocomplete milta hai
  2. Code samajhne me easy hota hai
  3. Structure clear rehta hai
*/

// Default structure de rahe hain taaki:
// 1. Autocomplete mile
// 2. Agar Provider na ho to app crash na kare
// Ye sirf fallback value hai, real value Provider se aati hai
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
