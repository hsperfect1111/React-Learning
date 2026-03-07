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
// import { createContext } from "react";
// // 9.10.7
// // step 2
// /*
//   Yahan hum Context create kar rahe hain.

//   createContext ke andar default value dete hain.
//   Agar hum sirf empty array dete, to autocomplete me
//   functions ka suggestion nahi milta.

//   Isliye hum ek object de rahe hain jisme:
//   - todoItems (array)
//   - addNewItem (function)
//   - deleteItem (function)

//   Isse:
//   1. Better autocomplete milta hai
//   2. Code samajhne me easy hota hai
//   3. Structure clear rehta hai
// */

// // Default structure de rahe hain taaki:
// // 1. Autocomplete mile
// // 2. Agar Provider na ho to app crash na kare
// // Ye sirf fallback value hai, real value Provider se aati hai
// export const TodoItemsContext = createContext({
//   todoItems: [],
//   addNewItem: () => {},
//   deleteItem: () => {},
// });

// 9.33.26
// step 2
// saara logic store me rakh dega
// store humne isiliye banaya tha taki jo bhi humara business logic hai
// jo data rakhene ke kaam aa raha hai aur edit krne ke kaam aa raha hai pura ka pura store ke andar hona chahiye
// component ka kaam hona chahiye usko pata ho state use krni hai yaa context use krna hai to kaha pr hai but woh directly data ko edit ki zeemedari unki naa ho
import { createContext } from "react";
//
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

/* step 7
todoItemReducer ko bhi move kr dege store mein */

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newTodoItems;
};

// step 3 9.35.03
/* Ab app wala jo code hai state manageent wala jo code hai 
usko move kr dete hai store wale provider ke andar */
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newTodoAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  /* step 4
  Ab addNewItem, deleteItem coponent ban gaya hai 
  component kb banayega jb woh return karegi woh use kya kr rahi hai 
  children wala concept use kr layege 
  mein directly yaha pr use kr leta hu jo app me provider banaya tha */
  // wrapping kaha krne ke liye bol raha hu
  // provider ki wrapping yaha pr krva rahe hai
  return (
    /* step 6
    ContextProvider ka kaam yaha pr move kr diya */
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
      /* step 5
      iske andar kya paas kr skta hu 
      TodoItemsContextProvider kya le raha hai ? kuch bhi nhi le raha hai 
      to mein yaha pr children paas kr skta hu 
      kisine agar mere andar kuch bhi paas kiya hai to props.children milta hai
      us children ko render kr rahe hai yaha pr */
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
