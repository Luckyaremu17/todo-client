import { Grid, Button, Typography, Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import CreateToDoFrom from "./CreateToDoFrom";
import { setToDoList, updateToDoItem, getToDoItems } from "../../redux/reducers/coreSlice";

const TodoList = () => {
  const [createNewTask, setCreateNewTask] = useState(false);
  const { ToDo, ToDoList } = useSelector((state) => state.core);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDoItems());
  }, []);

  const onItemChecked = (event, item) => {
    const newTodo = { ...item, IsDeleted: !item?.IsDeleted };
    dispatch(updateToDoItem(newTodo));
  };

  const onSubmitNewTask = (newTodo) => {
    dispatch(setToDoList(newTodo));
  };

  return (
    <Grid container style={{ padding: 25 }}>
      <Grid xs={4} style={{ paddingTop: 25, textAlign: "left" }}>
        <Box>
          <Typography>Hello :)</Typography>
          <Typography>Here is your to do list</Typography>
          <Typography style={{ fontSize: 12 }}>
            The task list is the test
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            Please think of reusable/generic code
          </Typography>
          <Typography style={{ fontSize: 12 }}>Good luck</Typography>
          {!createNewTask ? (
            <Button
              onClick={() => setCreateNewTask(true)}
              variant="contained"
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Create new task
            </Button>
          ) : null}
          {createNewTask ? (
            <CreateToDoFrom props={{ ...ToDo }} onSubmit={onSubmitNewTask} />
          ) : null}
          {createNewTask ? (
            <Button
              onClick={() => setCreateNewTask(false)}
              variant="text"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Cancel
            </Button>
          ) : null}
        </Box>
      </Grid>
      <Grid xs={8} style={{ margin: "0 auto", paddingTop: 25 }}>
        <Typography
          style={{ textAlign: "left", marginTop: 15, marginBottom: 5 }}
        >
          To Do List
        </Typography>
        {ToDoList.filter((td) => {
          return td.IsDeleted === false;
        }).map((item, idx) => {
          return (
            <TodoItem
              key={item.ID}
              props={item}
              onItemChecked={(e) => onItemChecked(e, item)}
            />
          );
        })}
        <Typography
          style={{ textAlign: "left", marginTop: 15, marginBottom: 5 }}
        >
          Archive List
        </Typography>
        {ToDoList.filter((td) => {
          return td.IsDeleted === true;
        }).map((item, idx) => {
          return (
            <TodoItem
              key={item.ID}
              props={item}
              onItemChecked={(e) => onItemChecked(e, item)}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TodoList;
