import { createSlice } from "@reduxjs/toolkit";

export const coreSlice = createSlice({
  name: "core",
  initialState: {
    ToDo: {
      ID: -1,
      Title: "",
      Text: "",
      IsDeleted: false,
      CreatedDate: null,
    },
    ToDoList: [
      // {
      //   ID: 1,
      //   Title: "Task #1",
      //   Text: "OnItemChecked should add strike through line on the text so the task will be marked as done",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 2,
      //   Title: "Task #2",
      //   Text: "Add item to the list on form submit",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 3,
      //   Title: "Task #3",
      //   Text: "Add Validation to the Item Creation Form for empty text/title",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 4,
      //   Title: "Task #4",
      //   Text: "Remove the ID, IsDeleted & CreatedDate fields (The system should generate it automatically before the item is added to the list)",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 5,
      //   Title: "Task #5",
      //   Text: "Marked as done item should be presented in Archive List section",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 6,
      //   Title: "Task #6",
      //   Text: "On select item from Archive List, the item should return back the top list (To Do List)",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 7,
      //   Title: "Task #7",
      //   Text: "Order lists by Created Date",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
      // {
      //   ID: 8,
      //   Title: "Task #8",
      //   Text: "Move css styles from elements into seperate css file (Bonus: JSX)",
      //   IsDeleted: false,
      //   CreatedDate: Date.now(),
      // },
    ],
  },
  reducers: {
    setToDoList: (state, action) => {
      state.ToDoList = [
        ...state.ToDoList,
        {
          ...action.payload,
          ID: state.ToDoList.length + 1,
          IsDeleted: false,
          CreatedDate: Date.now(),
        },
      ];
      localStorage.setItem('items', JSON.stringify(state.ToDoList))
    },
    updateToDoItem: (state, action) => {
      state.ToDoList[action.payload.ID - 1] = action.payload;
      localStorage.setItem('items', JSON.stringify(state.ToDoList))
    },
    getToDoItems: (state, action) => {
      const items = localStorage.getItem('items');
      state.ToDoList = items ? JSON.parse(localStorage.getItem('items')) : [];
    },
  },
});

export const { setToDoList, updateToDoItem, getToDoItems } = coreSlice.actions;

export default coreSlice.reducer;
